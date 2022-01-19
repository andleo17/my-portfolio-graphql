import { Ctx, FieldResolver, Resolver, Root } from 'type-graphql';
import { Project } from '../models/Project';
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
}
