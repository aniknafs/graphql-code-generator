(function(factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    var v = factory(require, exports);
    if (v !== undefined) module.exports = v;
  } else if (typeof define === 'function' && define.amd) {
    define(['require', 'exports', '../debugging', '../utils/get-directives'], factory);
  }
})(function(require, exports) {
  'use strict';
  Object.defineProperty(exports, '__esModule', { value: true });
  const debugging_1 = require('../debugging');
  const get_directives_1 = require('../utils/get-directives');
  function transformScalar(schema, scalar) {
    debugging_1.debugLog(`[transformInterface] transformed custom scalar ${scalar.name}`);
    const directives = get_directives_1.getDirectives(schema, scalar);
    return {
      name: scalar.name,
      description: scalar.description || '',
      directives,
      usesDirectives: Object.keys(directives).length > 0
    };
  }
  exports.transformScalar = transformScalar;
});
//# sourceMappingURL=transform-scalar.js.map
