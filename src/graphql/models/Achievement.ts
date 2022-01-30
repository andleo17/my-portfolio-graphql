import { IsUrl } from 'class-validator';
import { Field, ID, InputType, Int, ObjectType } from 'type-graphql';
import { Institution } from './Institution';

@ObjectType({ description: 'Logros obtenidos.' })
export class Achievement {
	@Field(() => ID, { description: 'Identificador de un registro.' })
	id: number;

	@Field({ description: 'Nombre del logro.' })
	name: string;

	@Field(() => Int, {
		description: 'Identificador de la institución donde se realizó el logro.',
	})
	institutionId: number;

	@Field({ description: 'Fecha en la que se consiguió el logro.' })
	date: Date;

	@Field({ nullable: true, description: 'URL del certificado.' })
	@IsUrl()
	url: string;

	@Field({ description: 'La marca de tiempo cuando se insertó el registro.' })
	createdAt: Date;

	@Field({ description: 'La marca de tiempo cuando se actualizó el registro.' })
	updatedAt: Date;

	@Field(() => Institution, {
		description: 'Institución donde se consiguió el logro.',
	})
	institution?: Institution;
}

@InputType()
export class CreateAchievementInput implements Partial<Achievement> {
	@Field({ description: 'Nombre del logro.' })
	name: string;

	@Field(() => Int, {
		description: 'Identificador de la institución donde se realizó el logro.',
	})
	institutionId: number;

	@Field({ description: 'Fecha en la que se consiguió el logro.' })
	date: Date;

	@Field({ nullable: true, description: 'URL del certificado.' })
	@IsUrl()
	url: string;
}

@InputType()
export class UpdateAchievementInput implements Partial<Achievement> {
	@Field({ nullable: true, description: 'Nombre del logro.' })
	name: string;

	@Field(() => Int, {
		nullable: true,
		description: 'Identificador de la institución donde se realizó el logro.',
	})
	institutionId: number;

	@Field({
		nullable: true,
		description: 'Fecha en la que se consiguió el logro.',
	})
	date: Date;

	@Field({ nullable: true, description: 'URL del certificado.' })
	@IsUrl()
	url: string;
}
