# Hackathon IBM - Call for Code 

<p align="center">
  <a href="https://github.com/hpbonfim/Hackathon-IBM-CallForCode-Project_EduDoa#readme">
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/hpbonfim/Hackathon-IBM-CallForCode-Project_EduDoa"/>
  </a>

  <a href="https://github.com/hpbonfim/Hackathon-IBM-CallForCode-Project_EduDoa#readme">
    <img alt="size" src="https://img.shields.io/github/repo-size/hpbonfim/Hackathon-IBM-CallForCode-Project_EduDoa"/>
  </a>

  <a href="https://github.com/hpbonfim/Hackathon-IBM-CallForCode-Project_EduDoa/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/hpbonfim/Hackathon-IBM-CallForCode-Project_EduDoa">
  </a>

  <a href="https://github.com/hpbonfim/Hackathon-IBM-CallForCode-Project_EduDoa#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="https://github.com/hpbonfim/Hackathon-IBM-CallForCode-Project_EduDoa#readme" />
  </a>

  <a href="https://github.com/hpbonfim/Hackathon-IBM-CallForCode-Project_EduDoa/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="https://github.com/hpbonfim/Hackathon-IBM-CallForCode-Project_EduDoa#readme" />
  </a>
</p>
<hr>

# Getting Started

<h2 align="center">The EduDoa Project</h2>
<p align="center"><b>
With one click any person can donate their unused mobile data to our community of students.</b>
</p>
<p align="center">
<a href="https://hpbonfim.github.io/Hackathon-IBM-CallForCode-Project_EduDoa/index.html" >
  <img src="https://img.shields.io/badge/checkout%20the%20website-edudoa-2E8B57?style=for-the-badge"/>
</a>
</p>
<hr>





## Built With

* [NodeJS](https://nodejs.org/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [TypeScript](https://www.typescriptlang.org/) - TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
* [IBM Watson](https://www.ibm.com/watson/br-pt/) - Watson is IBM’s suite of enterprise-ready AI services, applications, and tooling.
* [IBM Cloud Foundry](https://www.ibm.com/cloud/cloud-foundry) - Deploy and scale apps without manually configuring and managing servers


## How To Commit

### To use the conventional commits, follow the scripts below

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


## License
This project is unlicensed - be my guest to code.