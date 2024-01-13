# NYMBL

NYMBL e-comerce dashboard

## Languages

- JavaScript (Node.js for backend, React for frontend)
- Redux
- Redux toolkit
- HTML
- Tailwind CSS

## Technologies and Tools

- Node.js
- React
- Express
- MySql
- Git
- VSCode
- etc.

## Install

Follow the bellow steps to install the application:

1. download the repository

   `git clone https://github.com/nemanjarasicn/nymbl-task.git`

2. replace all template files with actual files

   - find the `.env.dev` files in server folder, than you need and duplicate(!) them as `.env`

3. configure the values

   go through all the files from step two and insert you own values if you setup local database, if not, you can use this configuration, because the mySql DB is deployed to aiven platfor as a services, and is always available.

4. install dependencies and start app for backend app

   navigate to server folder and:

   `npm install ` then `npm start`

5. install dependencies and start app for frontend app

   navigate to e-comerce-dashboard folder and:

   `npm install ` then `npm start`

## Update

Simply run `git pull origin`

### Simple build frontend app for production

navigate to e-comerce-dashboard folder and run:

`npm run build`

this will create build folder in root of frontend, and for deploy just copy this build folder and paste to deploy platform

### Development

#### Dev Prerequisites

Node.js and npm: Ensure you have Node.js and npm (Node Package Manager) installed on your machine. You can download them from https://nodejs.org/.

#### Test the application

In order to test the application open a browser and enter the following link

[Local Enfis](http://localhost:3000)

Please note, in order to run full tests you need the local db, api up and running, or you can use deployed DB as services.
