module.exports = function(app) {
    var router = app.loopback.Router();
    router.get('/test', function(req, res) {
        res.send('/api/todo');
    });
    app.use(router);
};