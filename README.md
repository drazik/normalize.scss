# normalize.scss

This repository is just a wrapper around
[normalize.css](https://github.com/necolas/normalize.css), a project by
(Nicolas Gallagher)(https://github.com/necolas).

** I am NOT the author of normalize.css, Nicolas Gallagher IS. **

## Why a wrapper ?

Because normalize.css is awesome, but you can't inline `@import` it in your Sass
project. This is the only goal of this wrapper : make normalize.css
"`@import`able" in your Sass code using LibSass.

## I can see a lot of other wrappers around here...

Yes, but the majority doesn't address the `@import` issue. And others don't
follow normalize.css' semantic versioning, which can lead to some issues.

## The intent of this wrapper

The goal here is clear :

* Make normalize.css compatible with Sass inline `@import`
* Follow normalize.css release versions

This way, you can use normalize.css in your Sass code like you would do in plain
CSS.

## How to use

### Install

```
npm install --save normalize.scss
```

### Update your node-sass configuration

Add the path to the package to the `includePaths` parameter of node-sass.

For example, if you use gulp and gulp-sass :

```js
const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("styles", () => {
    return gulp.src("scss/*.scss")
        .pipe(sass({
            includePaths: require("normalize.scss").includePaths
        }))
        .pipe(gulp.dest("css"));
});
```

### Import it !

In your SCSS code :

```css
@import "normalize";
```

## Contribute

You can submit issues and pull requests, but remember that this is just a
wrapper around the original project :
[normalize.css](https://github.com/necolas/normalize.css). So, if you have an
issue with the CSS itself or if you want to add some features, you must refer to
[normalize.css issues](https://github.com/necolas/normalize.css/issues) and
submit a PR to this original repository, not here.
