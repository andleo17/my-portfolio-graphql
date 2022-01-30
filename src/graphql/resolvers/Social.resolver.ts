import { Arg, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';
import { APIContext } from '../../utils/createContext';
import { CreateSocialInput, Social } from '../models/Social';

@Resolver(Social)
export default class SocialResolver {
	@Query(() => Social, { nullable: true })
	async findOneSocial(
		@Arg('id', () => Int) id: number,
		@Ctx() { prisma }: APIContext
	): Promise<Social> {
		return prisma.social.findUnique({ where: { id } });
	}

	@Query(() => [Social])
	async findManySocials(@Ctx() { prisma }: APIContext): Promise<Social[]> {
		return prisma.social.findMany({ orderBy: { name: 'asc' } });
	}

	@Mutation(() => Social)
	async createSocial(
		@Arg('data') data: CreateSocialInput,
		@Ctx() { prisma }: APIContext
	): Promise<Social> {
		return prisma.social.create({ data });
	}

	@Mutation(() => Social, { nullable: true })
	async updateSocial(
		@Arg('id', () => Int) id: number,
		@Arg('data') data: CreateSocialInput,
		@Ctx() { prisma }: APIContext
	): Promise<Social> {
		return prisma.social.update({ where: { id }, data });
	}

	@Mutation(() => Social, { nullable: true })
	async deleteSocial(
		@Arg('id', () => Int) id: number,
		@Ctx() { prisma }: APIContext
	): Promise<Social> {
		return prisma.social.delete({ where: { id } });
	}
}
