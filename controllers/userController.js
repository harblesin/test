const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.User.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => res.send(err));
  },

  createUser: async (req, res) => {
    const { userName, password } = req.body;
    const hash = 10;

    try {
      db.User.find({
        where: {
          userName: userName
        }
      }).then(async user => {
        if (user !== null) {
          res.send({
            message: "This username has already been taken"
          });
        } else {
          const passwordHash = await bcrypt.hash(password, hashCost);
          await db.User.create({ userName: userName, password: passwordHash });

          res.status(200).send({ userName });
        }
      });
    } catch (error) {
      res.send(error);
    }
  },

  loginUser: (req, res, next) => {
    passport.authenticate("local", { session: false }, (error, user, info) => {
      if (error || !user) {
        res.send({ error, auth: false });
      } else {
        const payload = {
          _id: user._id,
          userName: user.userName,
          expires: Date.now() + parseInt(360000)
        };

        req.login(payload, { session: false }, error => {
          if (error) {
            res.send({ error, auth: false });
          }

          const token = jwt.sign(JSON.stringify(payload), keys);

          res.cookie("jwt", token, { secure: false });
          res.status(200).send({ user });
        });
      }
    })(req, res, next);
  },

  logout: (req, res, next) => {
    passport.authenticate("local", { session: false }, (error, user, info) => {
      req.login({ session: false }, error => {
        const token = {};
        res.clearCookie("jwt");
        res.status(200).send({ message: "Logged Out" });
      });
    })(req, res, next);
  },

  removeUser: function(req, res) {},

  check: (req, res, next) => {
    passport.authenticate("jwt", { sessions: false }, (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info !== undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        if (user !== undefined) {
          db.User.find({ where: { _id: user._id } }).then(data => {
            res.send({
              data: data,
              auth: true
            });
          });
        } else {
          res.send({
            auth: false
          });
        }
      }
    })(req, res, next);
  }
};
