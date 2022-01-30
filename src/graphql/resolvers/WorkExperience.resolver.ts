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
import { Institution } from '../models/Institution';
import {
	CreateWorkExperienceInput,
	UpdateWorkExperienceInput,
	WorkExperience,
} from '../models/WorkExperience';

@Resolver(WorkExperience)
export default class WorkExperienceResolver {
	@FieldResolver(() => Institution, { nullable: true })
	async institution(
		@Root() { id }: WorkExperience,
		@Ctx() { prisma }: APIContext
	): Promise<Institution> {
		return prisma.workExperience.findUnique({ where: { id } }).institution();
	}

	@Query(() => WorkExperience, { nullable: true })
	async findOneWorkExperience(
		@Arg('id', () => Int) id: number,
		@Ctx() { prisma }: APIContext
	): Promise<WorkExperience> {
		return prisma.workExperience.findUnique({ where: { id } });
	}

	@Query(() => [WorkExperience])
	async findManyWorkExperience(
		@Ctx() { prisma }: APIContext
	): Promise<WorkExperience[]> {
		return prisma.workExperience.findMany({ orderBy: { finishDate: 'desc' } });
	}

	@Mutation(() => WorkExperience)
	async createWorkExperience(
		@Arg('data') data: CreateWorkExperienceInput,
		@Ctx() { prisma }: APIContext
	): Promise<WorkExperience> {
		return prisma.workExperience.create({ data });
	}

	@Mutation(() => WorkExperience, { nullable: true })
	async updateWorkExperience(
		@Arg('id', () => Int) id: number,
		@Arg('data') data: UpdateWorkExperienceInput,
		@Ctx() { prisma }: APIContext
	): Promise<WorkExperience> {
		return prisma.workExperience.update({ where: { id }, data });
	}

	@Mutation(() => WorkExperience, { nullable: true })
	async deleteWorkExperience(
		@Arg('id', () => Int) id: number,
		@Ctx() { prisma }: APIContext
	): Promise<WorkExperience> {
		return prisma.workExperience.delete({ where: { id } });
	}
}
