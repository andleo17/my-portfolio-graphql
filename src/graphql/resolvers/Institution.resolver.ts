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
import { Achievement } from '../models/Achievement';
import { Education } from '../models/Education';
import {
	CreateInstitutionInput,
	Institution,
	UpdateInstitutionInput,
} from '../models/Institution';
import { Knowledge } from '../models/Knowledge';
import { Language } from '../models/Language';
import { WorkExperience } from '../models/WorkExperience';

@Resolver(Institution)
export default class InstitutionResolver {
	@FieldResolver(() => [Education])
	async teachings(
		@Root() { id }: Institution,
		@Ctx() { prisma }: APIContext
	): Promise<Education[]> {
		return prisma.institution.findUnique({ where: { id } }).teachings();
	}

	@FieldResolver(() => [Achievement])
	async achievements(
		@Root() { id }: Institution,
		@Ctx() { prisma }: APIContext
	): Promise<Achievement[]> {
		return prisma.institution.findUnique({ where: { id } }).achievements();
	}

	@FieldResolver(() => [Language])
	async languages(
		@Root() { id }: Institution,
		@Ctx() { prisma }: APIContext
	): Promise<Language[]> {
		return prisma.institution.findUnique({ where: { id } }).languages();
	}

	@FieldResolver(() => [WorkExperience])
	async workExperience(
		@Root() { id }: Institution,
		@Ctx() { prisma }: APIContext
	): Promise<WorkExperience[]> {
		return prisma.institution.findUnique({ where: { id } }).workExperience();
	}

	@FieldResolver(() => [Knowledge])
	async knowledges(
		@Root() { id }: Institution,
		@Ctx() { prisma }: APIContext
	): Promise<Knowledge[]> {
		return prisma.institution.findUnique({ where: { id } }).knowledges();
	}

	@Query(() => Institution, { nullable: true })
	async findOneInstitution(
		@Arg('id', () => Int) id: number,
		@Ctx() { prisma }: APIContext
	): Promise<Institution> {
		return prisma.institution.findUnique({ where: { id } });
	}

	@Query(() => [Institution])
	async findManyInstitution(
		@Ctx() { prisma }: APIContext
	): Promise<Institution[]> {
		return prisma.institution.findMany({
			where: { state: true },
			orderBy: { name: 'asc' },
		});
	}

	@Mutation(() => Institution)
	async createInstitution(
		@Arg('data') data: CreateInstitutionInput,
		@Ctx() { prisma }: APIContext
	): Promise<Institution> {
		return prisma.institution.create({ data });
	}

	@Mutation(() => Institution, { nullable: true })
	async updateInstitution(
		@Arg('id', () => Int) id: number,
		@Arg('data') data: UpdateInstitutionInput,
		@Ctx() { prisma }: APIContext
	): Promise<Institution> {
		return prisma.institution.update({ where: { id }, data });
	}

	@Mutation(() => Institution, { nullable: true })
	async deleteInstitution(
		@Arg('id', () => Int) id: number,
		@Ctx() { prisma }: APIContext
	): Promise<Institution> {
		return prisma.institution.delete({ where: { id } });
	}
}
