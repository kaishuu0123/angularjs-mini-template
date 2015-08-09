var gulp = require('gulp');
var browser = require('browser-sync');

gulp.task("server", function () {
  browser({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task("html", function () {
  gulp.src([
    "!node_modules/**/*.html",
    "./**/*.html"
  ])
    .pipe(browser.reload({stream: true}));
});

gulp.task("js", function () {
  gulp.src([
    "!node_modules/**/*.js",
    "./**/*.js"
    ])
    .pipe(browser.reload({stream: true}));
});

gulp.task("default", ["html", "js", "server"], function () {
  gulp.watch("./**/*.html", ["html"]);
  gulp.watch("./**/*.js", ["js"]);
});
