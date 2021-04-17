import { GearIcon } from '@primer/octicons-react';

export default function Home() {
	return (
		<div>
			<div className="pr-4 pt-3 bg-primary">
				<GearIcon className="float-right hover:animate-spin" size={32} />
			</div>
		</div>
	);
}
