import { Field, ID, Int, ObjectType } from 'type-graphql';
import {
	KnowledgeCategory,
	KnowledgeCategoryEnum,
} from './enums/KnowledgeCategory';

@ObjectType()
export class Knowledge {
	@Field(() => ID)
	id: string;

	@Field()
	name: string;

	@Field()
	description: string;

	@Field(() => KnowledgeCategoryEnum)
	category: KnowledgeCategory;

	@Field({ nullable: true })
	icon: string;

	@Field(() => Int)
	level: number;

	@Field({ nullable: true })
	place: string;

	@Field({ nullable: true })
	certificateURL: string;

	@Field()
	state: boolean;
}
