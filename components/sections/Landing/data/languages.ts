interface ProgrammingLanguage {
	name: string;
	icon: string;
	order: number;
}

export const programmingLanguages: ProgrammingLanguage[] = [
	{
		name: 'TypeScript',
		icon: '/icons/languages/typescript.svg',
		order: 2,
	},
	{
		name: 'React',
		icon: '/icons/languages/react.svg',
		order: 3,
	},
	{
		name: 'Dart',
		icon: '/icons/languages/dart.svg',
		order: 4,
	},
	{
		name: 'Flutter',
		icon: '/icons/languages/flutter.svg',
		order: 5,
	},

	{
		name: 'NodeJs',
		icon: '/icons/languages/node.svg',
		order: 6,
	},
	{
		name: 'NextJs',
		icon: '/icons/languages/next.svg',
		order: 6,
	},
	{
		name: 'NestJs',
		icon: '/icons/languages/nest.svg',
		order: 7,
	},
];
