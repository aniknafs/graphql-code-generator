import * as fs from 'fs';

import { buildASTSchema, graphql, parse } from 'graphql';
import { introspectionQuery } from 'graphql/utilities';

async function introspect(schemaContents: string) {
  const schema = buildASTSchema(parse(schemaContents));
  return await graphql(schema, introspectionQuery);
}

export async function getIntrospectSchema(schemaPath: string, outputPath: string) {
  if (!fs.existsSync(schemaPath)) {
    console.log(`Cannot find GraphQL schema file: ${schemaPath}`);
  }

  const schemaContents = fs.readFileSync(schemaPath).toString();
  const result = await introspect(schemaContents);

  if (result.errors) {
    console.log(`Errors in introspection query result: ${result.errors}`);
  }

  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
}
