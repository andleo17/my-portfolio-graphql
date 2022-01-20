import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { APIContext } from '../../utils/createContext';
import { CreateKnowledgeInput, Knowledge } from '../models/Knowledge';

@Resolver(Knowledge)
export default class KnowledgeResolver {
	@Mutation(() => Knowledge)
	async addKnowledge(
		@Ctx() { prisma }: APIContext,
		@Arg('data') data: CreateKnowledgeInput
	): Promise<Knowledge> {
		return prisma.knowledge.create({ data });
	}
}
