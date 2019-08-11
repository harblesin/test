const passport = require("passport")
const secret = require("./key");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const bcrypt = require("bcrypt");

module.exports = function(passport, user){
    const userModel = user;
    const LocalStrategy = require("passport-local").Strategy;

    passport.use(
        new LocalStrategy(
            {
                usernameField: "userName",
                passwordField: "password"
            },
            async (userName, password, done) => {
                try{
                    const userDocument = await userModel.findOne({
                        where:{
                            userName: userName
                        }
                    });
                    const passwordsMatch = await bcrypt.compare(
                        password,
                        userDocument.password
                    );

                    if(passwordsMatch){
                        return done(null, userDocument);
                    }else{
                        return done("INCORRECT USERNAME OR PASSWORD");
                    }
                } catch(error){
                    done(error)
                }
            }
        )
    )

    passport.use(
        new JWTStrategy(
            {
                jwtFromRequest: req => req.cookies.jwt,
                secretOrKey: secret
            },
            (jwtPayload,done)=>{
                if(Date.now() > jwtPayload.expires){
                    console.log(jwtPayload);
                    return done("jwt expired")
                }
                return done(null, jwtPayload)
            }
        )
    )
}