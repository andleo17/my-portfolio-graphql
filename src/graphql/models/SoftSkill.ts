import { Max, Min } from 'class-validator';
import { Field, ID, InputType, Int, ObjectType } from 'type-graphql';

@ObjectType({ description: 'Habilidades blandas que tengo.' })
export class SoftSkill {
	@Field(() => ID, { description: 'Identificador de un registro.' })
	id: number;

	@Field({ description: 'Nombre de la habilidad.' })
	name: string;

	@Field(() => Int, {
		description: 'Nivel de dominio de la habilidad en una escala del 1 al 10.',
	})
	@Min(1)
	@Max(10)
	level: number;

	@Field({ description: 'La marca de tiempo cuando se insertó el registro.' })
	createdAt: Date;

	@Field({ description: 'La marca de tiempo cuando se actualizó el registro.' })
	updatedAt: Date;
}

@InputType()
export class CreateSoftSkillInput implements Partial<SoftSkill> {
	@Field({ description: 'Nombre de la habilidad.' })
	name: string;

	@Field(() => Int, {
		description: 'Nivel de dominio de la habilidad en una escala del 1 al 10.',
	})
	@Min(1)
	@Max(10)
	level: number;
}

@InputType()
export class UpdateSoftSkillInput implements Partial<SoftSkill> {
	@Field({ nullable: true, description: 'Nombre de la habilidad.' })
	name: string;

	@Field(() => Int, {
		nullable: true,
		description: 'Nivel de dominio de la habilidad en una escala del 1 al 10.',
	})
	@Min(1)
	@Max(10)
	level: number;
}
