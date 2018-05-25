(function(factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    var v = factory(require, exports);
    if (v !== undefined) module.exports = v;
  } else if (typeof define === 'function' && define.amd) {
    define(['require', 'exports', 'graphql'], factory);
  }
})(function(require, exports) {
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  const graphql_1 = require('graphql');
  function resolveTypeIndicators(namedType) {
    const isEnum = namedType['getValues'] !== undefined;
    return {
      isType: namedType instanceof graphql_1.GraphQLObjectType,
      isScalar: namedType instanceof graphql_1.GraphQLScalarType,
      isInterface: namedType instanceof graphql_1.GraphQLInterfaceType,
      isUnion: namedType instanceof graphql_1.GraphQLUnionType,
      isInputType: namedType instanceof graphql_1.GraphQLInputObjectType,
      isEnum: namedType instanceof graphql_1.GraphQLEnumType
    };
  }
  exports.resolveTypeIndicators = resolveTypeIndicators;
});
//# sourceMappingURL=resolve-type-indicators.js.map