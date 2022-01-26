import { Field, ID, InputType, ObjectType } from 'type-graphql';
import { ProjectTag } from './ProjectTag';

@ObjectType()
export class Project {
	@Field(() => ID)
	id: string;

	@Field()
	name: string;

	@Field()
	slug: string;

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

	@Field()
	createdAt: Date;

	@Field()
	updatedAt: Date;
}

@InputType()
export class CreateProjectInput implements Partial<Project> {
	@Field()
	name: string;

	@Field()
	description: string;

	@Field()
	slug: string;

	@Field(() => [String], { nullable: true })
	imageURLs: string[];

	@Field(() => [String])
	tagIDs: string[];

	@Field({ nullable: true })
	repositoryURL: string;

	@Field({ defaultValue: true })
	state: boolean;
}

@InputType()
export class UpdateProjectInput implements Partial<Project> {
	@Field({ nullable: true })
	name: string;

	@Field({ nullable: true })
	description: string;

	@Field({ nullable: true })
	slug: string;

	@Field(() => [String], { nullable: true })
	imageURLs: string[];

	@Field(() => [String], { nullable: true })
	tagIDs: string[];

	@Field({ nullable: true })
	repositoryURL: string;

	@Field({ nullable: true })
	state: boolean;
}
