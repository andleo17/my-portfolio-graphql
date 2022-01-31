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
import { Knowledge } from '../models/Knowledge';
import {
	CreateKnowledgeCategoryInput,
	KnowledgeCategory,
	UpdateKnowledgeCategoryInput,
} from '../models/KnowledgeCategory';

@Resolver(KnowledgeCategory)
export default class KnowledgeCategoryResolver {
	@FieldResolver(() => [Knowledge])
	async knowledges(
		@Root() { id }: KnowledgeCategory,
		@Ctx() { prisma }: APIContext
	): Promise<Knowledge[]> {
		return prisma.knowledgeCategory.findUnique({ where: { id } }).knowledges();
	}

	@Query(() => KnowledgeCategory, { nullable: true })
	async findOneKnowledgeCategory(
		@Arg('id', () => Int) id: number,
		@Ctx() { prisma }: APIContext
	): Promise<KnowledgeCategory> {
		return prisma.knowledgeCategory.findUnique({ where: { id } });
	}

	@Query(() => [KnowledgeCategory])
	async findManyKnowledgeCategories(
		@Ctx() { prisma }: APIContext
	): Promise<KnowledgeCategory[]> {
		return prisma.knowledgeCategory.findMany({
			where: { state: true },
			orderBy: [{ preference: 'asc' }, { name: 'asc' }],
		});
	}

	@Mutation(() => KnowledgeCategory)
	async createKnowledgeCategory(
		@Arg('data') data: CreateKnowledgeCategoryInput,
		@Ctx() { prisma }: APIContext
	): Promise<KnowledgeCategory> {
		if (!data.slug) data.slug = data.name.toLowerCase().replaceAll(' ', '-');
		return prisma.knowledgeCategory.create({ data });
	}

	@Mutation(() => KnowledgeCategory, { nullable: true })
	async updateKnowledgeCategory(
		@Arg('id', () => Int) id: number,
		@Arg('data') data: UpdateKnowledgeCategoryInput,
		@Ctx() { prisma }: APIContext
	): Promise<KnowledgeCategory> {
		return prisma.knowledgeCategory.update({ where: { id }, data });
	}

	@Mutation(() => KnowledgeCategory, { nullable: true })
	async deleteKnowledgeCategory(
		@Arg('id', () => Int) id: number,
		@Ctx() { prisma }: APIContext
	): Promise<KnowledgeCategory> {
		return prisma.knowledgeCategory.delete({ where: { id } });
	}
}
