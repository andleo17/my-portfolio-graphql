import { Field, ID, InputType, Int, ObjectType } from 'type-graphql';
import { Knowledge } from './Knowledge';

@ObjectType()
export class Project {
	@Field(() => ID)
	id: number;

	@Field()
	name: string;

	@Field()
	slug: string;

	@Field(() => [String])
	imageURLs: string[];

	@Field()
	description: string;

	@Field({ nullable: true })
	repositoryURL: string;

	@Field()
	state: boolean;

	@Field()
	createdAt: Date;

	@Field()
	updatedAt: Date;

	@Field(() => [Knowledge])
	tags?: Knowledge[];
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

	@Field(() => [Int])
	tagIDs: number[];

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

	@Field(() => [Int], { nullable: true })
	tagIDs: number[];

	@Field({ nullable: true })
	repositoryURL: string;

	@Field({ nullable: true })
	state: boolean;
}
