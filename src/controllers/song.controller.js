import SongService from '../services/song.service'
import { one, many, failure } from '../constants/response.constant'

class SongController {
    async getAll(req, res, next) {
        let { skip, limit } = req.query
        skip = parseInt(skip, 10) || 0
        limit = parseInt(limit, 10) || 10

        try {
            const songs = await SongService.getAllSong(skip, limit)
            return res.status(200).json({ ...many, data: songs })
        } catch (error) {
            res.status(500).json({ ...failure, error })
        }
    }

    async getOne(req, res, next) {
        const songId = req.params.id
        try {
            const song = await SongService.getOneSong(songId)
            return res.status(200).json({ ...one, data: song })
        } catch (error) {
            res.status(500).json({ ...failure, error })
        }
    }

    async postOne(req, res, next) {
        const { name } = req.body
        const song = { name }
        try {
            const newSong = await SongService.createOneSong(song)
            res.status(200).json({ ...one, data: newSong })
        } catch (error) {
            res.status(500).json({ ...failure, error })
        }
    }

    async updateOne(req, res, next) {
        const songId = req.params.id
        const { name } = req.body
        const song = { name }

        try {
            const newSong = await SongService.updateOneSong(songId, song)
            console.log({ newSong })
            res.status(200).json({ ...one, data: newSong })
        } catch (error) {
            res.status(500).json({ ...failure, message: error })
        }
    }

    async deleteOne(req, res, next) {
        const songId = req.params.id

        try {
            await SongService.deleteOneSong(songId)
            res.status(200).json({ ...one })
        } catch (error) {
            res.status(500).json({ ...failure, error })
        }
    }
}

export default new SongController()
