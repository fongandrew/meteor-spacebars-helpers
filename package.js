Package.describe({
  name: 'fongandrew:spacebars-helpers',
  summary: "Additional helper functions for Spacebars",
  version: '0.1.0',
  git: '' // TODO
});

Package.onUse(function(api) {
  'use strict';

  api.versionsFrom('METEOR@1.1.0.2');
  api.use('spacebars', ['client']);
  api.use('templating', ['client']);
  api.use('underscore', ['client']);
  api.addFiles('spacebars_helpers.js', ['client']);
});

// TODO - testing