// Student Workspace
Chess.start = function (n) {

if (n===0) {
	return"";
}
var size=n || 8;
var width=size;
var height=size;
var lines="";
for (var begin=1; begin<=height; ++begin) {
	if (begin%2!=0) {
	for (var oddz=1; oddz<=width; ++oddz) {
		if(oddz%2!=0) {
			lines+=" ";
		}else {
			lines+="#";
		}
	}
lines+="\n";
}else { 
	for (var evens=1; evens<=width; ++evens) {
		if(evens%2==0) {
			lines+=" ";
		}else {
			lines+="#";
		}
	}
	lines+="\n";
	}
}
return lines;
};