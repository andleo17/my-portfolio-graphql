import { buildSchema } from 'type-graphql';
import { join } from 'path';
import { GraphQLSchema } from 'graphql';

const createSchema = async (): Promise<GraphQLSchema> => {
	return buildSchema({
		resolvers: [__dirname + '/resolvers/*.{ts,js}'],
		emitSchemaFile: join(__dirname, 'schema.gql'),
	});
};

export default createSchema;
