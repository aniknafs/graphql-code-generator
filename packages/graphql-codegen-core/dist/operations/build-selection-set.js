(function(factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    var v = factory(require, exports);
    if (v !== undefined) module.exports = v;
  } else if (typeof define === 'function' && define.amd) {
    define([
      'require',
      'exports',
      '../types',
      'graphql',
      '../utils/get-field-def',
      '../schema/resolve-type',
      '../debugging',
      '../schema/resolve-type-indicators'
    ], factory);
  }
})(function(require, exports) {
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  const types_1 = require('../types');
  const graphql_1 = require('graphql');
  const get_field_def_1 = require('../utils/get-field-def');
  const resolve_type_1 = require('../schema/resolve-type');
  const debugging_1 = require('../debugging');
  const resolve_type_indicators_1 = require('../schema/resolve-type-indicators');
  function separateSelectionSet(selectionSet) {
    const fields = selectionSet.filter(n => types_1.isFieldNode(n));
    const fragmentsSpread = selectionSet.filter(n => types_1.isFragmentSpreadNode(n));
    const inlineFragments = selectionSet.filter(n => types_1.isInlineFragmentNode(n));
    return {
      fragmentsSpread,
      fields,
      inlineFragments,
      hasFragmentsSpread: fragmentsSpread.length > 0,
      hasFields: fields.length > 0,
      hasInlineFragments: inlineFragments.length > 0
    };
  }
  exports.separateSelectionSet = separateSelectionSet;
  function buildSelectionSet(schema, rootObject, node) {
    return (node && node.selections ? node.selections : [])
      .map(selectionNode => {
        if (selectionNode.kind === graphql_1.Kind.FIELD) {
          const fieldNode = selectionNode;
          const name = fieldNode.alias && fieldNode.alias.value ? fieldNode.alias.value : fieldNode.name.value;
          debugging_1.debugLog(`[buildSelectionSet] transforming FIELD with name ${name}`);
          const field = get_field_def_1.getFieldDef(rootObject, fieldNode);
          if (!field) {
            debugging_1.debugLog(`[buildSelectionSet] Ignoring field because of null result from getFieldDef...`);
            return null;
          }
          const resolvedType = resolve_type_1.resolveType(field.type);
          const childSelectionSet = buildSelectionSet(
            schema,
            graphql_1.getNamedType(field.type),
            fieldNode.selectionSet
          );
          const namedType = graphql_1.getNamedType(field.type);
          const indicators = resolve_type_indicators_1.resolveTypeIndicators(namedType);
          return Object.assign(
            {
              isField: true,
              isFragmentSpread: false,
              isInlineFragment: false,
              isLeaf: childSelectionSet.length === 0,
              name,
              selectionSet: childSelectionSet
            },
            separateSelectionSet(childSelectionSet),
            {
              type: resolvedType.name,
              isRequired: resolvedType.isRequired,
              isArray: resolvedType.isArray,
              isEnum: indicators.isEnum,
              isScalar: indicators.isScalar,
              isInterface: indicators.isInterface,
              isUnion: indicators.isUnion,
              isInputType: indicators.isInputType,
              isType: indicators.isType
            }
          );
        } else if (selectionNode.kind === graphql_1.Kind.FRAGMENT_SPREAD) {
          const fieldNode = selectionNode;
          debugging_1.debugLog(`[buildSelectionSet] transforming FRAGMENT_SPREAD with name ${fieldNode.name.value}...`);
          return {
            isField: false,
            isFragmentSpread: true,
            isInlineFragment: false,
            isLeaf: true,
            fragmentName: fieldNode.name.value
          };
        } else if (selectionNode.kind === graphql_1.Kind.INLINE_FRAGMENT) {
          debugging_1.debugLog(`[buildSelectionSet] transforming INLINE_FRAGMENT...`);
          const fieldNode = selectionNode;
          const nextRoot = graphql_1.typeFromAST(schema, fieldNode.typeCondition);
          const childSelectionSet = buildSelectionSet(schema, nextRoot, fieldNode.selectionSet);
          return Object.assign(
            {
              isField: false,
              isFragmentSpread: false,
              isInlineFragment: true,
              isLeaf: childSelectionSet.length === 0,
              selectionSet: childSelectionSet
            },
            separateSelectionSet(childSelectionSet),
            { onType: fieldNode.typeCondition.name.value }
          );
        } else {
          throw new Error(`Unexpected GraphQL type: ${selectionNode.kind}!`);
        }
      })
      .filter(item => item); // filter to remove null types
  }
  exports.buildSelectionSet = buildSelectionSet;
});
//# sourceMappingURL=build-selection-set.js.map
