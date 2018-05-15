import { GeneratorConfig } from './types';
export declare const definitions: {
  ts: GeneratorConfig;
  typescript: GeneratorConfig;
  'ts-single': GeneratorConfig;
  'typescript-single': GeneratorConfig;
  'ts-multiple': GeneratorConfig;
  'typescript-multiple': GeneratorConfig;
  'query-multiple': GeneratorConfig;
  'query-single': GeneratorConfig;
  'schema-single': GeneratorConfig;
};
export declare function getGeneratorConfig(name: string): GeneratorConfig;
