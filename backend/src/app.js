var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const personRoutes = require("./routes/person.routes");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/persons", personRoutes);
app.use("/users", usersRouter);

// Middleware para rutas no encontradas
app.use(notFound);

// Middleware para manejo de errores
app.use(errorHandler);

module.exports = app;
