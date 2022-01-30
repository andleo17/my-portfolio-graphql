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
	Achievement,
	CreateAchievementInput,
	UpdateAchievementInput,
} from '../models/Achievement';
import { Institution } from '../models/Institution';

@Resolver(Achievement)
export default class AchievementResolver {
	@FieldResolver(() => Institution)
	async institution(
		@Root() { id }: Achievement,
		@Ctx() { prisma }: APIContext
	): Promise<Institution> {
		return prisma.achievement.findUnique({ where: { id } }).institution();
	}

	@Query(() => Achievement, { nullable: true })
	async findOneAchievement(
		@Arg('id', () => Int) id: number,
		@Ctx() { prisma }: APIContext
	): Promise<Achievement> {
		return prisma.achievement.findUnique({ where: { id } });
	}

	@Query(() => [Achievement])
	async findManyAchievements(
		@Ctx() { prisma }: APIContext
	): Promise<Achievement[]> {
		return prisma.achievement.findMany({ orderBy: { date: 'desc' } });
	}

	@Mutation(() => Achievement)
	async createAchievement(
		@Arg('data') data: CreateAchievementInput,
		@Ctx() { prisma }: APIContext
	): Promise<Achievement> {
		return prisma.achievement.create({ data });
	}

	@Mutation(() => Achievement, { nullable: true })
	async updateAchievement(
		@Arg('id', () => Int) id: number,
		@Arg('data') data: UpdateAchievementInput,
		@Ctx() { prisma }: APIContext
	): Promise<Achievement> {
		return prisma.achievement.update({ where: { id }, data });
	}

	@Mutation(() => Achievement, { nullable: true })
	async deleteAchievement(
		@Arg('id', () => Int) id: number,
		@Ctx() { prisma }: APIContext
	): Promise<Achievement> {
		return prisma.achievement.delete({ where: { id } });
	}
}
