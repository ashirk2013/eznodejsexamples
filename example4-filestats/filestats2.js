var fs = require('fs');

var getFileStats = function() {
	var filename = __dirname + '/sample.dd';

	fs.open(filename, 'r', function(err, fd) {
		if (err) throw err;
		fs.fstat(fd, function(err, stats) {
			if (err) throw err;
			console.log('Stats for file [' + filename + ']');
			console.log(stats);
			inspect(stats);
		});

		console.log('fs.fstat async running ...');
	});
};

var inspect = function(statObj) {
	console.log('Is File: ' + statObj.isFile());
	console.log('Is Directory: ' + statObj.isDirectory());
	console.log('Is Block Device: ' + statObj.isBlockDevice());
	console.log('Is Symbolic Link: ' + statObj.isSymbolicLink());
	console.log('Is FIFO: ' + statObj.isFIFO());
	console.log('Is Socket: ' + statObj.isSocket());

}


getFileStats();
