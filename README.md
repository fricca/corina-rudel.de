# Personal Web Site of Corina Rudel

Frontend web developer in Munich, Germany  
Live: [corina-rudel.de](https://www.corina-rudel.de)

Built with
* [Eleventy](https://www.11ty.dev/) as static site generator, with a mixture of Nunjucks, Markdown and data files 
* [Grunt](https://gruntjs.com/) as task runner
* [Sass](https://sass-lang.com/) for CSS
* a sprinkle of [Webpack](https://webpack.js.org/) for the little JavaScript

## Local Development
Grunt is used as the task runner for local development, the local site needs to be served by a local web server.
* Grunt watches for 11ty files and assets (css, js) and starts needed tasks
* Assets (css, js) are copied to dist via grunt copy (not by 11ty) for faster development.
* Livereload is started with the watch task

### Initial install
```
npm install
```

### Run (initial) build
```
grunt build
```

### Local development
```
grunt
```

## @TODO
* Add print styles
* Add custom error page(s)
* Add manifest with icons
* Add service worker for offline handling