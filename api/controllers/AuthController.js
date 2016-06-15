var passport = require('passport'),
    MobileDetect = require('mobile-detect'),
    bcrypt = require('bcrypt');

module.exports = {
 
    login: function (req, res) {
        if(!req.session.passport) {
            res.view('login', { layout: false });
        } else if(req.session.passport.user) {
            res.redirect('/');
        }
    },

    register: function (req, res) {
        res.view('register');
    },

    createUser: function (req, res) {
        User.create({
            username: req.param('username'),
            password: req.param('password')
        }).exec(function createCB(err, created){
            if (err) throw(err);
            console.log('Created user with name ' + created.username);

            res.redirect('/');
        });
    },

    process: function(req, res){
        var self = this;
        passport.authenticate('local', function(err, user, info) {
            if ((err) || (!user)) {
                return res.send({
                    message: 'login failed'
                });
                res.send(err);
            }
            req.logIn(user, function(err) {
                if (err) res.send(err);
                Logging.create({
                    user: user.id,
                    browser: req.headers['user-agent']
                }).exec(function(err){});
                res.redirect('/');
            });
        })(req, res);
    },

    logout: function (req,res){
        req.logout();
        res.send('logout successful');
    },

    detectBrowser: function(request) {
        var ua = request.headers['user-agent'],
            $ = {};

        if (/mobile/i.test(ua))
            $.Mobile = true;

        if (/like Mac OS X/.test(ua)) {
            $.iOS = /CPU( iPhone)? OS ([0-9\._]+) like Mac OS X/.exec(ua)[2].replace(/_/g, '.');
            $.iPhone = /iPhone/.test(ua);
            $.iPad = /iPad/.test(ua);
        }

        if (/Android/.test(ua))
            $.Android = /Android ([0-9\.]+)[\);]/.exec(ua)[1];

        if (/webOS\//.test(ua))
            $.webOS = /webOS\/([0-9\.]+)[\);]/.exec(ua)[1];

        if (/(Intel|PPC) Mac OS X/.test(ua))
            $.Mac = /(Intel|PPC) Mac OS X ?([0-9\._]*)[\)\;]/.exec(ua)[2].replace(/_/g, '.') || true;

        if (/Windows NT/.test(ua))
            $.Windows = /Windows NT ([0-9\._]+)[\);]/.exec(ua)[1];

        return $;
    }
};