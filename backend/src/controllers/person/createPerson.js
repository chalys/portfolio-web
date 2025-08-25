process.loadEnvFile();
const db = require("../../models");

module.exports = async (req, res) => {
  try {
    const person = await db.Person.create(req.body);
    res.status(201).json({
      success: true,
      message: "Persona creada correctamente",
      data: person,
    });
  } catch (error) {
    console.error("Error al crear persona:", error);
    res.status(500).json({
      success: false,
      message: "Error interno del servidor al crear la persona",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};
