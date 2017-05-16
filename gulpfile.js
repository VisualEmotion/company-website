var gulp = require('gulp'),
watch = require('gulp-watch');


gulp.task('default', function(){

	console.log("hello");
});

gulp.task('html', function(){

console.log("html working");
});

gulp.task('watch', function(){

	watch('index.html',function(){
		gulp.start('html');
	});

});