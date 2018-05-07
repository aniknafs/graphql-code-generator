import * as index from './template.handlebars';
import * as type from './type.handlebars';
import * as documents from './documents.handlebars';
import * as selectionSet from './selection-set.handlebars';
import * as fragments from './fragments.handlebars';
import { EInputType, GeneratorConfig } from '../types';

const config: GeneratorConfig = {
  inputType: EInputType.SINGLE_FILE,
  templates: {
    index,
    type,
    documents,
    selectionSet,
    fragments
  },
  flattenTypes: true,
  primitives: {
    String: 'string',
    Int: 'number',
    Float: 'number',
    Boolean: 'boolean',
    ID: 'string'
  },
  outFile: 'interfaces.ts'
};

export default config;
