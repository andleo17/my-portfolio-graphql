import { Field, ID, ObjectType } from 'type-graphql';
import { Project } from './Project';

@ObjectType()
export class ProjectTag {
	@Field(() => ID)
	id: string;

	@Field()
	name: string;

	@Field()
	color: string;

	@Field(() => [Project])
	projects?: Project[];
}
