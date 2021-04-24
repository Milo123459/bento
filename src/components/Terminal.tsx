import React, { useEffect } from "react";
import { Terminal } from "xterm";

function TerminalComponent() {
  useEffect(() => {
    var term = new Terminal();
    term.open(document.getElementById("terminal"));
    term.write("Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ");
  }, []);

  return <div id="terminal" />;
}

export default TerminalComponent;
