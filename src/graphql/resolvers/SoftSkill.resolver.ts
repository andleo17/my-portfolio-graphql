import { Arg, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';
import { APIContext } from '../../utils/createContext';
import {
	CreateSoftSkillInput,
	SoftSkill,
	UpdateSoftSkillInput,
} from '../models/SoftSkill';

@Resolver(SoftSkill)
export default class SoftSkillResolver {
	@Query(() => SoftSkill, { nullable: true })
	async findOneSoftSkill(
		@Arg('id', () => Int) id: number,
		@Ctx() { prisma }: APIContext
	): Promise<SoftSkill> {
		return prisma.softSkill.findUnique({ where: { id } });
	}

	@Query(() => [SoftSkill])
	async findManySoftSkills(
		@Ctx() { prisma }: APIContext
	): Promise<SoftSkill[]> {
		return prisma.softSkill.findMany({ orderBy: { level: 'desc' } });
	}

	@Mutation(() => SoftSkill)
	async createSoftSkill(
		@Arg('data') data: CreateSoftSkillInput,
		@Ctx() { prisma }: APIContext
	): Promise<SoftSkill> {
		return prisma.softSkill.create({ data });
	}

	@Mutation(() => SoftSkill, { nullable: true })
	async updateSoftSkill(
		@Arg('id', () => Int) id: number,
		@Arg('data') data: UpdateSoftSkillInput,
		@Ctx() { prisma }: APIContext
	): Promise<SoftSkill> {
		return prisma.softSkill.update({ where: { id }, data });
	}

	@Mutation(() => SoftSkill, { nullable: true })
	async deleteSoftSkill(
		@Arg('id', () => Int) id: number,
		@Ctx() { prisma }: APIContext
	): Promise<SoftSkill> {
		return prisma.softSkill.delete({ where: { id } });
	}
}
