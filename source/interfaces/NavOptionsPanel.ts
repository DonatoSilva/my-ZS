interface NavOptionsPanelType {
	question: string;
	options: Array<{
		label: string;
		value: string;
	}>;
}

interface NavOptionsContextType {
	navOptions: NavOptionsPanelType;
	setNavOptions: (navOptions: NavOptionsPanelType) => void;
}

export type { NavOptionsPanelType as NavOptionsPanelProps, NavOptionsContextType as NavOptionsContextProps };
