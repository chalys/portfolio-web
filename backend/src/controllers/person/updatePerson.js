process.loadEnvFile();
const db = require("../../models");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const person = await db.Person.findByPk(id);

    if (!person) {
      return res.status(404).json({
        success: false,
        message: `Persona con ID ${id} no encontrada`,
      });
    }

    await person.update(req.body);

    res.status(201).json({
      success: true,
      message: "Persona actualizada exitosamente",
      data: person,
    });
  } catch (error) {
    console.error("Error al actualizar persona:", error);
    res.status(500).json({
      success: false,
      message: "Error interno del servidor al actualizar la persona",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};
