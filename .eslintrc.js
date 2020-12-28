'use strict';


const WARN = 1;
const ERROR = 2;


module.exports = {
    root: true,
    extends: [
        'eslint:recommended'
    ],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            impliedStrict: true
        }
    },
    env: {
        browser: true,
        node: true
    },
    rules: {
        'no-unsafe-optional-chaining': ERROR,
        'require-atomic-updates': ERROR,
        'array-callback-return': ERROR,
        'block-scoped-var': ERROR,
        'class-methods-use-this': ERROR,
        curly: ERROR,
        'default-case-last': ERROR,
        'default-param-last': ERROR,
        'dot-location': [
            ERROR,
            'object'
        ],
        'dot-notation': ERROR,
        'eqeqeq': [
            ERROR,
            'smart'
        ],
        'grouped-accessor-pairs': ERROR,
        'guard-for-in': ERROR,
        'no-caller': ERROR,
        'no-constructor-return': ERROR,
        'no-div-regex': ERROR,
        'no-eval': ERROR,
        'no-extend-native': ERROR,
        'no-extra-bind': ERROR,
        'no-extra-label': ERROR,
        'no-implied-eval': ERROR,
        'no-invalid-this': ERROR,
        'no-iterator': ERROR,
        'no-labels': ERROR,
        'no-lone-blocks': ERROR,
        'no-loop-func': ERROR,
        'no-multi-spaces': ERROR,
        'no-new': ERROR,
        'no-new-func': ERROR,
        'no-new-wrappers': ERROR,
        'no-octal-escape': ERROR,
        'no-proto': ERROR,
        'no-return-assign': ERROR,
        'no-return-await': ERROR,
        'no-script-url': ERROR,
        'no-unmodified-loop-condition': ERROR,
        'no-unused-expressions': ERROR,
        'no-useless-call': ERROR,
        'no-void': ERROR,
        'radix': ERROR,
        'require-await': ERROR,
        'vars-on-top': ERROR,
        'wrap-iife': ERROR,
        'no-label-var': ERROR,
        'no-shadow': ERROR,
        'no-use-before-define': [
            ERROR,
            'nofunc'
        ],
        'camelcase': ERROR,
        'comma-spacing': ERROR,
        'consistent-this': ERROR,
        'eol-last': ERROR,
        'func-call-spacing': ERROR,
        'linebreak-style': ERROR,
        'max-len': WARN,
        'new-parens': ERROR,
        'no-array-constructor': ERROR,
        'no-multi-assign': ERROR,
        'no-multiple-empty-lines': ERROR,
        'no-tabs': ERROR,
        'no-trailing-spaces': ERROR,
        'no-whitespace-before-property': ERROR,
        'semi': ERROR,
        'generator-star-spacing': [
            ERROR,
            'after'
        ],
        'no-confusing-arrow': ERROR,
        'no-duplicate-imports': ERROR,
        'no-useless-computed-key': ERROR,
        'no-useless-rename': ERROR,
        'no-var': ERROR,
        'prefer-arrow-callback': ERROR,
        'prefer-const': ERROR,
        'prefer-rest-params': ERROR
    }
};
