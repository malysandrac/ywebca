// Student Workspace
Fizz.buzz = function () {

for(var cartoon=1; cartoon<101; ++cartoon){
	if (cartoon%3==0 && cartoon%5!=0) {
		console.log("Fizz");
	}else if (cartoon%5==0 && cartoon%3!=0) {
		console.log("Buzz");
	}else if (cartoon%5==0 && cartoon%3==0) {
		console.log("FizzBuzz");
	}else {
		console.log(cartoon);
	}
}
};