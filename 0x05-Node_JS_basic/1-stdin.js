const message1 = "Welcome to ALX, what is your name?";
console.log(message1);
process.stdin.on("data", data => {
	    data = data.toString();
	    process.stdout.write("Your name is: "+ data);
	    process.exit();
});
process.on("exit", data => {
	console.log("This important software is now closing");
});
