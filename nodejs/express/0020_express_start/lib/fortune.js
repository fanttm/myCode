var fortuneCookies = [
"Conquer your fears or they will conquer you. [lib]",
"Rivers need springs. [lib]",
"Do not fear what you don't know. [lib]",
"You will have a pleasant surprise. [lib]",
"Whenever possible, keep it simple. [lib]",
];

exports.getFortune = function() {
	var idx = Math.floor(Math.random() * fortuneCookies.length);
	return fortuneCookies[idx];
};