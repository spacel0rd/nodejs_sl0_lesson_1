/**
 * Created by sl0 on 25.08.2016.
 */
var read = require('read');
var colors = require('colors');
var beep = require('beepbeep');


read({ prompt : 'Username: ' }, function (err, user) {
	read({ prompt : 'Password: ', silent : true }, function (err, pass) {
		beep(1);
		console.log(user.inverse);
		beep(2, 1000);
		console.log(pass.rainbow);
		process.stdin.destroy();
	});
})

