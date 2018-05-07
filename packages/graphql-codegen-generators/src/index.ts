import TypescriptSingleFile from './typescript-single-file/config';
import TypescriptMultiFile from './typescript-multi-file/config';
import QueryMultiple from './query-multiple/config';
import QuerySingle from './query-single/config';
import SchemaSingle from './schema-single/config';

export { TypescriptSingleFile, TypescriptMultiFile, QueryMultiple, QuerySingle, SchemaSingle };

export { GeneratorConfig, EInputType } from './types';
export { getGeneratorConfig, definitions } from './get-generator';
