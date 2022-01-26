import {
	Arg,
	Ctx,
	FieldResolver,
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
import { ProjectTag } from '../models/ProjectTag';
import { APIContext } from '../../utils/createContext';

@Resolver(Project)
export default class ProjectResolver {
	@FieldResolver(() => [ProjectTag])
	async tags(
		@Root() { id }: Project,
		@Ctx() { prisma }: APIContext
	): Promise<ProjectTag[]> {
		return prisma.project.findUnique({ where: { id } }).tags();
	}

	@Query(() => [Project])
	async projects(@Ctx() { prisma }: APIContext): Promise<Project[]> {
		return prisma.project.findMany({
			where: { state: true },
			orderBy: { createdAt: 'desc' },
		});
	}

	@Query(() => Project, { nullable: true })
	async project(
		@Arg('slug') slug: string,
		@Ctx() { prisma }: APIContext
	): Promise<Project> {
		return prisma.project.findUnique({ where: { slug } });
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
		@Arg('id') id: string,
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
		@Arg('id') id: string,
		@Ctx() { prisma }: APIContext
	): Promise<Project> {
		return prisma.project.delete({ where: { id } });
	}
}
