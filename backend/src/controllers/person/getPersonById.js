process.loadEnvFile();
const db = require("../../models");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const person = await db.Person.findByPk(id, {
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
    });
    if (!person) {
      return res.status(404).json({
        success: false,
        message: `Persona con ID ${id} no encontrada`,
      });
    }
    res.status(200).json({
      success: true,
      data: person,
    });
  } catch (error) {
    console.error("Error al obtener persona:", error);
    res.status(500).json({
      success: false,
      message: "Error interno del servidor al obtener persona",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};
