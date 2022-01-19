import { Field, ID, ObjectType } from 'type-graphql';
import { ProjectTag } from './ProjectTag';

@ObjectType()
export class Project {
	@Field(() => ID)
	id: string;

	@Field()
	name: string;

	@Field()
	description: string;

	@Field(() => [String])
	imageURLs: string[];

	@Field(() => [ProjectTag])
	tags?: ProjectTag[];

	@Field({ nullable: true })
	repositoryURL: string;

	@Field()
	state: boolean;
}
