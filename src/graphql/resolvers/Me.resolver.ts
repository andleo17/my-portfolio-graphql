import {
	Arg,
	Ctx,
	FieldResolver,
	Mutation,
	Query,
	Resolver,
} from 'type-graphql';
import { Knowledge } from '../models/Knowledge';
import { Me, SetPersonalDataInput } from '../models/Me';
import { Project } from '../models/Project';
import { APIContext } from '../../utils/createContext';
import { Social } from '../models/Social';
import { Education } from '../models/Education';
import { Achievement } from '../models/Achievement';
import { Language } from '../models/Language';
import { Skill } from '../models/Skill';
import { SoftSkill } from '../models/SoftSkill';
import { WorkExperience } from '../models/WorkExperience';

@Resolver(Me)
export default class MeResolver {
	@FieldResolver(() => [Social])
	async social(@Ctx() { prisma }: APIContext): Promise<Social[]> {
		return prisma.social.findMany({
			where: { state: true },
			orderBy: { name: 'desc' },
		});
	}

	@FieldResolver(() => [Education])
	async education(@Ctx() { prisma }: APIContext): Promise<Education[]> {
		return prisma.education.findMany({
			orderBy: { finishDate: 'desc' },
		});
	}

	@FieldResolver(() => [Achievement])
	async achievements(@Ctx() { prisma }: APIContext): Promise<Achievement[]> {
		return prisma.achievement.findMany({
			orderBy: { date: 'desc' },
		});
	}

	@FieldResolver(() => [Language])
	async languages(@Ctx() { prisma }: APIContext): Promise<Language[]> {
		return prisma.language.findMany({
			orderBy: { level: 'desc' },
		});
	}

	@FieldResolver(() => [Skill])
	async skills(@Ctx() { prisma }: APIContext): Promise<Skill[]> {
		return prisma.skill.findMany({
			orderBy: { level: 'desc' },
		});
	}

	@FieldResolver(() => [SoftSkill])
	async softSkills(@Ctx() { prisma }: APIContext): Promise<SoftSkill[]> {
		return prisma.softSkill.findMany({
			orderBy: { level: 'desc' },
		});
	}

	@FieldResolver(() => [WorkExperience])
	async workExperience(
		@Ctx() { prisma }: APIContext
	): Promise<WorkExperience[]> {
		return prisma.workExperience.findMany({
			orderBy: { finishDate: 'desc' },
		});
	}

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

	@Mutation(() => Me)
	async setPersonalData(
		@Arg('data') data: SetPersonalDataInput,
		@Ctx() { prisma }: APIContext
	): Promise<Me> {
		return prisma.me.upsert({
			where: { id: 1 },
			create: { id: 1, ...data },
			update: data,
		});
	}
}
