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
	CreateKnowledgeInput,
	Knowledge,
	UpdateKnowledgeInput,
} from '../models/Knowledge';
import { KnowledgeCategory } from '../models/KnowledgeCategory';
import { Project } from '../models/Project';

@Resolver(Knowledge)
export default class KnowledgeResolver {
	@FieldResolver(() => KnowledgeCategory)
	async category(
		@Root() { id }: Knowledge,
		@Ctx() { prisma }: APIContext
	): Promise<KnowledgeCategory> {
		return prisma.knowledge.findUnique({ where: { id } }).category();
	}

	@FieldResolver(() => Institution, { nullable: true })
	async institution(
		@Root() { id }: Knowledge,
		@Ctx() { prisma }: APIContext
	): Promise<Institution> {
		return prisma.knowledge.findUnique({ where: { id } }).institution();
	}

	@FieldResolver(() => [Project])
	async projects(
		@Root() { id }: Knowledge,
		@Ctx() { prisma }: APIContext
	): Promise<Project[]> {
		return prisma.knowledge.findUnique({ where: { id } }).projects();
	}

	@Query(() => Knowledge, { nullable: true })
	async findOneKnowledge(
		@Arg('id', () => Int) id: number,
		@Ctx() { prisma }: APIContext
	): Promise<Knowledge> {
		return prisma.knowledge.findUnique({ where: { id } });
	}

	@Query(() => [Knowledge])
	async findManyKnowledge(@Ctx() { prisma }: APIContext): Promise<Knowledge[]> {
		return prisma.knowledge.findMany({
			where: { state: true },
			orderBy: [{ level: 'desc' }, { name: 'asc' }],
		});
	}

	@Mutation(() => Knowledge)
	async createKnowledge(
		@Arg('data') data: CreateKnowledgeInput,
		@Ctx() { prisma }: APIContext
	): Promise<Knowledge> {
		if (!data.slug) data.slug = data.name.toLowerCase().replaceAll(' ', '-');
		return prisma.knowledge.create({ data });
	}

	@Mutation(() => Knowledge, { nullable: true })
	async updateKnowledge(
		@Arg('id', () => Int) id: number,
		@Arg('data') data: UpdateKnowledgeInput,
		@Ctx() { prisma }: APIContext
	): Promise<Knowledge> {
		return prisma.knowledge.update({ where: { id }, data });
	}

	@Mutation(() => Knowledge, { nullable: true })
	async deleteKnowledge(
		@Arg('id', () => Int) id: number,
		@Ctx() { prisma }: APIContext
	): Promise<Knowledge> {
		return prisma.knowledge.delete({ where: { id } });
	}
}
