const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const logger = require('morgan');
const debug = require('debug');

const tweets = require('./api/tweets');
const tweetSentiment = require('./api/tweetSentiment');
const tweetSentimentMap = require('./api/tweetSentimentMap');
const info = require('./api/info');

const app = express();

app.set('port', (process.env.PORT || 3001));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger('dev'));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use('/api/tweets', tweets);
app.use('/api/sentiment', tweetSentiment);
app.use('/api/map', tweetSentimentMap);
app.use('/api/info', info);

app.post('/*', (req, res) => {
  res.redirect('/');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
  res.status(err.status || 500).send({
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  });
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

