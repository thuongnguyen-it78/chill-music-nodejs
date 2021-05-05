import { failure } from '../constants/response.constant'

export const handleErrorDev = (err, req, res) => {
    res.status(err.status).json({ ...failure, error: err.message })
}

export const handleErrorPro = (err, req, res) => {
    res.status(err.status).json({ ...failure, error: err.message })
}
