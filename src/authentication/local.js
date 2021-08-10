import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import User from '../models/user.model'

passport.use(
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async (username, password, done) => {
            try {
                const user = await User.findOne({ email: username })
                if (!user) throw new Error('User not found')
                if (!validPassword(user.password, password))
                    throw new Error('Password not valid')
                done(null, user)
            } catch (error) {
                done(error)
            }
        }
    )
)

export default passport