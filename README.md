# stageUp

![](https://travis-ci.org/placeholderR/stageUp.svg?branch=master)

> App for tracking the stages of a order id for studio clients

## Team

  - __Full Stack Engineer__: Jarrett Kennedy

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    2. [Start](#start)
    3. [Database](#database)
    4. [RoadMap](#roadmap)
4. [Team](#team)
5. [Contributing](#contributing)

## Usage

> Some usage instructions

Sandbox Mode
```
grunt
webpack
npm run sandbox
in new terminal > webpack --watch --progress
make changes in client folder
ctrl + c to close webpack watching in other terminal
npm run dev
```

Production
```
npm run prod
npm start
```

## Requirements

- Node 6.8.0
- MySQL 2.12.0
- Express 4.14.0
- React 15.3.2
- Sequelize 3.27.0
- Webpack 1.13.3

## Development
Development for this application is currently streamlined using a combination of Grunt task runner with node package manager. The default grunt command is set up to clean bundle.js.

### Installing Dependencies

From within the root directory:

```
sudo npm install sequelize sequelize-cli mysql webpack webpack-dev-server express -g
npm install
```

### Start
Create a local database with MySQL
```
sudo mysql -u root -p
create database stageup;
exit;
```


build bundle.js first, then start
```
webpack
npm run dev
```

### Database
MySQL is a relational database that only needs to be created in your local computer for development testing. Once you have a database created, running the command below will start the server on your local port.
```
npm run dev
```

To Drop a database, just log into your mysql on your terminal window.

```
sudo mysql -u root -p
drop DROP DATABASE IF EXISTS stageup;
create database stageup;
exit;
```

### Roadmap

View the project roadmap [here](LINK_TO_PROJECT_ISSUES)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
