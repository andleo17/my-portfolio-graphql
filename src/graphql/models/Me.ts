import { IsEmail, IsMobilePhone } from 'class-validator';
import { Field, ID, InputType, ObjectType } from 'type-graphql';
import { Achievement } from './Achievement';
import { Education } from './Education';
import { Knowledge } from './Knowledge';
import { Language } from './Language';
import { Project } from './Project';
import { Skill } from './Skill';
import { Social } from './Social';
import { SoftSkill } from './SoftSkill';
import { WorkExperience } from './WorkExperience';

@ObjectType({ description: 'Mis datos personales.' })
export class Me {
	@Field(() => ID, { description: 'Un ID representativo, este siempre es 1.' })
	id: number;

	@Field({ description: 'Nombres.' })
	name: string;

	@Field({ description: 'Apellidos.' })
	lastname: string;

	@Field({ description: 'Teléfono de contacto.' })
	@IsMobilePhone(['es-PE'])
	phone: string;

	@Field({ description: 'Correo electrónico de contacto.' })
	@IsEmail()
	email: string;

	@Field({ description: 'Una breve descripción de quién soy.' })
	description: string;

	@Field({ description: 'La ciudad donde resido.' })
	city: string;

	@Field({ description: 'El país donde resido.' })
	country: string;

	@Field({ description: 'La marca de tiempo cuando se actualizó el registro.' })
	updatedAt: Date;

	@Field(() => [Social], { description: 'Redes sociales.' })
	social?: Social[];

	@Field(() => [Education], { description: 'Grados de educación.' })
	education?: Education[];

	@Field(() => [Achievement], { description: 'Logros obtenidos.' })
	achievements?: Achievement[];

	@Field(() => [Language], { description: 'Idiomas que hablo.' })
	languages?: Language[];

	@Field(() => [Skill], { description: 'Habilidades' })
	skills?: Skill[];

	@Field(() => [SoftSkill], { description: 'Habilidades blandas' })
	softSkills?: SoftSkill[];

	@Field(() => [WorkExperience], { description: 'Experiencia laboral' })
	workExperience?: WorkExperience[];

	@Field(() => [Knowledge], { description: 'Conocimientos' })
	knowledges?: Knowledge[];

	@Field(() => [Project], { description: 'Proyectos realizados' })
	projects?: Project[];
}

@InputType()
export class SetPersonalDataInput implements Partial<Me> {
	@Field({ description: 'Nombres.' })
	name: string;

	@Field({ description: 'Apellidos.' })
	lastname: string;

	@Field({ description: 'Teléfono de contacto.' })
	@IsMobilePhone(['es-PE'])
	phone: string;

	@Field({ description: 'Correo electrónico de contacto.' })
	@IsEmail()
	email: string;

	@Field({ description: 'Una breve descripción de quién soy.' })
	description: string;

	@Field({ description: 'La ciudad donde resido.' })
	city: string;

	@Field({ description: 'El país donde resido.' })
	country: string;
}
