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
import {
	CreateProjectInput,
	Project,
	UpdateProjectInput,
} from '../models/Project';
import { APIContext } from '../../utils/createContext';
import { Knowledge } from '../models/Knowledge';

@Resolver(Project)
export default class ProjectResolver {
	@FieldResolver(() => [Knowledge])
	async tags(
		@Root() { id }: Project,
		@Ctx() { prisma }: APIContext
	): Promise<Knowledge[]> {
		return prisma.project.findUnique({ where: { id } }).tags();
	}

	@Query(() => Project, { nullable: true })
	async findOneProject(
		@Arg('slug') slug: string,
		@Ctx() { prisma }: APIContext
	): Promise<Project> {
		return prisma.project.findUnique({ where: { slug } });
	}

	@Query(() => [Project])
	async findManyProjects(@Ctx() { prisma }: APIContext): Promise<Project[]> {
		return prisma.project.findMany({
			where: { state: true },
			orderBy: { createdAt: 'desc' },
		});
	}

	@Mutation(() => Project)
	async createProject(
		@Arg('data') data: CreateProjectInput,
		@Ctx() { prisma }: APIContext
	): Promise<Project> {
		console.log(data);
		return prisma.project.create({
			data: {
				name: data.name,
				description: data.description,
				slug: data.slug,
				repositoryURL: data.repositoryURL,
				state: data.state,
				imageURLs: data.imageURLs || [],
				tags: {
					connect: data.tagIDs.map((t) => ({ id: t })),
				},
			},
		});
	}

	@Mutation(() => Project, { nullable: true })
	async updateProject(
		@Arg('id', () => Int) id: number,
		@Arg('data') data: UpdateProjectInput,
		@Ctx() { prisma }: APIContext
	): Promise<Project> {
		return prisma.project.update({
			where: { id },
			data: {
				name: data.name,
				description: data.description,
				slug: data.slug,
				repositoryURL: data.repositoryURL,
				state: data.state,
				imageURLs: data.imageURLs,
				tags: {
					connect: data.tagIDs.map((t) => ({ id: t })),
				},
			},
		});
	}

	@Mutation(() => Project, { nullable: true })
	async deleteProject(
		@Arg('id', () => Int) id: number,
		@Ctx() { prisma }: APIContext
	): Promise<Project> {
		return prisma.project.delete({ where: { id } });
	}
}
