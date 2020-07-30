import bodyParser from 'body-parser'
import { Watson } from '../functions'
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
        this.server.route('/').get((req, res) => res.status(200).json({  'Hello World': 'EduDoa its alive!'  }))
        this.server.route('/api/bot/beginAssistant').get(Watson.default.beginAssistant)
        this.server.route('/api/bot/talkAssistant').post(Watson.default.talkAssistant)
        this.server.route('/api/bot/closeAssistant').post(Watson.default.closeAssistant)
    }
}

export default new API()