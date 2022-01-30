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
	CreateLanguageInput,
	Language,
	UpdateLanguageInput,
} from '../models/Language';

@Resolver(Language)
export default class LanguageResolver {
	@FieldResolver(() => Institution, { nullable: true })
	async institution(
		@Root() { id }: Language,
		@Ctx() { prisma }: APIContext
	): Promise<Institution> {
		return prisma.language.findUnique({ where: { id } }).institution();
	}

	@Query(() => Language, { nullable: true })
	async findOneLanguage(
		@Arg('id', () => Int) id: number,
		@Ctx() { prisma }: APIContext
	): Promise<Language> {
		return prisma.language.findUnique({ where: { id } });
	}

	@Query(() => [Language])
	async findManyLanguage(@Ctx() { prisma }: APIContext): Promise<Language[]> {
		return prisma.language.findMany({ orderBy: { level: 'desc' } });
	}

	@Mutation(() => Language)
	async createLanguage(
		@Arg('data') data: CreateLanguageInput,
		@Ctx() { prisma }: APIContext
	): Promise<Language> {
		if (data.native) data.level = 6;
		return prisma.language.create({ data });
	}

	@Mutation(() => Language, { nullable: true })
	async updateLanguage(
		@Arg('id', () => Int) id: number,
		@Arg('data') data: UpdateLanguageInput,
		@Ctx() { prisma }: APIContext
	): Promise<Language> {
		if (data.native) data.level = 6;
		return prisma.language.update({ where: { id }, data });
	}

	@Mutation(() => Language, { nullable: true })
	async deleteLanguage(
		@Arg('id', () => Int) id: number,
		@Ctx() { prisma }: APIContext
	): Promise<Language> {
		return prisma.language.delete({ where: { id } });
	}
}
