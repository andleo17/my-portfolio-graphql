import {
	Arg,
	Ctx,
	FieldResolver,
	Mutation,
	Resolver,
	Root,
} from 'type-graphql';
import { Project } from '../models/Project';
import {
	CreateProjectTagInput,
	ProjectTag,
	UpdateProjectTagInput,
} from '../models/ProjectTag';
import { APIContext } from '../../utils/createContext';

@Resolver(ProjectTag)
export default class ProjectTagResolver {
	@FieldResolver(() => [Project])
	async projects(
		@Root() { id }: ProjectTag,
		@Ctx() { prisma }: APIContext
	): Promise<Project[]> {
		return prisma.projectTag.findUnique({ where: { id } }).projects();
	}

	@Mutation(() => ProjectTag)
	async createProjectTag(
		@Arg('data') data: CreateProjectTagInput,
		@Ctx() { prisma }: APIContext
	): Promise<ProjectTag> {
		return prisma.projectTag.create({ data });
	}

	@Mutation(() => ProjectTag, { nullable: true })
	async updateProjectTag(
		@Arg('id', () => String) id: string,
		@Arg('data') data: UpdateProjectTagInput,
		@Ctx() { prisma }: APIContext
	): Promise<ProjectTag> {
		return prisma.projectTag.update({ where: { id }, data });
	}

	@Mutation(() => ProjectTag, { nullable: true })
	async deleteProjectTag(
		@Arg('id', () => String) id: string,
		@Ctx() { prisma }: APIContext
	): Promise<ProjectTag> {
		return prisma.projectTag.delete({ where: { id } });
	}
}
