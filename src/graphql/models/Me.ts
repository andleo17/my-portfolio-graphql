import { Field, ID, ObjectType } from 'type-graphql';
import { Knowledge } from './Knowledge';
import { Project } from './Project';

@ObjectType()
export class Me {
	@Field(() => ID)
	id: string;

	@Field()
	name: string;

	@Field()
	lastname: string;

	@Field()
	phone: string;

	@Field()
	description: string;

	@Field(() => [Knowledge])
	knowledges?: Knowledge[];

	@Field(() => [Project])
	projects?: Project[];
}
