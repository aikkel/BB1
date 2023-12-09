var createError = require('http-errors');
var express = require('express');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Routes 1st forbindelse
var indexRouter = require('./routes/index');
var minsideRouter = require('./routes/minside');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var mineAnnoncerRouter = require('./routes/mineAnnoncer')
var annonceRouter = require('./routes/annonce');
var updateRouter = require('./routes/update');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes 2nd forbindelse
app.use('/', indexRouter);
app.use('/minside', minsideRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/mineAnnoncer', mineAnnoncerRouter);
app.use('/annonce', annonceRouter);
app.use('/update', updateRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));

});


app.listen(8080, () => {
  console.log('Server is running on port 8080 and port 3000');
});