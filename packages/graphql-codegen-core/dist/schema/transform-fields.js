(function(factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    var v = factory(require, exports);
    if (v !== undefined) module.exports = v;
  } else if (typeof define === 'function' && define.amd) {
    define([
      'require',
      'exports',
      'graphql',
      '../utils/object-map-to-array',
      './resolve-type',
      './resolve-arguments',
      './resolve-type-indicators',
      '../debugging',
      '../utils/get-directives'
    ], factory);
  }
})(function(require, exports) {
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  const graphql_1 = require('graphql');
  const object_map_to_array_1 = require('../utils/object-map-to-array');
  const resolve_type_1 = require('./resolve-type');
  const resolve_arguments_1 = require('./resolve-arguments');
  const resolve_type_indicators_1 = require('./resolve-type-indicators');
  const debugging_1 = require('../debugging');
  const get_directives_1 = require('../utils/get-directives');
  function resolveFields(schema, rawFields) {
    const fieldsArray = object_map_to_array_1.objectMapToArray(rawFields);
    return fieldsArray.map(item => {
      const type = resolve_type_1.resolveType(item.value.type);
      const resolvedArguments = resolve_arguments_1.resolveArguments(schema, item.value.args || []);
      const namedType = graphql_1.getNamedType(item.value.type);
      const indicators = resolve_type_indicators_1.resolveTypeIndicators(namedType);
      const directives = get_directives_1.getDirectives(schema, item.value);
      debugging_1.debugLog(
        `[resolveFields] transformed field ${item.value.name} of type ${type}, resolved type is: `,
        type
      );
      return {
        name: item.value.name,
        description: item.value.description || '',
        arguments: resolvedArguments,
        type: type.name,
        isArray: type.isArray,
        isRequired: type.isRequired,
        hasArguments: resolvedArguments.length > 0,
        isEnum: indicators.isEnum,
        isScalar: indicators.isScalar,
        isInterface: indicators.isInterface,
        isUnion: indicators.isUnion,
        isInputType: indicators.isInputType,
        isType: indicators.isType,
        directives,
        usesDirectives: Object.keys(directives).length > 0
      };
    });
  }
  exports.resolveFields = resolveFields;
});
//# sourceMappingURL=transform-fields.js.map