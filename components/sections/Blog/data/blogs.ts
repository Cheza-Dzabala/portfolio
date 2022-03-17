const summaryItem: string = `Incididunt dolore veniam voluptate culpa fugiat excepteur consequat duis culpa quis tempor pariatur. Fugiat irure ex ea anim cillum. Aliqua sunt laborum proident dolore est adipisicing reprehenderit voluptate nostrud pariatur laborum sint. Voluptate duis esse duis reprehenderit sunt. Pariatur ex sint occaecat enim.`;

const content: string = `Labore minim voluptate ad exercitation qui. Pariatur cupidatat velit est sint magna. Aliqua cupidatat dolore dolore aliqua sint exercitation laborum dolore nisi id amet nisi. Duis commodo cupidatat nostrud minim. Commodo dolore est reprehenderit aliquip dolore reprehenderit eu nulla mollit cillum do culpa dolore.

Pariatur nostrud ex ut id incididunt. Eiusmod do veniam tempor reprehenderit sit minim consequat deserunt reprehenderit. Lorem duis culpa ullamco duis irure est eiusmod irure eiusmod pariatur consequat cupidatat. Ut consequat minim esse veniam mollit sunt officia minim cupidatat duis tempor aliqua occaecat occaecat. Pariatur in est culpa voluptate esse veniam culpa voluptate dolor cillum consectetur commodo amet non.

Et commodo est pariatur et. Laborum quis non qui est dolore fugiat. Consectetur quis eu Lorem veniam nulla enim exercitation enim. Irure amet cillum pariatur eiusmod.

Laborum pariatur officia commodo tempor aute do excepteur. Ipsum velit aliqua est veniam velit. Enim adipisicing labore sit magna pariatur proident. Voluptate duis eu eu est minim in eu id eu ex. Non ea cupidatat mollit commodo et aliqua cillum tempor. Enim eiusmod laborum qui quis ipsum aliquip exercitation excepteur adipisicing dolor ea. Ea sint dolor sit in anim sint exercitation esse minim exercitation qui cupidatat sunt deserunt.

Excepteur ex enim pariatur sunt commodo irure laborum ex enim ad aute aute fugiat. Ipsum velit quis labore anim quis cillum deserunt deserunt ipsum nostrud nostrud pariatur pariatur. Aute nulla Lorem est ea nulla pariatur officia cillum amet proident amet sit aliquip ex.

Elit aute minim laboris elit ut eiusmod irure in dolore id magna nulla tempor quis. Aliquip minim do qui excepteur velit deserunt et anim excepteur cillum. Do non cillum sit ullamco et magna anim excepteur nostrud. Irure aliquip velit cillum esse labore deserunt amet.

Nulla voluptate cillum ex fugiat incididunt veniam ipsum aute consectetur do. Ad anim est tempor quis ipsum tempor non. Sit mollit qui occaecat consectetur nostrud nisi exercitation anim do. Ad nulla anim do Lorem. Sint laborum ad officia sunt nulla ullamco dolore enim consectetur quis dolore aliquip veniam sit. Veniam magna incididunt nostrud excepteur nisi id tempor reprehenderit irure adipisicing quis ipsum ipsum.`;

export interface Tag {
	name: string;
	id: number;
}

export interface Blog {
	title: string;
	summary: string;
	image: string;
	date: string;
	content: string;
	slug: string;
	tags: number[];
}

export const blogs: Blog[] = [
	{
		title: 'How to use the new React Hooks API',
		summary: summaryItem,
		image: 'https://source.unsplash.com/random/400x200',
		date: '2020-01-01',
		content: content,
		slug: 'how-to-use-the-new-react-hooks-api',
		tags: [1, 2],
	},
	{
		title: 'Getting started with your coding journey',
		summary: summaryItem,
		image: 'https://source.unsplash.com/random/400x200',
		date: '2020-01-01',
		content: content,
		slug: `getting-started-with-your-coding-journey`,
		tags: [1, 4],
	},
];

export const tags: Tag[] = [
	{
		name: 'React',
		id: 1,
	},
	{
		name: 'Hooks',
		id: 2,
	},
	{
		name: 'Code',
		id: 3,
	},
	{
		name: 'Getting started',
		id: 4,
	},
	{
		name: 'Google Cloud Platform',
		id: 5,
	},
	{
		name: 'Flutter',
		id: 6,
	},
	{
		name: 'Firebase',
		id: 7,
	},
	{
		name: 'Git',
		id: 8,
	},
	{
		name: 'GitHub',
		id: 9,
	},
	{
		name: 'GitLab',
		id: 10,
	},
	{
		name: 'GitKraken',
		id: 11,
	},
	{
		name: 'The Developer Journey',
		id: 12,
	},
	{
		name: 'Finding the perfect job',
		id: 13,
	},
	{
		name: 'Back to basics',
		id: 14,
	},
];

export const getTag = (id: number): Tag | undefined => {
	return tags.find((tag) => tag.id === id);
};
