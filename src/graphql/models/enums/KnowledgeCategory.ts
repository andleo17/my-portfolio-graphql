import { registerEnumType } from 'type-graphql';

export type KnowledgeCategory = 'TECH' | 'OTHER';

export enum KnowledgeCategoryEnum {
	TECH = 'TECH',
	OTHER = 'OTHER',
}

registerEnumType(KnowledgeCategoryEnum, { name: 'KnowledgeCategory' });
