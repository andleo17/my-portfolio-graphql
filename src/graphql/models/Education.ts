import { Field, ID, InputType, Int, ObjectType } from 'type-graphql';
import { Institution } from './Institution';

@ObjectType({ description: 'Grados de aprendizaje certificados.' })
export class Education {
	@Field(() => ID, {
		description: 'Identificador que representa a un registro.',
	})
	id: number;

	@Field(() => Int, {
		description:
			'Identificador de la institución donde se realizó el aprendizaje.',
	})
	institutionId: number;

	@Field({ nullable: true, description: 'Ciudad de la institución.' })
	city: string;

	@Field({ nullable: true, description: 'País de la institución.' })
	country: string;

	@Field({
		description:
			'Nivel de aprendizaje obtenido. Ej: Primaria, Secundaria, Licenciatura, etc.',
	})
	grade: string;

	@Field({
		description:
			'Fecha de inicio de las actividades. Este dato puede que no sea exacto en cuanto al día.',
	})
	startDate: Date;

	@Field({ nullable: true, description: 'Fecha final de las actividades.' })
	finishDate: Date;

	@Field({ description: 'La marca de tiempo cuando se insertó el registro.' })
	createdAt: Date;

	@Field({ description: 'La marca de tiempo cuando se actualizó el registro.' })
	updatedAt: Date;

	@Field(() => Institution, {
		description: 'Institución donde se realizó el aprendizaje.',
	})
	institution?: Institution;
}

@InputType()
export class CreateEducationInput implements Partial<Education> {
	@Field(() => Int, {
		description:
			'Identificador de la institución donde se realizó el aprendizaje.',
	})
	institutionId: number;

	@Field({ nullable: true, description: 'Ciudad de la institución.' })
	city: string;

	@Field({ nullable: true, description: 'País de la institución.' })
	country: string;

	@Field({
		description:
			'Nivel de aprendizaje obtenido. Ej: Primaria, Secundaria, Licenciatura, etc.',
	})
	grade: string;

	@Field({
		description:
			'Fecha de inicio de las actividades. Este dato puede que no sea exacto en cuanto al día.',
	})
	startDate: Date;

	@Field({ nullable: true, description: 'Fecha final de las actividades.' })
	finishDate: Date;
}

@InputType()
export class UpdateEducationInput implements Partial<Education> {
	@Field(() => Int, {
		nullable: true,
		description:
			'Identificador de la institución donde se realizó el aprendizaje.',
	})
	institutionId: number;

	@Field({ nullable: true, description: 'Ciudad de la institución.' })
	city: string;

	@Field({ nullable: true, description: 'País de la institución.' })
	country: string;

	@Field({
		nullable: true,
		description:
			'Nivel de aprendizaje obtenido. Ej: Primaria, Secundaria, Licenciatura, etc.',
	})
	grade: string;

	@Field({
		nullable: true,
		description:
			'Fecha de inicio de las actividades. Este dato puede que no sea exacto en cuanto al día.',
	})
	startDate: Date;

	@Field({ nullable: true, description: 'Fecha final de las actividades.' })
	finishDate: Date;
}
