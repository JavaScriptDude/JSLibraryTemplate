# JSLibraryTemplate
Template For Creating JavaScript Libraries

When generating your own JavaScript libraries, it is very important to ensure that:
1. Your library does not clobber / overwrite namespaces from other libraries
2. Other libraries dont clobber / overwrite namespaces from your libraries
3. Exported libraries are restricted to a subset of your code allowing you to have private code and public APIs

I've generated this template to work with pre ES6 browsers and it's 'this' variable references to a anonymous object created in the library factory thus allowing you to automate adding to your libraries private namespace.

This is base on deconstructing how jQuery and Underscore implements their libraries with modifications to allow for the anonymous object for your libraries definition.

See the JS in the code for the logic.
Note: The code is flagged with `Start Boilerplate` and `end BP` to signify code that does not require changing
