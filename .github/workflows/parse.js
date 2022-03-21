const parse = ({ text }) => {
	let result = "";
	let count = 0;
	for (const line of text.split("\n")) {
		if (line.startsWith("# [") || line.startsWith("## [")) {
			count++;
		}
		if (count >= 2) {
			break;
		}
		result += line + "\n";
	}
	return result;
}

module.exports = parse;
