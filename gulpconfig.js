// ==== CONFIGURATION ==== //

// Project paths
var src         = ''                // The raw material of the theme: custom scripts, SCSS source files, PHP files, images, etc.; do not delete this folder!
  , dist        = '_site/'   // The distribution package that you'll be uploading to your server; delete it anytime.
  , assets      = 'assets/'             // A staging area for assets that require processing before landing in the source folder (example: icons before being added to a sprite sheet)
  , bower       = 'bower_components/'   // Bower packages
  , composer    = 'vendor/'             // Composer packages
  , modules     = 'node_modules/'       // npm packages
;

// Project settings
module.exports = {

  browsersync: {
    files: [dist+'/**', '!'+dist+'/**.map', '!'+dist+'**/*(*.png|*.jpg|*.jpeg|*.gif|*.svg)'] // Exclude map files
  , notify: false // In-line notifications (the blocks of text saying whether you are connected to the BrowserSync server or not)
  , open: false // Set to false if you don't like the browser window opening automatically
  , port: 4000 // Port number for the live version of the site; default: 3000
  , server: {
      baseDir: dist
    }
  , watchOptions: {
      debounceDelay: 2000 // This introduces a small delay when watching for file change events to avoid triggering too many reloads
    }
  },

  images: {
    dist: {
      src: [dist+'**/*(*.png|*.jpg|*.jpeg|*.gif|*.svg)'] // The source is actually `dist` since we are minifying images in place
    , imagemin: {
        optimizationLevel: 7
      , progressive: true
      , interlaced: true
      }
    , dest: dist
    }
  },

  scripts: {
    bundles: { // Bundles are defined by a name and an array of chunks (below) to concatenate; warning: this method offers no dependency management!
      scripts: ['navigation', 'core']
    , html5: ['ie']
    }
  , chunks: { // Chunks are arrays of paths or globs matching a set of source files; this way you can organize a bunch of scripts that go together into pieces that can then be bundled (above)
      // The core chunk is loaded no matter what; put essential scripts that you want loaded by your theme in here
      core: [
        src+'js/scripts.js',
      ]
    , navigation: [
        bower+'smooth-scroll/dist/js/smooth-scroll.js',
        bower+'headroom.js/dist/headroom.js'
      ]
    , ie: [
        bower+'html5shiv/dist/html5shiv.js',
      ]
    }
  , dest: assets // Where the scripts end up in your theme
  , lint: {
      src: [src+'js/**/*.js'] // Linting checks the quality of the code; we only lint custom scripts, not those under the various modules, so we're relying on the original authors to ship quality code
    }
  , minify: {
      src: assets+'**/*.js'
    , uglify: {} // Default options
    , dest: assets
    }
  },

  styles: {
    build: {
      src: src+'scss/**/*.scss'
    , dest: assets
    }
  , cssnano: {
      autoprefixer: {
        add: true
      , browsers: ['> 3%', 'last 2 versions', 'ie 9', 'ios 6', 'android 4'] // This tool is magic and you should use it in all your projects :)
      }
    }
  , libsass: { // Requires the libsass implementation of Sass (included in this package)
      includePaths: ['./src/scss', bower, modules] // Adds Bower and npm directories to the load path so you can @import directly
    , precision: 6
    , onError: function(err) {
        return console.log(err);
      }
    }
  },

  utils: {
    clean: [dist+'**/.DS_Store'] // A glob pattern matching junk files to clean out of `build`; feel free to add to this array
  , wipe: [dist] // Clean this out before creating a new distribution copy
  , dist: {
      src: [dist+'**/*', '!'+dist+'**/*.map']
    , dest: dist
    }
  , normalize: { // Copies `normalize.css` from `node_modules` to `src/scss` and renames it to allow for it to imported as a Sass file
      src: bower+'normalize-css/normalize.css'
    , dest: src+'scss'
    , rename: '_normalize.scss'
    }
  },

  watch: { // What to watch before triggering each specified task; if files matching the patterns below change it will trigger BrowserSync
    src: {
      styles:       src+'scss/**/*.scss'
    , scripts:      src+'js/**/*.js' // You might also want to watch certain dependency trees but that's up to you
    , images:       src+'**/*(*.png|*.jpg|*.jpeg|*.gif|*.svg)'
    }
  }
}
