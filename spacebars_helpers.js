(function() {
  'use strict';
  
  Template.registerHelper('_eq', function(a, b) {
    return a === b;
  });

  Template.registerHelper('_in', function(a /* varargs */) {
    var args = _.toArray(arguments).slice(1);
    return _.find(args, function(arg) {
      return a === arg;
    });
  });

  Template.registerHelper('_all', function(/* varargs */) {
    var args = _.toArray(arguments).slice(0, -1); // Get rid of kw arg
    return _.all(args);
  });

  Template.registerHelper('_and', function(/* varargs */) {
    var args = _.toArray(arguments).slice(0, -1); // Get rid of kw arg
    return _.all(args);
  });

  Template.registerHelper('_any', function(/* varargs */) {
    var args = _.toArray(arguments).slice(0, -1); // Get rid of kw arg
    return _.any(args);
  });

  Template.registerHelper('_or', function(/* varargs */) {
    var args = _.toArray(arguments).slice(0, -1); // Get rid of kw arg
    return _.any(args);
  });

  Template.registerHelper('_lt', function(a, b) {
    return a < b;
  });

  Template.registerHelper('_lte', function(a, b) {
    return a <= b;
  });

  Template.registerHelper('_gt', function(a, b) {
    return a > b;
  });

  Template.registerHelper('_gte', function(a, b) {
    return a >= b;
  });

})();