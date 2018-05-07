import * as index from './template.handlebars';
import * as type from './type.handlebars';
import * as schema from './schema.handlebars';
import { EInputType, GeneratorConfig } from '../types';

const config: GeneratorConfig = {
  inputType: EInputType.SINGLE_FILE,
  templates: {
    index,
    type,
    schema
  },
  flattenTypes: true,
  primitives: {
    String: 'string',
    Int: 'number',
    Float: 'number',
    Boolean: 'boolean',
    ID: 'string'
  },
  outFile: 'schema.interface.ts'
};

export default config;
