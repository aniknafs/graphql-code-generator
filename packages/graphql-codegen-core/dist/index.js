(function(factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    var v = factory(require, exports);
    if (v !== undefined) module.exports = v;
  } else if (typeof define === 'function' && define.amd) {
    define([
      'require',
      'exports',
      'graphql-tag',
      './schema/schema-to-template-context',
      './operations/transform-document',
      './utils/introspection-to-schema',
      './types',
      './debugging',
      'graphql',
      'graphql-tools'
    ], factory);
  }
})(function(require, exports) {
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  const graphql_tag_1 = require('graphql-tag');
  exports.gql = graphql_tag_1.default;
  var schema_to_template_context_1 = require('./schema/schema-to-template-context');
  exports.schemaToTemplateContext = schema_to_template_context_1.schemaToTemplateContext;
  var transform_document_1 = require('./operations/transform-document');
  exports.transformDocument = transform_document_1.transformDocument;
  var introspection_to_schema_1 = require('./utils/introspection-to-schema');
  exports.validateIntrospection = introspection_to_schema_1.validateIntrospection;
  exports.introspectionToGraphQLSchema = introspection_to_schema_1.introspectionToGraphQLSchema;
  var types_1 = require('./types');
  exports.isFieldNode = types_1.isFieldNode;
  exports.isFragmentSpreadNode = types_1.isFragmentSpreadNode;
  exports.isInlineFragmentNode = types_1.isInlineFragmentNode;
  var debugging_1 = require('./debugging');
  exports.debugLog = debugging_1.debugLog;
  var graphql_1 = require('graphql');
  exports.Source = graphql_1.Source;
  exports.parse = graphql_1.parse;
  exports.concatAST = graphql_1.concatAST;
  exports.graphql = graphql_1.graphql;
  exports.introspectionQuery = graphql_1.introspectionQuery;
  exports.GraphQLSchema = graphql_1.GraphQLSchema;
  var graphql_tools_1 = require('graphql-tools');
  exports.makeExecutableSchema = graphql_tools_1.makeExecutableSchema;
});
//# sourceMappingURL=index.js.map
