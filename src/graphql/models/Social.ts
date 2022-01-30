import { IsUrl } from 'class-validator';
import { Field, ID, InputType, ObjectType } from 'type-graphql';

@ObjectType({ description: 'Redes sociales que tengo.' })
export class Social {
	@Field(() => ID, {
		description: 'Identificador que representa a una red social registrada.',
	})
	id: number;

	@Field({ description: 'Nombre de la red social.' })
	name: string;

	@Field({ description: 'Nombre del ícono que se mostrará.' })
	icon: string;

	@Field({ description: 'URL de mi perfil en la red social.' })
	@IsUrl()
	url: string;

	@Field({ description: 'Determina si la red social aún sigue vigente.' })
	state: boolean;

	@Field({ description: 'La marca de tiempo cuando se insertó el registro.' })
	createdAt: Date;

	@Field({ description: 'La marca de tiempo cuando se actualizó el registro.' })
	updatedAt: Date;
}

@InputType()
export class CreateSocialInput implements Partial<Social> {
	@Field({ description: 'Nombre de la red social.' })
	name: string;

	@Field({ description: 'Nombre del ícono que se mostrará.' })
	icon: string;

	@Field({ description: 'URL de mi perfil en la red social.' })
	@IsUrl()
	url: string;

	@Field({
		nullable: true,
		description: 'Determina si la red social aún sigue vigente.',
	})
	state: boolean;
}

@InputType()
export class UpdateSocialInput implements Partial<Social> {
	@Field({ nullable: true, description: 'Nombre de la red social.' })
	name: string;

	@Field({ nullable: true, description: 'Nombre del ícono que se mostrará.' })
	icon: string;

	@Field({ nullable: true, description: 'URL de mi perfil en la red social.' })
	@IsUrl()
	url: string;

	@Field({
		nullable: true,
		description: 'Determina si la red social aún sigue vigente.',
	})
	state: boolean;
}
