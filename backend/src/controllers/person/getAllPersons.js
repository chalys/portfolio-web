process.loadEnvFile();
const db = require("../../models");

module.exports = async (req, res) => {
  try {
    const persons = await db.Person.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
    });
    if (!persons || persons.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No se encontraron registros de personas",
      });
    }
    res.status(200).json({
      success: true,
      count: persons.length,
      data: persons,
    });
  } catch (error) {
    console.error("Error al obtener personas:", error);
    res.status(500).json({
      success: false,
      message: "Error interno del servidor al obtener personas",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};
