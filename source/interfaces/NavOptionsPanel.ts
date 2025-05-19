interface NavOptionsPanelProps {
	question: string;
	options: Array<{
		label: string;
		value: string;
	}>;
}

interface NavOptionsContextProps {
	navOptions: NavOptionsPanelProps;
	setNavOptions: (navOptions: NavOptionsPanelProps) => void;
}

export type {NavOptionsPanelProps, NavOptionsContextProps};
