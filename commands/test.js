exports.run = (client, message, args) => {
  var ch;
  
	function regex(args) {
  
  if (args.startsWith('<#') && args.endsWith('>')) {
		ch = args.slice(2, -1);

		console.log(ch);
	}
  
  }
}
