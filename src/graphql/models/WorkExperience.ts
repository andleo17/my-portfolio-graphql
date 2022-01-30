import { Field, ID, InputType, Int, ObjectType } from 'type-graphql';
import { Institution } from './Institution';

@ObjectType({ description: 'Experiencia laboral.' })
export class WorkExperience {
	@Field(() => ID)
	id: number;

	@Field(() => Int)
	institutionId: number;

	@Field()
	position: string;

	@Field()
	startDate: Date;

	@Field({ nullable: true })
	finishDate: Date;

	@Field()
	description: string;

	@Field({ description: 'La marca de tiempo cuando se insertó el registro.' })
	createdAt: Date;

	@Field({ description: 'La marca de tiempo cuando se actualizó el registro.' })
	updatedAt: Date;

	@Field(() => Institution, { nullable: true })
	institution?: Institution;
}

@InputType()
export class CreateWorkExperienceInput implements Partial<WorkExperience> {
	@Field(() => Int)
	institutionId: number;

	@Field()
	position: string;

	@Field()
	startDate: Date;

	@Field({ nullable: true })
	finishDate: Date;

	@Field()
	description: string;
}

@InputType()
export class UpdateWorkExperienceInput implements Partial<WorkExperience> {
	@Field(() => Int, { nullable: true })
	institutionId: number;

	@Field({ nullable: true })
	position: string;

	@Field({ nullable: true })
	startDate: Date;

	@Field({ nullable: true })
	finishDate: Date;

	@Field({ nullable: true })
	description: string;
}
