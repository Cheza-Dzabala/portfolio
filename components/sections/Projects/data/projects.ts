interface Project {
	title: string;
	description: string;
	image: string;
	order: number;
	technologies: string[];
}

export const projects: Project[] = [
	{
		title: 'Rediyo Music App',
		description:
			'Rediyo Music App is a music app that allows users to search for songs, play songs, and save songs to their library.',
		image: '/icons/apps/rediyo_icon.png',
		order: 1,
		technologies: ['flutter', 'dart', 'Google Cloud Platform'],
	},
	{
		title: 'Huza Ride App, Server & Dashboard',
		description:
			'Huza is a ride sharing app that allows users to book a ride and share it with other users.',
		image: '/icons/apps/huza_logo.png',
		order: 2,
		technologies: [
			'flutter',
			'dart',
			'Javascript',
			'NestJs',
			'TypeScript',
			'NextJs',
		],
	},

	{
		title: 'eShuri Mobile App & Dashboard',
		description:
			'An edutech application that allows students to connect with mentors from accross Rwanda. Utilizes video and audio one on one calls to facilitate learning sessions.',
		image: '/icons/apps/eshuri_icon.png',
		order: 3,
		technologies: [
			'flutter',
			'dart',
			'Javascript',
			'Typescript',
			'NextJs',
			'Google Cloud Platform',
		],
	},
];
