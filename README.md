# _Doctor Lookup_

#### Implements BetterDoctors API

#### Eric Bomblatus
#### January 6th, 2017

Allows users to search for doctors via [BetterDoctors API](https://developer.betterdoctor.com/)

**User Stories**

* As a user, I want to be able to  enter a medical issue (i.e. “toothache”) into a form, submit it, and receive a list of doctors I may seek out to help with my medical issue.

## Setup/Installation Requirements

* Clone this repo: `git clone https://github.com/erbombla/doctor-js.git`
* Change to the repo directory: `cd {repo}`
* Install NPM `npm install`
* Install Bower `bower install`
* Install Gulp task runner `npm install gulp -g`
* Add ENV keys (instructions below)
* Build files: `gulp build`
* Run `gulp serve`

## ENV setup

* Copy sample.env to a new file named .env
* Visit BetterDoctors and click “Get a free API key”
* Fill out the form, or authenticate with GitHub
* Replace placeholder in .env with your key (i.e. exports.apiKey = 'a2c356ibgh44FAKE';

## Technologies Used

* Javascript
* Node.js
* Gulp
* HTML

## Known Issues

## License

*MIT License*

Copyright (c) 2016 **_Eric Bomblatus_**
