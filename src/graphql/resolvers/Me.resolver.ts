import { Ctx, FieldResolver, Query, Resolver } from 'type-graphql';
import { Knowledge } from '../models/Knowledge';
import { Me } from '../models/Me';
import { Project } from '../models/Project';
import { APIContext } from '../../utils/createContext';

@Resolver(Me)
export default class MeResolver {
	@FieldResolver(() => [Knowledge])
	async knowledges(@Ctx() { prisma }: APIContext): Promise<Knowledge[]> {
		return prisma.knowledge.findMany({
			where: { state: true },
			orderBy: { level: 'desc' },
		});
	}

	@FieldResolver(() => [Project])
	async projects(@Ctx() { prisma }: APIContext): Promise<Project[]> {
		return prisma.project.findMany({ where: { state: true } });
	}

	@Query(() => Me)
	async personalData(@Ctx() { prisma }: APIContext): Promise<Me> {
		return await prisma.me.findFirst();
	}
}
