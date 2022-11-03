
// Global Library definition
var $$LIBDEF$$ = { ns: 'MySampleLib', library: 'my_sample_library', version: '0.1.0'}; (function (global, factory) {
  // Boilerplate start
    var _LD=$$LIBDEF$$, _fscope = {factory: factory, __ns__: _LD.ns, __library__: _LD.library, __version__: _LD.version}
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = _fscope.factory(global) :
    typeof define === 'function' && define.amd ? define(_LD.library, _fscope.factory) :
    (global = global || self, (function () {
      var _ns = _LD.ns, _lib = _LD.library;
  // BP end
      // Assert dependencies
      if ( typeof qlib_base$ === 'undefined' || typeof qlib_base$.LIBRARY === 'undefined') throw new Error("qlib_base is not loaded. Cannot load " + _lib)
      // Block duplicate loads (you could also check global[_ns])
      if (global.__sample_lib_loaded__) {console.log(_lib + " already loaded. Blocking reload.");return}
  // BP start
      var current = global[_ns];var exports = global[_ns] = _fscope.factory(global);
      exports.noConflict = function () {  global[_ns] = current; return exports; };
    }()));
  }(this, (function (global) { var _LD=$$LIBDEF$$, _exports = {__proto__: null, NS: _LD.ns, LIBRARY: _LD.library, VERSION: _LD.version};
  // BP end
    global.__sample_lib_loaded__ = true
    q$.called(arguments)

    // Declare all your functions, constants, classes here
    // Export items with: _export['<key>'] = <obj> 

    // Internal Library definition
    // Referenced via MySampleLib.InterLib

    var $$LIBDEF_INT$$ = { ns: 'InterLib', library: 'internal_lib', version: '0.1.0'}; (function (global, factory) {
    // Boilerplate start
        var _LD=$$LIBDEF_INT$$, _fscope = {factory: factory, __ns__: _LD.ns, __library__: _LD.library, __version__: _LD.version}
        typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = _fscope.factory(global) :
        typeof define === 'function' && define.amd ? define(_LD.library, _fscope.factory) :
        (global = global || self, (function () {
            var _ns = _LD.ns, _lib = _LD.library;
    // BP end
            // Assert dependencies?
            // Block duplicate loads
            if (global[_ns]) {console.log(_lib + " already loaded. Blocking reload.");return}
    // BP Start
            var current = global[_ns];var exports = global[_ns] = _fscope.factory(global);
            exports.noConflict = function () { global[_ns] = current; return exports; };
        }()));
    }(this, (function (global) {var _LD=$$LIBDEF_INT$$, _exports = {__proto__: null, NS: _LD.ns, LIBRARY: _LD.library, VERSION: _LD.version};
    // BP end

        var InterLib = _exports // create local ns for internal reference

        // Declare all your functions, constants, classes here
        // Export items with: _export['<key>'] = <obj> 

        // End of module
        return _exports

    }))); var INTERNAL = _exports["INTERNAL"] = this.INTERNAL;

    // End of module
    return _exports

}))); try {delete this['$$LIBDEF$$']}catch(x){}