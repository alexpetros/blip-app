# VidStitch - App

TODO: short project description, some sample screenshots or mockups

### Current progess
Hits the backend and retrieves a 'Hello World!'

## Architecture

We used the react-native starter-kit from the extra credit short assignment. For making api requests, we used react-native's Fetch API.

### Concept
This is a real-time video editing and sharing application. The editing and viewing is done on a mobile device. The splicing, storing, and returning of the videos, users, and posts is done on a backend server.

### Mockups
![mockups](img/mockups.png)
* note that Editor is actually the main screen

![comments](img/comments.png)

### Components
![architecture diagram](img/architecture.png)

The project consists of several related components:

#### React-Native App
The mobile application is built on React Native. It will handle the user-facing functionality including registering, editing, posting, and commenting on friend's posts. The video editing will be done in-app using [React-Native Video](https://github.com/shahen94/react-native-video-processing) Processing. The navigation between components will be built on React Native, and the `FETCH/POST` calls will be handled with various React libraries such as Axios.

#### Flask Server
The backend relies on a Flask server, and uses various python libraries for stitching and properly formatting the videos into a single video object to be stored in the Amazon S3 cloud. This server will handle the user registration, friending logic, as well as manage the `FETCH/POST` calls from the app.

#### Amazon S3 Server
The final cut, completely processed video objects will be stored in the Amazon S3 cloud. The S3 server will be able to handle `FETCH/POST` calls to video objects.

## Setup
Be sure to run `yarn` to install all dependencies.

Then run `exp start` to get the main app compiled. You're welcome to view it however you like, but for simplicity's sake we're testing with `exp ios`.

Requires the background server running.

## Authors

* Steven Chun
* Alex Petros
* Taggart Bonham
* Milan Chuttani
* Imanol Avendaño
* Stephen Liao

## Acknowledgments

Here we will thank our families, friends, and Tim.
