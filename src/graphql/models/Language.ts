import { Max, Min } from 'class-validator';
import { Field, ID, InputType, Int, ObjectType } from 'type-graphql';
import { Institution } from './Institution';

@ObjectType({ description: 'Idiomas que sé.' })
export class Language {
	@Field(() => ID, { description: 'Identificador de un registro.' })
	id: number;

	@Field({ description: 'Nombre del idioma.' })
	name: string;

	@Field(() => Int, {
		nullable: true,
		description: 'Identificador de la institución donde se aprendió el idioma.',
	})
	institutionId: number;

	@Field({ description: 'Determina si el idioma es nativo o no.' })
	native: boolean;

	@Field(() => Int, {
		description:
			'Representa el nivel de dominio del idioma. [A1 -> 1], [C2 -> 6]',
	})
	@Min(1)
	@Max(6)
	level: number;

	@Field({ nullable: true })
	startDate: Date;

	@Field({ nullable: true })
	finishDate: Date;

	@Field({ description: 'La marca de tiempo cuando se insertó el registro.' })
	createdAt: Date;

	@Field({ description: 'La marca de tiempo cuando se actualizó el registro.' })
	updatedAt: Date;

	@Field(() => Institution, {
		nullable: true,
		description: 'Institución donde se aprendió el idioma.',
	})
	institution?: Institution;
}

@InputType()
export class CreateLanguageInput implements Partial<Language> {
	@Field({ description: 'Nombre del idioma.' })
	name: string;

	@Field(() => Int, {
		nullable: true,
		description: 'Identificador de la institución donde se aprendió el idioma.',
	})
	institutionId: number;

	@Field({ description: 'Determina si el idioma es nativo o no.' })
	native: boolean;

	@Field(() => Int, {
		nullable: true,
		description:
			'Representa el nivel de dominio del idioma. [A1 -> 1], [C2 -> 6]',
	})
	@Min(1)
	@Max(6)
	level: number;

	@Field({ nullable: true })
	startDate: Date;

	@Field({ nullable: true })
	finishDate: Date;
}

@InputType()
export class UpdateLanguageInput implements Partial<Language> {
	@Field({ nullable: true, description: 'Nombre del idioma.' })
	name: string;

	@Field(() => Int, {
		nullable: true,
		description: 'Identificador de la institución donde se aprendió el idioma.',
	})
	institutionId: number;

	@Field({
		nullable: true,
		description: 'Determina si el idioma es nativo o no.',
	})
	native: boolean;

	@Field(() => Int, {
		nullable: true,
		description:
			'Representa el nivel de dominio del idioma. [A1 -> 1], [C2 -> 6]',
	})
	@Min(1)
	@Max(6)
	level: number;

	@Field({ nullable: true })
	startDate: Date;

	@Field({ nullable: true })
	finishDate: Date;
}
