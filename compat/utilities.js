/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

module.exports = {
  'constant': require('./utilities/constant'),
  'createCallback': require('./functions/createCallback'),
  'escape': require('./utilities/escape'),
  'identity': require('./utilities/identity'),
  'match': require('./utilities/match'),
  'mixin': require('./utilities/mixin'),
  'noConflict': require('./utilities/noConflict'),
  'noop': require('./utilities/noop'),
  'now': require('./utilities/now'),
  'parseInt': require('./utilities/parseInt'),
  'property': require('./utilities/property'),
  'random': require('./utilities/random'),
  'result': require('./utilities/result'),
  'template': require('./utilities/template'),
  'templateSettings': require('./utilities/templateSettings'),
  'times': require('./utilities/times'),
  'unescape': require('./utilities/unescape'),
  'uniqueId': require('./utilities/uniqueId')
};
