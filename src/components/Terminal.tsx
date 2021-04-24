import React, { useEffect } from 'react';
import { Terminal } from 'xterm';

function TerminalComponent() {
	useEffect(() => {
		var term = new Terminal();
		term.open(document.getElementById('terminal'));
		var shellprompt = '$ ';
		const prompt = function (cmd?: string) {
			if (cmd) {
				term.write('\r\n' + cmd);
				return prompt();
			}
			term.write('\r\n' + shellprompt);
		};
		let cmd = '';
		term;
		prompt();
		const commandHandler = (command: string) => {
			console.log(command);
			if (command == 'hello') {
				prompt('Heya!');
			}
			return (cmd = '');
		};

		term.onKey((key) => {
			const k = key.key;
			console.log(key.domEvent.key);
			if (key.key == '\r') {
				commandHandler(cmd);
				return prompt();
			} else {
				cmd += k;
				term.write(k);
			}
		});
	}, []);

	return <div id="terminal" />;
}

export default TerminalComponent;
