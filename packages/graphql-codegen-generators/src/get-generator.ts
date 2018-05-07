import { GeneratorConfig } from './types';
import TypescriptSingleFile from './typescript-single-file/config';
import TypescriptMultiFile from './typescript-multi-file/config';
import QueryMultiple from './query-multiple/config';
import QuerySingle from './query-single/config';
import SchemaSingle from './schema-single/config';

export const definitions = {
  ts: TypescriptSingleFile,
  typescript: TypescriptSingleFile,
  'ts-single': TypescriptSingleFile,
  'typescript-single': TypescriptSingleFile,
  'ts-multiple': TypescriptMultiFile,
  'typescript-multiple': TypescriptMultiFile,
  'query-multiple': QueryMultiple,
  'query-single': QuerySingle,
  'schema-single': SchemaSingle
};

export function getGeneratorConfig(name: string): GeneratorConfig {
  return definitions[name];
}
