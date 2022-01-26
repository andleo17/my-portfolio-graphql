import { Field, ID, InputType, ObjectType } from 'type-graphql';
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

@InputType()
export class CreateProjectTagInput implements Partial<ProjectTag> {
	@Field()
	name: string;

	@Field()
	color: string;
}

@InputType()
export class UpdateProjectTagInput implements Partial<ProjectTag> {
	@Field({ nullable: true })
	name: string;

	@Field({ nullable: true })
	color: string;
}
