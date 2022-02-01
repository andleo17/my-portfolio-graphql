import { Max, Min } from 'class-validator';
import { Field, ID, InputType, Int, ObjectType } from 'type-graphql';
import { Institution } from './Institution';
import { KnowledgeCategory } from './KnowledgeCategory';
import { Project } from './Project';
@ObjectType({ description: 'Conocimientos en ciertas áreas o temas.' })
export class Knowledge {
	@Field(() => ID, { description: 'Identificador de un registro.' })
	id: number;

	@Field({ description: 'Nombre o tema del conocimiento.' })
	name: string;

	@Field({
		description:
			'Breve descripción acerca de lo que trata y cómo es que lo he aplicado.',
	})
	description: string;

	@Field({ description: 'Lo que se mostrará en la URL para acceder' })
	slug: string;

	@Field({
		description: 'Color del conocimiento que se visualizará en el sitio web.',
	})
	color: string;

	@Field({
		nullable: true,
		description:
			'Ícono que representa al conocimiento y que se mostrará en el sitio web.',
	})
	icon: string;

	@Field(() => Int, {
		description: 'Nivel de dominio del conocimiento en una escala del 1 al 10',
	})
	@Min(1)
	@Max(10)
	level: number;

	@Field(() => Int, {
		nullable: true,
		description:
			'Identificador de la institución donde se adquirió el conocimiento.',
	})
	institutionId: number;

	@Field({
		nullable: true,
		description:
			'URL del certificado obtenido después de completar los cursos.',
	})
	certificateURL: string;

	@Field({
		description:
			'Determina si el conocimiento es mostrado o no en el sitio web.',
	})
	state: boolean;

	@Field({ description: 'La marca de tiempo cuando se insertó el registro.' })
	createdAt: Date;

	@Field({ description: 'La marca de tiempo cuando se actualizó el registro.' })
	updatedAt: Date;

	@Field(() => [KnowledgeCategory], {
		description: 'Categorías a la que pertenece el conocimiento.',
	})
	categories?: KnowledgeCategory[];

	@Field(() => Institution, {
		nullable: true,
		description: 'Institución donde se adquirió el conocimiento.',
	})
	institution?: Institution;

	@Field(() => [Project], {
		description: 'Proyectos en los que se ha aplicado el conocimento.',
	})
	projects?: Project[];
}

@InputType()
export class CreateKnowledgeInput implements Partial<Knowledge> {
	@Field({ description: 'Nombre o tema del conocimiento.' })
	name: string;

	@Field({
		description:
			'Breve descripción acerca de lo que trata y cómo es que lo he aplicado.',
	})
	description: string;

	@Field({
		nullable: true,
		description: 'Lo que se mostrará en la URL para acceder',
	})
	slug: string;

	@Field({
		description: 'Color del conocimiento que se visualizará en el sitio web.',
	})
	color: string;

	@Field(() => [Int], {
		description:
			'Identificadores de las categorías a la que pertenece el conocimiento.',
	})
	categoryIds: number[];

	@Field({
		nullable: true,
		description:
			'Ícono que representa al conocimiento y que se mostrará en el sitio web.',
	})
	icon: string;

	@Field(() => Int, {
		description: 'Nivel de dominio del conocimiento en una escala del 1 al 10',
	})
	@Min(1)
	@Max(10)
	level: number;

	@Field(() => Int, {
		nullable: true,
		description:
			'Identificador de la institución donde se adquirió el conocimiento.',
	})
	institutionId: number;

	@Field({
		nullable: true,
		description:
			'URL del certificado obtenido después de completar los cursos.',
	})
	certificateURL: string;

	@Field({
		nullable: true,
		description:
			'Determina si el conocimiento es mostrado o no en el sitio web.',
	})
	state: boolean;
}

@InputType()
export class UpdateKnowledgeInput implements Partial<Knowledge> {
	@Field({ nullable: true, description: 'Nombre o tema del conocimiento.' })
	name: string;

	@Field({
		nullable: true,
		description:
			'Breve descripción acerca de lo que trata y cómo es que lo he aplicado.',
	})
	description: string;

	@Field({
		nullable: true,
		description: 'Lo que se mostrará en la URL para acceder',
	})
	slug: string;

	@Field({
		nullable: true,
		description: 'Color del conocimiento que se visualizará en el sitio web.',
	})
	color: string;

	@Field(() => [Int], {
		nullable: true,
		description:
			'Identificadores de las categorías a la que pertenece el conocimiento.',
	})
	categoryIds: number[];

	@Field({
		nullable: true,
		description:
			'Ícono que representa al conocimiento y que se mostrará en el sitio web.',
	})
	icon: string;

	@Field(() => Int, {
		nullable: true,
		description: 'Nivel de dominio del conocimiento en una escala del 1 al 10',
	})
	@Min(1)
	@Max(10)
	level: number;

	@Field(() => Int, {
		nullable: true,
		description:
			'Identificador de la institución donde se adquirió el conocimiento.',
	})
	institutionId: number;

	@Field({
		nullable: true,
		description:
			'URL del certificado obtenido después de completar los cursos.',
	})
	certificateURL: string;

	@Field({
		nullable: true,
		description:
			'Determina si el conocimiento es mostrado o no en el sitio web.',
	})
	state: boolean;
}
