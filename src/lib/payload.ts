interface LexicalNode {
	type: string;
	tag?: string;
	version: number;
	direction?: string;
	format?: string | number;
	indent?: number;
	text?: string;
	style?: string;
	detail?: number;
	mode?: string;
	children?: LexicalNode[];
}

interface LexicalContent {
	root: {
		type: string;
		direction: string;
		format: string;
		indent: number;
		version: number;
		children: LexicalNode[];
	};
}

export interface PayloadPost {
	id: string;
	title: string;
	slug: string;
	content: LexicalContent;
	tags?: { value: string }[];
	date?: string;
	excerpt?: string;
	author?: { name?: string; role?: string };
	createdAt: string;
	updatedAt: string;
}

export interface PayloadResponse<T> {
	docs: T[];
	totalDocs: number;
	limit: number;
	totalPages: number;
	page: number;
}

const PAYLOAD_URL = import.meta.env.PUBLIC_PAYLOAD_URL || 'http://localhost:3000/api';

export async function getPosts(): Promise<PayloadPost[]> {
	const res = await fetch(`${PAYLOAD_URL}/posts?limit=100&sort=-createdAt`);
	const data: PayloadResponse<PayloadPost> = await res.json();
	return data.docs;
}

export async function getPostBySlug(slug: string): Promise<PayloadPost | null> {
	const res = await fetch(`${PAYLOAD_URL}/posts?where[slug][equals]=${slug}`);
	const data: PayloadResponse<PayloadPost> = await res.json();
	return data.docs[0] || null;
}
