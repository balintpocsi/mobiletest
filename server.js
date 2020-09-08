let server = require('selenium-standalone');
module.exports = {
    start(done) {
        server.install(function(err){
            if(err) return done(err);
            server.start(function (err, child) {
                if (err) return done(err);
                server.child = child;
                done();
            });
        });
    },
    stop() {
        server.child.kill();
    }
};