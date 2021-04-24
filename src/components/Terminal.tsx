import React, { useEffect } from "react";
import { Terminal } from "xterm";

function TerminalComponent() {
  useEffect(() => {
    var term = new Terminal();
    term.open(document.getElementById("terminal"));
    term.write("Hello from \x1B[1;3;31mxterm.js\x1B[0m $");
    var shellprompt = '$ ';
    const prompt = function () {
    term.write('\r\n' + shellprompt);
    };
    term.onKey((key) => {
      console.log(key.domEvent.key)
      if(key.key == "\r") {
        return prompt()
      }
      console.log(key.key)
      term.write(key.key)
    })
  }, []);

  return <div id="terminal" />;
}

export default TerminalComponent;
