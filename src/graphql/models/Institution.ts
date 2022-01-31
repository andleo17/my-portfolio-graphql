import { IsUrl } from 'class-validator';
import { Field, ID, InputType, ObjectType } from 'type-graphql';
import { Achievement } from './Achievement';
import { Education } from './Education';
import { Knowledge } from './Knowledge';
import { Language } from './Language';
import { WorkExperience } from './WorkExperience';

@ObjectType({ description: 'Instituciones por las que he pasado en mi vida.' })
export class Institution {
	@Field(() => ID, { description: 'Identificador de un registro.' })
	id: number;

	@Field({ description: 'Nombre de la institución' })
	name: string;

	@Field({ nullable: true, description: 'Resumen acerca de la institución.' })
	description: string;

	@Field({
		nullable: true,
		description: 'URL de la institución si es que cuenta con uno.',
	})
	@IsUrl()
	url: string;

	@Field({ nullable: true, description: 'Ciudad de la institución.' })
	city: string;

	@Field({ nullable: true, description: 'País de la institución.' })
	country: string;

	@Field({
		description: 'Determina si la institución es considerada en mi vida (?).',
	})
	state: boolean;

	@Field({ description: 'La marca de tiempo cuando se insertó el registro.' })
	createdAt: Date;

	@Field({ description: 'La marca de tiempo cuando se actualizó el registro.' })
	updatedAt: Date;

	@Field(() => [Education], {
		description: 'Educación obtenida en la institución.',
	})
	teachings?: Education[];

	@Field(() => [Achievement], {
		description: 'Logros obtenidos en la institución.',
	})
	achievements?: Achievement[];

	@Field(() => [Language], {
		description: 'Idiomas aprendidos en la institución.',
	})
	languages?: Language[];

	@Field(() => [WorkExperience], {
		description: 'Experiencia laboral obtenida en la institución.',
	})
	workExperience?: WorkExperience[];

	@Field(() => [Knowledge], {
		description: 'Conocimientos obtenidos en la institución.',
	})
	knowledges?: Knowledge[];
}

@InputType()
export class CreateInstitutionInput implements Partial<Institution> {
	@Field({ description: 'Nombre de la institución' })
	name: string;

	@Field({ nullable: true, description: 'Resumen acerca de la institución.' })
	description: string;

	@Field({
		nullable: true,
		description: 'URL de la institución si es que cuenta con uno.',
	})
	url: string;

	@Field({ nullable: true, description: 'Ciudad de la institución.' })
	city: string;

	@Field({ nullable: true, description: 'País de la institución.' })
	country: string;

	@Field({
		nullable: true,
		description: 'Determina si la institución es considerada en mi vida (?).',
	})
	state: boolean;
}

@InputType()
export class UpdateInstitutionInput implements Partial<Institution> {
	@Field({ nullable: true, description: 'Nombre de la institución' })
	name: string;

	@Field({ nullable: true, description: 'Resumen acerca de la institución.' })
	description: string;

	@Field({
		nullable: true,
		description: 'URL de la institución si es que cuenta con uno.',
	})
	url: string;

	@Field({ nullable: true, description: 'Ciudad de la institución.' })
	city: string;

	@Field({ nullable: true, description: 'País de la institución.' })
	country: string;

	@Field({
		nullable: true,
		description: 'Determina si la institución es considerada en mi vida (?).',
	})
	state: boolean;
}
