import userRoute from './user.route'
import siteRoute from './site.route'
import songRoute from './song.route'
import playlistRoute from './playlist.route'
import albumRoute from './album.route'
import artistRoute from './artist.route'
import collectionRoute from './collection.route'
import authRoute from './auth.route'

function route(app) {
    app.use('/api/collection', collectionRoute)
    app.use('/api/auth', authRoute)
    app.use('/api/users', userRoute)
    app.use('/api/songs', songRoute)
    app.use('/api/playlists', playlistRoute)
    app.use('/api/albums', albumRoute)
    app.use('/api/artists', artistRoute)
    app.use('/api/', siteRoute)
}

export default route
