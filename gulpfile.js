var gulp = require("gulp");
var runSequence = require("run-sequence");
var requireDir = require("require-dir");

requireDir("./gulp-config");

global.distFolder = "./dist";

gulp.task("default", function() {
	runSequence("clean", "copy", "webpack", "less");

	gulp.watch([
		"./src/index.html",
		"./src/img/**/*",
		"./src/fonts/**/*"
	], ["copy"]);

	gulp.watch(["./src/**/*.less"], ["less"]);

	gulp.watch([
		"./src/ts/**/*.html",
		"./src/ts/**/*.ts"
	], ["webpack"]);
});
