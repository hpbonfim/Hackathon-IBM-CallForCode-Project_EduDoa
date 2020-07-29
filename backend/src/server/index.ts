import bodyParser from 'body-parser'
import express from 'express'
import dotenv from "dotenv"
import morgan from "morgan"

dotenv.config()

class API {
    public server: express.Application

    constructor() {
        this.server = express()
        this.middleware()
        this.routes()
    }
    
    middleware() {
        this.server.use(morgan('dev'))
        this.server.use(bodyParser.json())
        this.server.use(bodyParser.urlencoded({ extended: true }))
    }
    
    routes() {
        this.server.route('/').get((req, res) => res.status(200).json({  'Hello': 'World!'  }))
    }
}

export default new API()