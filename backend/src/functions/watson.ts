import AssistantV2 from 'ibm-watson/assistant/v2'
import { IamAuthenticator } from 'ibm-watson/auth'
import dotenv from 'dotenv'
dotenv.config()

const { ASSISTANT_APIKEY, ASSISTANT_URL, ASSISTANT_ID } = process.env

const assistant = new AssistantV2({
    version: '2020-04-01',
    url: ASSISTANT_URL,
    authenticator: new IamAuthenticator({
        apikey: ASSISTANT_APIKEY
    })
})

class WatsonFunctions {

    constructor() { }

    beginAssistant(req: any, res: any) {
        assistant.createSession({ assistantId: ASSISTANT_ID })
            .then(resp => {
                const ASSISTANT_SESSION_ID = resp.result.session_id
                assistant.message({
                    assistantId: ASSISTANT_ID,
                    sessionId: ASSISTANT_SESSION_ID,
                    input: {
                        'message_type': 'text',
                        'text': 'Hello'
                    }
                })
                    .then(response => {
                        res.status(200).send({ session_id: ASSISTANT_SESSION_ID, response: response })
                    })
                    .catch(err => {
                        res.status(500).send({ message: err })
                    })
            })
            .catch(err => {
                res.status(500).send({ message: err })
            })
    }

    talkAssistant(req: any, res: any) {
        const ASSISTANT_SESSION_ID = req.body.session_id
        const CONTEXT = req.body.context

        assistant.message({
            assistantId: ASSISTANT_ID,
            sessionId: ASSISTANT_SESSION_ID,
            input: {
                'message_type': 'text',
                'text': CONTEXT
            }
        })
            .then(response => {
                res.status(200).send({ response: response })
            })
            .catch(err => {
                res.status(500).send({ message: err })
            })
    }

    closeAssistant(req: any, res: any) {
        assistant.deleteSession({
            assistantId: ASSISTANT_ID,
            sessionId: req.body.session_id,
        })
            .then(() => {
                res.status(200).send({ message: "session closed" })
            })
            .catch(err => {
                res.status(500).send({ message: err })
            })
    }

}

export default new WatsonFunctions()