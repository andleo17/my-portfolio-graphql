import { Field, ID, InputType, Int, ObjectType } from 'type-graphql';
import { Knowledge } from './Knowledge';

@ObjectType({ description: 'Categorías de conocimientos.' })
export class KnowledgeCategory {
	@Field(() => ID, { description: 'Identificador del registro.' })
	id: number;

	@Field({ description: 'Nombre de la categoría de conocimiento.' })
	name: string;

	@Field({
		description: 'Ruta para mostrar más información acerca de la categoría.',
	})
	slug: string;

	@Field({
		description:
			'Breve descripción de lo que trata y cómo es que aplica la categoría de conocimiento.',
	})
	description: string;

	@Field({ description: 'Ícono de la categoría.' })
	icon: string;

	@Field(() => Int, { description: 'Orden de preferencia de la categoría.' })
	preference: number;

	@Field({
		description:
			'Determina si esta categoría se mostrará o no en el sitio web.',
	})
	state: boolean;

	@Field({ description: 'La marca de tiempo cuando se insertó el registro.' })
	createdAt: Date;

	@Field({ description: 'La marca de tiempo cuando se actualizó el registro.' })
	updatedAt: Date;

	@Field(() => [Knowledge], {
		description: 'Conocimientos que pertenecen a la categoría.',
	})
	knowledges?: Knowledge[];
}

@InputType()
export class CreateKnowledgeCategoryInput
	implements Partial<KnowledgeCategory>
{
	@Field({ description: 'Nombre de la categoría de conocimiento.' })
	name: string;

	@Field({
		nullable: true,
		description: 'Ruta para mostrar más información acerca de la categoría.',
	})
	slug: string;

	@Field({
		description:
			'Breve descripción de lo que trata y cómo es que aplica la categoría de conocimiento.',
	})
	description: string;

	@Field({ nullable: true, description: 'Ícono de la categoría.' })
	icon: string;

	@Field(() => Int, { description: 'Orden de preferencia de la categoría.' })
	preference: number;

	@Field({
		nullable: true,
		description:
			'Determina si esta categoría se mostrará o no en el sitio web.',
	})
	state: boolean;
}

@InputType()
export class UpdateKnowledgeCategoryInput
	implements Partial<KnowledgeCategory>
{
	@Field({
		nullable: true,
		description: 'Nombre de la categoría de conocimiento.',
	})
	name: string;

	@Field({
		nullable: true,
		description: 'Ruta para mostrar más información acerca de la categoría.',
	})
	slug: string;

	@Field({
		nullable: true,
		description:
			'Breve descripción de lo que trata y cómo es que aplica la categoría de conocimiento.',
	})
	description: string;

	@Field({ nullable: true, description: 'Ícono de la categoría.' })
	icon: string;

	@Field(() => Int, {
		nullable: true,
		description: 'Orden de preferencia de la categoría.',
	})
	preference: number;

	@Field({
		nullable: true,
		description:
			'Determina si esta categoría se mostrará o no en el sitio web.',
	})
	state: boolean;
}
