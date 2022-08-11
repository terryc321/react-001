

# deployment

npm run build

everything in the build directory should be thought of as the deployed server root /www/

sudo ln -sv /opt/node-18/bin/serve /usr/bin/serve

to start server on the build directory on port 8000 use this

serve -s build -p 8000

# ERNO Watched files limit exceeded Bug

could be visual code Bug

# install JSON server globally

npm i -g json-server

mock rest api 

post put patch delete requests - 

# "server" : "json-server --watch db.json --port 5000"

npm run server

# db.json created - our mimic database

# json picky

json file 'welcome' is not a legal string - must be double quotes "welcome"

integers ok
true false ok
no trailing commas {}, bad

#  now created a valid json file

# localhost ports now conceive of these 
 
http://localhost:5000/tasks json server

http://localhost:3000  development build

"http://localhost:8000" production build

pkill node
pkill code 
pkill firefox
pkill opera

npm start

check that nothing is using these ports
lsof -i :3000
lsof -i :5000
lsof -i :8000
 

# lets get json data into our react app

fetch api async await

PUT ?
GET
DELETE
POST

# CRUD REST API 

create new tasks

update tasks

delete tasks

# SOAP vs REST api


# Overview of react task appointment app

## CSS is problematic

### inline style uses double curly braces style={{ }}

## javascript in the wild with JSX javascript and xhtml

App.js

// import react useState and useEffect 
import {
    useState,
    useEffect
}
from 'react'
// import components we made
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App () that returns one thing

at end of file is an export statement

export default App;

### components

components write are uppercase App Header Tasks Task

### App component itself

some names cannot use class ? conflicts with html - for future note

App returns one thing 
return ( ) 

### we can put normal html

<div className="container">

### inline javascript using { }

put a header component on page
<Header />

if want to pass arguments to that Header component
<Header title="Task Tracker" />

if want to pass function to Header component
<Header onAdd ={ () => doSomethingUseful() }

onAdd will see a javascript , a function of no arguments that will call
doSomethingUseful

Task component given 3 parameters tasks , onDelete , onToggle 
<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />

if onToggle is called from Tasks component - toggleReminder will be called 
events bubble up

same thing again for a Header component
<Header title={"Task Tracker" } onAdd={ () => setShowAddTask(!showAddTask) } showAdd={showAddTask} />

thinking about what want Header to do , just 

### liberal sprinkling of COND ? DO-IF-TRUE : DO-IF-FALSE

this says if tasks array has length greater than zero , put a Tasks component
        here , otherwise show No Tasks to show
		
        {
            tasks.length > 0 ? (
		
		    <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
            ) : (
                'No Tasks To Show'
            )
        }

### function arrow notation

function App () { 
}

becomes

const App = () => { 
}


### react use state

this code is saying useState features of react 

// defined variable showAddTask
// defined variable tasks 

// initial value of showAddTask is boolean false
// initial value of tasks is an empty array

import { useState } from 'react'

const App = () => {
	const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([]);
	//
	// rest of App follows ...
	//
}


## shortcut && 

showAddTask && <some component or html>

if showAddTask is false then the component is not seen

## fetch api  async  await fetch











## security cookies
## authentication 
## security






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
