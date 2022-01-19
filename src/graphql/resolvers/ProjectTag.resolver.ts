import { Ctx, FieldResolver, Resolver, Root } from 'type-graphql';
import { Project } from '../models/Project';
import { ProjectTag } from '../models/ProjectTag';
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
}
