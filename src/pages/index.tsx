import React from "react";
import dynamic from "next/dynamic";

const DynamicTerminal = dynamic(() => import("../components/Terminal"), {
  ssr: false
});

import("../components/Terminal").then(z => z.default()).on('key', (key, ev) => {
	console.log(key.charCodeAt(0));
	if (key.charCodeAt(0) == 13)
		term.write('\n');
	term.write(key);
});

export default function IndexPage() {
  return <DynamicTerminal />;
}