import { Prisma } from '@prisma/client';
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
	@FieldResolver(() => [KnowledgeCategory])
	async categories(
		@Root() { id }: Knowledge,
		@Ctx() { prisma }: APIContext
	): Promise<KnowledgeCategory[]> {
		return prisma.knowledge.findUnique({ where: { id } }).categories();
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
		const formatedName = data.name.toLowerCase().replaceAll(' ', '-');
		if (!data.slug) data.slug = formatedName;
		if (!data.icon) data.icon = formatedName;
		return prisma.knowledge.create({
			data: {
				description: data.description,
				name: data.name,
				slug: data.slug,
				color: data.color,
				certificateURL: data.certificateURL,
				icon: data.icon,
				level: data.level,
				state: data.state,
				categories: { connect: data.categoryIds.map((c) => ({ id: c })) },
				institution: data.institutionId && {
					connect: { id: data.institutionId },
				},
			},
		});
	}

	@Mutation(() => Knowledge, { nullable: true })
	async updateKnowledge(
		@Arg('id', () => Int) id: number,
		@Arg('data') data: UpdateKnowledgeInput,
		@Ctx() { prisma }: APIContext
	): Promise<Knowledge> {
		const oldData = await prisma.knowledge.findUnique({
			where: { id },
			include: { categories: true },
		});
		if (!oldData) return null;

		const newData: Prisma.KnowledgeUpdateInput = {
			description: data.description,
			name: data.name,
			slug: data.slug,
			color: data.color,
			certificateURL: data.certificateURL,
			icon: data.icon,
			level: data.level,
			state: data.state,
		};

		if (data.categoryIds)
			newData.categories = {
				connect: data.categoryIds.map((c) => ({ id: c })),
				disconnect: oldData.categories
					.filter((c) => !data.categoryIds.includes(c.id))
					.map((c) => ({ id: c.id })),
			};
		if (data.institutionId)
			newData.institution = { connect: { id: data.institutionId } };

		return prisma.knowledge.update({
			where: { id },
			data: newData,
		});
	}

	@Mutation(() => Knowledge, { nullable: true })
	async deleteKnowledge(
		@Arg('id', () => Int) id: number,
		@Ctx() { prisma }: APIContext
	): Promise<Knowledge> {
		return prisma.knowledge.delete({ where: { id } });
	}
}
