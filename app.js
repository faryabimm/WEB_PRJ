var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require('parse-dashboard');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();


SERVER_IP = '0.0.0.0';


const PORT = 3001;

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// view engine setups
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var parse_server_config = {
    databaseURI: 'mongodb://localhost:27017/snl_server_dev', // Connection string for your MongoDB database
    // cloud: '/Users/mohammadmahdi/Development/WebstormProjects/snl_server/cloud.js', // Absolute path to your Cloud Code
    appId: 'theAppId123',
    javascriptKey: 'theJavaScriptKey123',
    masterKey: 'theMasterKey123', // Keep this key secret!
    fileKey: 'theFileKey123',
    serverURL: 'http://' + SERVER_IP + ':' + PORT + '/snl_server', // Don't forget to change to https if needed
    liveQuery: {
        classNames: ['GameSession'],
        redisURL: 'redis://127.0.0.1:6379'
    },
};
var pars_dashboard_options = {allowInsecureHTTP: false};
var pars_dashboard_config = {
    "apps": [
        {
            "serverURL": "http://" + SERVER_IP + ":" + PORT + "/snl_server",
            "appId": "theAppId123",
            "masterKey": "theMasterKey123",
            "appName": "Snake And Ladder Game"
        }
    ],
};
var live_query_server_config = {
    appId: 'theAppId123',
    keyPairs: {
        javascriptKey: 'theJavaScriptKey123',
        masterKey: 'theMasterKey123', // Keep this key secret!
    },
    serverURL: 'http://' + SERVER_IP + ':' + PORT + '/snl_server',
    websocketTimeout: 10 * 1000,
    cacheTimeout: 60 * 600 * 1000,
    logLevel: 'VERBOSE',
    redisURL: 'redis://localhost:6379'
};

var api = new ParseServer(parse_server_config);
var dashboard = new ParseDashboard(pars_dashboard_config, pars_dashboard_options);

app.use('/dashboard', dashboard);
app.use('/snl_server', api);

app.use('/', index);
app.use('/users', users);


var game_id = 0;
var one_needed = false;
var generate_enter_data = function (req, res) {
    if (!one_needed) {
        res.json({
            player_id: 'P1',
            game_id: game_id,
            game_ready: false
        });
        one_needed = true;
    } else {
        res.json({
            player_id: 'P2',
            game_id: game_id,
            game_ready: true
        });
        game_id += 1;
        one_needed = false;
    }
};

app.get('/enter', generate_enter_data);


var httpServer = require('http').createServer(app);
httpServer.listen(PORT, function () {
    console.log('server is running on port ' + PORT + '.');
});


ParseServer.createLiveQueryServer(httpServer, live_query_server_config);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
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