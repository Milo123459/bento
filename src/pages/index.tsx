import React from 'react';
import dynamic from 'next/dynamic';

const DynamicTerminal = dynamic(() => import('../components/Terminal'), {
	ssr: false,
});

export default function IndexPage() {
	return <DynamicTerminal />;
}
