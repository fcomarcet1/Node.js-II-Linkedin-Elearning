var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require("fs");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { use } = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// folders for public resources
// usa este orden de busqueda si hay 2 ficheros con mismo nombre
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static("files"));


//  Ruta descargar documento
app.get("/descarga/:nombre_usuario", (req, res) => {

  const streamEscritura = fs.createWriteStream(`${__dirname}/files/text2.txt`);
  streamEscritura.write(
    `Estimable ${req.params.nombre_usuario}: aquí está el documento que solicitas`,
    () => {
      // Mostrar documento al user
      // res.sendFile(`${__dirname}/files/text2.txt`);

      // descarga fichero
      res.download(`${__dirname}/files/text2.txt`, (error) => {
        if (error) {
          console.log("ERROR al descargar fichero");
          res.status(404).render("error");
        } 
        else {
          console.log("Descarga OK");
        }
      });
    }
  );

});


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
