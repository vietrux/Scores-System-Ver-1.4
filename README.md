# Conscious point system (version: 1.4)

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://opensource.org/licenses/GPL-3.0)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/vietrux/Point-System-Ver-1.4 )

**(Point-System-Ver-1.4)**

This is a mini project of Viet Trung. Used to import, edit, delete and display the class consciousness scoreboard.

## Table of contents
- [Demo](#demo)
- [Feature summary](#feature-summary)
- [What's new in version 1.4?](#version-14-whats-new)
- [Framework, library,...](#frameworks-libraries)
- [Setting](#setting)
- [Report an error](#report-an-error)
- [License](#license)

## Demo
LINK: *[https://pointsystem.herokuapp.com](https://pointsystem.herokuapp.com/)*

## Feature summary
The alarm system includes the following features:
- Allow login to:
  - Create, edit, delete student information, week
  - Create, edit, delete weekly points
- Display student scores each week
- Displays a student's total score for the week
- Show the whole class's transcript
- Change the interface light and dark

## Version 1.4 what's new

- Super powerful interface update!
- Fix the main menu is hidden when in mobile mode
- Add dark mode

## Frameworks, libraries,...

- Front-end:
  - [EJS](https://github.com/mde/ejs), [Tailwind](https://github.com/tailwindlabs/tailwindcss), [Flowbite](https://github.com/themesberg/flowbite )
- Back-end:
  - [Express](https://github.com/expressjs/express), [Mongoose](https://github.com/Automattic/mongoose)
  - Database: [Mongodb](https://github.com/mongodb)
  

## Setting

To run this project, install it locally using yarn (or npm):
- Setting:
```
yarn install
```
- start the project:
```
yarn start
# or
yarn developer
```
### Note!
The default path is: *[http://localhost:9001](http://localhost:9001)* (*[http://127.0.0.1:9001](http://127.0.0.1:9001) *)

Change **API_PATH** and **MONGO_URL** in **[.env](https://github.com/vietrux/Point-System-Ver-1.4/blob/main/.env)** in order to run the project normally.
- API_PATH: is the API path, replace *http://<span></span>localhost:9001* with your website URL
- MONGO_URL: is the path to your database, get MONGO_URL at [mongodb.com](https://www.mongodb.com/)

Change **ADMIN_PASSWORD** in **[.env](https://github.com/vietrux/Point-System-Ver-1.4/blob/main/.env)** change admin password .

The **database structure** is located in the **[utils](https://github.com/vietrux/Point-System-Ver-1.4/tree/main/utils) directory**

**Bonus (for teachers)**: Change the number of weeks exist at [API.JS](https://github.com/vietrux/Point-System-Ver-1.4/blob/main/routes/api .js)

## Report an error
If there is an error or any problem, please [report an error here](https://github.com/vietrux/Point-System-Ver-1.4/issues)

## License
PointSystemVer1.4 is a free and open source website. All source code of PointSystemVer1.4 is released under the terms of the GNU General Public License v3.0. 
