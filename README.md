# Deprecated

This project is deprecated. Its intent was to make
[normalize.css](https://github.com/necolas/normalize.css) easily importable in
Sass/SCSS code. But it is possible without having to hack around normalize.css.

To achieve this, you must use the `includePaths` option of your libsass
implementation (for example,
[node-sass' includePaths](https://github.com/sass/node-sass#includepaths)).

Using [gulp-sass](https://github.com/dlmanning/gulp-sass), here is how to
achieve this :

```js
const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("styles", () => {
  return gulp.src("path/to/style.scss")
    .pipe(sass({
      includePaths: ["node_modules"]
    }))
    .pipe(gulp.dest("destFolder"));
});
```

This way, after installing
[normalize.css](https://github.com/necolas/normalize.css) with
`npm install --save normalize.css`, you can import it in your code like this :

```scss
@import "normalize.css/normalize"; // <- this is the path from `node_modules`
```
