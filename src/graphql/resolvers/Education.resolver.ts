import {
	Arg,
	Ctx,
	FieldResolver,
	Int,
	Mutation,
	Query,
	Resolver,
	Root,
} from 'type-graphql';
import { APIContext } from '../../utils/createContext';
import {
	CreateEducationInput,
	Education,
	UpdateEducationInput,
} from '../models/Education';
import { Institution } from '../models/Institution';

@Resolver(Education)
export default class EducationResolver {
	@FieldResolver(() => Institution)
	async institution(
		@Root() { id }: Education,
		@Ctx() { prisma }: APIContext
	): Promise<Institution> {
		return prisma.education.findUnique({ where: { id } }).institution();
	}

	@Query(() => Education, { nullable: true })
	async findOneEducation(
		@Arg('id', () => Int) id: number,
		@Ctx() { prisma }: APIContext
	): Promise<Education> {
		return prisma.education.findUnique({ where: { id } });
	}

	@Query(() => [Education])
	async findManyEducation(@Ctx() { prisma }: APIContext): Promise<Education[]> {
		return prisma.education.findMany({ orderBy: { finishDate: 'desc' } });
	}

	@Mutation(() => Education)
	async createEducation(
		@Arg('data') data: CreateEducationInput,
		@Ctx() { prisma }: APIContext
	): Promise<Education> {
		return prisma.education.create({ data });
	}

	@Mutation(() => Education, { nullable: true })
	async updateEducation(
		@Arg('id', () => Int) id: number,
		@Arg('data') data: UpdateEducationInput,
		@Ctx() { prisma }: APIContext
	): Promise<Education> {
		return prisma.education.update({ where: { id }, data });
	}

	@Mutation(() => Education, { nullable: true })
	async deleteEducation(
		@Arg('id', () => Int) id: number,
		@Ctx() { prisma }: APIContext
	): Promise<Education> {
		return prisma.education.delete({ where: { id } });
	}
}
