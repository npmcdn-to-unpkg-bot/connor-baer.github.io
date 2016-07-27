// ==== IMAGES ==== //

var gulp        = require('gulp')
  , plugins     = require('gulp-load-plugins')({ camelize: true })
  , config      = require('../../gulpconfig').images
;

// Optimize images in the `dist` folder (slow)
gulp.task('images', function() {
  return gulp.src(config.dist.src)
  .pipe(plugins.imagemin(config.dist.imagemin))
  .pipe(gulp.dest(config.dist.dest));
});
