# hackathon-IBM
Hackathon Call for Code - IBM


## API Routes
```
- Begin Watson Assistant
GET /api/bot/beginAssistant 
```
```
- Receive data from user's input and reply 
POST /api/bot/talkAssistant 
```
```
- Close Watson Assistant connection
POST /api/bot/closeAssistant 
```

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



## To use the conventional commits, follow the scripts below

**to commit DOCS changes:**
```
file: commit-docs.sh

$ bash scripts/commit-docs.sh -d "brief description of what change"
```

<hr/>

**to commit new FEATURES with DESCRIPTION:**

*feat: **the title***

*BREAKING CHANGE: **details about changes***
##### DONT WRITE *feat()* and *BREAKING CHANGE* THEY ARE AUTOMATIC

```
file: commit-feat.sh

$ bash scripts/commit-feat.sh -t "Title" -d "Description"
```

<hr/>

**to commit new FEATURES with SCOPE:** 

*feat(**scoped**): **the title***
##### DONT WRITE *feat()* THEY ARE AUTOMATIC

```
file: commit-feat-scoped.sh

$ bash scripts/commit-feat-scoped.sh -t "Title" -s "Scope"
```

<hr/>

**to commit new FEATURES with SCOPE and DESCRIPTION:** 

*feat(**scoped**): **the title***

*BREAKING CHANGE: **details about changes***
##### DONT WRITE *feat()* and *BREAKING CHANGE*, THEY ARE AUTOMATIC

```
file: commit-feat-scoped-description.sh

$ bash scripts/commit-feat-scoped-description.sh -t "Title" -s "Scope" -d "Description"
```

<hr/>

**to commit new FIX:**

*fix: **the title***

*BREAKING CHANGE: **details about changes***
##### DONT WRITE *fix* and *BREAKING CHANGE*, THEY ARE AUTOMATIC


```
file: commit-fix.sh

$ bash scripts/commit-fix.sh -t "Title" -d "Description"
```

<hr/>

**to commit REFACTOR changes:**

*refactor!: **the title***

*BREAKING CHANGE: **details about changes***
##### DONT WRITE *refactor!* and *BREAKING CHANGE*, THEY ARE AUTOMATIC

```
file: commit-refactor.sh

$ bash scripts/commit-refactor.sh -t "Title" -d "Description"
```


