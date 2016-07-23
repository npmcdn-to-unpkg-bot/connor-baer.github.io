// ==== BROWSERSYNC ==== //

var gulp        = require('gulp')
  , child       = require('child_process')
  , config      = require('../../gulpconfig').jekyll
;

// Quick start: connect all your devices to the same network (e.g. wifi) and navigate to the address output in the console when you run `gulp`
gulp.task('jekyll', ['build'], function() {
  var jekyll = child.spawn('jekyll', ['build',
    '--watch',
    '--incremental',
    '--drafts'
  ]);

  var jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});