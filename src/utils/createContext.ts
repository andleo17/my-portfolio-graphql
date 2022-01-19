import { PrismaClient } from '@prisma/client';
import { IncomingMessage, ServerResponse } from 'http';

export interface HTTPContext {
	req: IncomingMessage & {
		url: string;
	};
	res: ServerResponse & {
		json?: (data: unknown) => void;
	};
}

export interface APIContext {
	prisma: PrismaClient;
	http: HTTPContext;
}

const prisma = new PrismaClient();

export function createContext(http: HTTPContext): APIContext {
	return { prisma, http };
}
