import { Arg, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';
import { APIContext } from '../../utils/createContext';
import { CreateSkillInput, Skill, UpdateSkillInput } from '../models/Skill';

@Resolver(Skill)
export default class SkillResolver {
	@Query(() => Skill, { nullable: true })
	async findOneSkill(
		@Arg('id', () => Int) id: number,
		@Ctx() { prisma }: APIContext
	): Promise<Skill> {
		return prisma.skill.findUnique({ where: { id } });
	}

	@Query(() => [Skill])
	async findManySkills(@Ctx() { prisma }: APIContext): Promise<Skill[]> {
		return prisma.skill.findMany({ orderBy: { level: 'desc' } });
	}

	@Mutation(() => Skill)
	async createSkill(
		@Arg('data') data: CreateSkillInput,
		@Ctx() { prisma }: APIContext
	): Promise<Skill> {
		return prisma.skill.create({ data });
	}

	@Mutation(() => Skill, { nullable: true })
	async updateSkill(
		@Arg('id', () => Int) id: number,
		@Arg('data') data: UpdateSkillInput,
		@Ctx() { prisma }: APIContext
	): Promise<Skill> {
		return prisma.skill.update({ where: { id }, data });
	}

	@Mutation(() => Skill, { nullable: true })
	async deleteSkill(
		@Arg('id', () => Int) id: number,
		@Ctx() { prisma }: APIContext
	): Promise<Skill> {
		return prisma.skill.delete({ where: { id } });
	}
}
