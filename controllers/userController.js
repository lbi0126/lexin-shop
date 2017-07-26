var User = require('../models/user');

exports.create = function(req, ret) {
  var newUser = new User(req.body);

  newUser.save(function (err) {
      if (err)
        return next(err);
      res.json({
        message: 'User created'
      });
  });
};

exports.listAll = function(req, res) {
  User.find({}, function (err, users) {
      if (err)
        return next(err);
      res.json(users)
  });
};

exports.getById = function(req, res) {
  User.findById(req.params.id, function (err, user) {
      if (err) return next(err);
      res.json(user)
  });
};

exports.remove = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("User 삭제 실패");
        res.status(200).send("User "+ user.name +" 삭제됨.");
    });
};