## `Theory`

- #### To understand the basics of technology used to write the code [NodeJs](https://github.com/Satyamittal/Notes/blob/master/Web-Development/Backened/NodeJs.md)
- #### How we import files & modules are mentioned here [Modules](https://github.com/Satyamittal/Notes/blob/master/Web-Development/Backened/Modules.md).
- #### When we clone project from Github repo. It may be of different version. To manage versions [NVM](https://github.com/Satyamittal/Notes/blob/master/Web-Development/Backened/nvm.md)
- #### Details of packages that used in current project are mentioned in [Package.json](https://github.com/Satyamittal/Notes/blob/master/Web-Development/Backened/Package.json.md)

<hr/>

## `Backened Application`

- #### To make any successful backened application. You have to follow the flow in this package.
- #### This package contains all notes necessary to make a backened application.

#### Follwing is the package made by me using these [notes](https://github.com/Satyamittal/Notes/tree/master/Publishing%20npm%20package)

```bash
npm i backflow
```
### `# Steps to understand this package`

- #### `1. ` Go on [index.js](../setup-2/e-modules/index.js) & read it.

- #### `2. ` Use of each & every folder is listed here.
    - #### [a-databaseConfig](../setup-2/a-databaseConfig/) This contains files that makes connection with database .
    - #### [b-loggedData](../setup-2/b-loggedData/) This contains files that are logged in server.
    - #### [b-public](../setup-2/b-public/)  This contains static & dynamic files that server will serve as per request from user.
    - #### [c-uploads](../setup-2/c-uploads/) This contains all the files that are stored on server , that user uploads on network.
    - #### [d-middlewares](../setup-2/d-middlewares/) This folder contains middlewares that does the work of processinig requests before they came to server.
    - #### [`e-modules`](../setup-2/e-modules/) Most important folder which contains all modules used in the application.
    - #### [f-useful-functions](../setup-2/f-useful-functions/) This folder contains functions that I made , which makes the task easy to do.
    - #### [g-events](../setup-2/g-events/) Nothing just notes of events.
    - #### [`h-features`](../setup-2/h-features/) This folder will be different for each application as per the task.

- #### `3. ` Each folder contains files that you can use as examples to know . How to write code ?

- #### `4. ` [Server.js](../setup-2/server.js) This is the file that ultimately runs.
```bash
n
```

- #### `5. ` To make notes for your RESTful API application , we can use `swagger`

- #### `6. ` Testing is all that left. Use `POSTMAN` for it.