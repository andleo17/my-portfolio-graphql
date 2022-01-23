import 'reflect-metadata';
import Express from 'express';
import { graphqlHTTP } from 'express-graphql';
import createSchema from './graphql/schema';
import { createContext } from './utils/createContext';
import cors from 'cors';

async function main() {
	const port = process.env.PORT || 4000;

	const app = Express();

	app.use(cors());

	app.use(
		'/graphql',
		graphqlHTTP(async (req, res) => ({
			schema: await createSchema(),
			context: createContext({ req, res }),
			graphiql: true,
		}))
	);

	app.listen(port);
	console.log(
		`Running a GraphQL API server at http://localhost:${port}/graphql`
	);
}

main();
