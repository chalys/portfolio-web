process.loadEnvFile();
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  // Error de autenticación
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({
      success: false,
      message: 'Token de autenticación inválido o expirado'
    });
  }
  
  // Error de validación de Sequelize
  if (err.name === 'SequelizeValidationError') {
    return res.status(400).json({
      success: false,
      message: 'Error de validación de datos',
      errors: err.errors.map(e => ({
        field: e.path,
        message: e.message
      }))
    });
  }
  
  // Error de llave foránea
  if (err.name === 'SequelizeForeignKeyConstraintError') {
    return res.status(400).json({
      success: false,
      message: 'Error de integridad referencial',
      error: 'No se puede realizar la operación debido a restricciones de llave foránea'
    });
  }
  
  // Error de duplicado
  if (err.name === 'SequelizeUniqueConstraintError') {
    return res.status(400).json({
      success: false,
      message: 'Error de duplicado',
      errors: err.errors.map(e => ({
        field: e.path,
        message: 'El valor ya existe y debe ser único'
      }))
    });
  }
  
  // Error por defecto
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Error interno del servidor',
    error: process.env.NODE_ENV === 'development' ? err : undefined
  });
};

module.exports = errorHandler;