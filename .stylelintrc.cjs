module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-scss'],
  rules: {
    // Limite le nesting à 2 niveaux
    'max-nesting-depth': 2,

    // Interdit les !important
    'declaration-no-important': true,

    // Enforce BEM naming convention
    'selector-class-pattern': [
      '^[a-z0-9]+(__[a-z0-9]+)?(--[a-z0-9]+)?$',
      {
        message: 'Classe doit suivre le pattern BEM (block__element--modifier)',
      },
    ],
  },
};
