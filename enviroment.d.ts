declare global {
	namespace NodeJS {
		interface ProcessEnv {
			EMAIL_ACCOUNT: string;
			EMAIL_PASSWORD: string;
		}
	}
}

export {};
