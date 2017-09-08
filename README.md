# poe-addons-organizer
This tool helps organizing all your poe addons. 
So you have one application to install that can keep tracking your addons for updates, etc.

## Upcoming Features
- **auto.** find poe tools on GitHub
- add the possibility to **manually** add non-GitHub projects to the app
- display all tools on a page
- display tools in most-used order
- download tools
- "check for updates" 
- ...

## Crawling instead of using the API
Unfortunately I would leak an auth token of mine when requesting data via the GitHub API. 
So I am crawling over the sites that contains the information I need. Pretty bad I know. :/

TODO: Find a better solution

## Technical Notes
This is an Application based on [Electron](https://electron.atom.io/) 
including..
- [Vue](https://vuejs.org/) as the rendering framework,
- [Webpack](https://webpack.js.org/) as a bundler, (not yet in use)
- [Gulp](https://gulpjs.com/) as the task runner and (not yet in use)
- [Babel](https://babeljs.io/) as a JavaScript compiler.