# Hackathon IBM - Call for Code 

## Backend manual:
**install NPM inside backend folder:**

```
$ npm i 
```
**To run backend on localhost**
```
$ npm run dev
```
**To build for production**
```
$ npm run build
```
**To run in production mode**
```
$ npm start
```

<hr/>

## API Routes
```
- Begin Watson Assistant
GET /api/bot/beginAssistant 

* RESPONSE: "session_id" = "abcdefghijklmnopqrstuvwxyz"
```
```
- Receive data from user's input and reply 

POST /api/bot/talkAssistant
- BODY: "session_id" : "abcdefghijklmnopqrstuvwxyz", "context": "USER INPUT"

* RESPONSE: "response.result.output.generic" = [ "response_type": "text", "text": "BOT VALUE"]
```

```
- Close Watson Assistant connection

POST /api/bot/closeAssistant 
- BODY: "session_id" : "abcdefghijklmnopqrstuvwxyz"

* RESPONSE: "message": "session closed"
```