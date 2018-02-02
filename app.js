// // var express = require('express');
// // var path = require('path');
// // var favicon = require('serve-favicon');
// // var logger = require('morgan');
// // var cookieParser = require('cookie-parser');
// // var bodyParser = require('body-parser');
// //
// // var index = require('./routes/index');
// // var users = require('./routes/users');
// //
// // var app = express();
// //
// // // view engine setup
// // app.set('views', path.join(__dirname, 'views'));
// // app.set('view engine', 'jade');
// //
// // // uncomment after placing your favicon in /public
// // //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// // app.use(logger('dev'));
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(cookieParser());
// // app.use(express.static(path.join(__dirname, 'public')));
// //
// // app.use('/', index);
// // app.use('/users', users);
// //
// // // catch 404 and forward to error handler
// // app.use(function(req, res, next) {
// //   var err = new Error('Not Found');
// //   err.status = 404;
// //   next(err);
// // });
// //
// // // error handler
// // app.use(function(err, req, res, next) {
// //   // set locals, only providing error in development
// //   res.locals.message = err.message;
// //   res.locals.error = req.app.get('env') === 'development' ? err : {};
// //
// //   // render the error page
// //   res.status(err.status || 500);
// //   res.render('error');
// // });
// //
// // module.exports = app;
//
// var express = require('express');
// var ParseServer = require('parse-server').ParseServer;
// var ParseDashboard = require('parse-dashboard');
// var app = express();
//
// var api = new ParseServer({
//     databaseURI: 'mongodb://localhost:27017/devwp', // Connection string for your MongoDB database
//     // cloud: '/home/omid/dev/workspaces/web/course/pExpress/cloud.js', // Absolute path to your Cloud Code
//     appId: 'test_app_id',
//     masterKey: 'test_master_key', // Keep this key secret!
//     javascriptKey: '1xoWtDkxw8oZvX3bzhdTuHU7KZB8SGZD9jWQ2V9p',
//     fileKey: 'optionalFileKey',
//     serverURL: 'http://localhost:8080/wp', // Don't forget to change to https if needed
//     liveQuery: {
//         classNames: ['my_class'],
//         redisURL: 'redis://localhost:6379',
//     },
// });
//
//
//
// var options = { allowInsecureHTTP: false };
//
// var dashboard = new ParseDashboard({
//     "apps": [
//         {
//             "serverURL": "http://localhost:8080/wp",
//             "appId": "test_app_id",
//             "masterKey": "test_master_key",
//             "appName": "MyApp"
//         }
//     ]
// }, options);
//
// // Serve the Parse API on the /parse URL prefix
// app.use('/wp', api);
//
// // make the Parse Dashboard available at /dashboard
// app.use('/dashboard', dashboard);
//
// var httpServer = require('http').createServer(app);
// httpServer.listen(8080, function() {
//     console.log('parse-server-example running on port 8080.');
// });
//
// var parseLiveQueryServer = ParseServer.createLiveQueryServer(httpServer);
//
//
// ParseServer.createLiveQueryServer(httpServer,  {
//     appId: 'test_app_id',
//     keyPairs: {
//         javascriptKey: '1xoWtDkxw8oZvX3bzhdTuHU7KZB8SGZD9jWQ2V9p',
//         masterKey: 'test_master_key', // Keep this key secret!
//     },
//     serverURL: 'http://localhost:8030/wp',
//     websocketTimeout: 10 * 1000,
//     cacheTimeout: 60 * 600 * 1000,
//     logLevel: 'VERBOSE',
//     redisURL: 'redis://localhost:6379'
// });
//
//
// module.exports = app;

/**
 * Created by omid on 12/9/17.
 */
var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require('parse-dashboard');
var app = express();

var api = new ParseServer({
    databaseURI: 'mongodb://localhost:27017/devwp', // Connection string for your MongoDB database
    cloud: '/Users/mohammadmahdi/Development/WebstormProjects/pars_test/cloud.js', // Absolute path to your Cloud Code
    appId: 'myAppId123456',
    javascriptKey: '1xoWtDkxw8oZvX3bzhdTuHU7KZB8SGZD9jWQ2V9p',
    masterKey: 'myMasterKey123456', // Keep this key secret!
    fileKey: 'optionalFileKey',
    serverURL: 'http://localhost:8030/wp', // Don't forget to change to https if needed
    liveQuery: {
        classNames: ['test'],
        redisURL: 'redis://127.0.0.1:6379'
    },
});

var options = { allowInsecureHTTP: false };

var dashboard = new ParseDashboard({
    "apps": [
        {
            "serverURL": "http://localhost:8030/wp",
            "appId": "myAppId123456",
            "masterKey": "myMasterKey123456",
            "appName": "MyApp"
        }
    ]
}, options);

// Serve the Parse API on the /parse URL prefix
app.use('/wp', api);

// make the Parse Dashboard available at /dashboard
app.use('/dashboard', dashboard);

var httpServer = require('http').createServer(app);
httpServer.listen(8030, function() {
    console.log('parse-server-example running on port 8030.');
});

ParseServer.createLiveQueryServer(httpServer,  {
    appId: 'myAppId123456',
    keyPairs: {
        javascriptKey: '1xoWtDkxw8oZvX3bzhdTuHU7KZB8SGZD9jWQ2V9p',
        masterKey: 'myMasterKey123456', // Keep this key secret!
    },
    serverURL: 'http://localhost:8030/wp',
    websocketTimeout: 10 * 1000,
    cacheTimeout: 60 * 600 * 1000,
    logLevel: 'VERBOSE',
    redisURL: 'redis://localhost:6379'
});