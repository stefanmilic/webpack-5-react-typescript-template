/**
 * Stylelint configuration
 */
module.exports = {
  /**
   * @see https://stylelint.io/user-guide/configure/#extends
   */
  extends: [
    /**
     * @see https://github.com/stylelint/stylelint-config-standard
     */
    'stylelint-config-standard',

    /**
     * @see https://github.com/stylelint-scss/stylelint-config-standard-scss
     */
    'stylelint-config-standard-scss',

    /**
     * @see https://github.com/prettier/stylelint-config-prettier
     */
    'stylelint-config-prettier',
    'stylelint-config-idiomatic-order',
  ],

  /**
   * @see https://stylelint.io/user-guide/configure/#plugins
   */
  plugins: [
    /**
     * @see https://github.com/stylelint-scss/stylelint-scss
     */
    'stylelint-scss',

    /**
     * @see https://github.com/prettier/stylelint-prettier
     */
    'stylelint-prettier',
  ],

  /**
   * @see https://stylelint.io/user-guide/configure/#ignorefiles
   */
  ignoreFiles: ['**/*.js', '**/*.jsx'],

  /**
   * @see https://stylelint.io/user-guide/rules/list
   */
  rules: {
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "comment-no-empty": true,
    "custom-property-no-missing-var-function": true,
    "declaration-block-no-duplicate-custom-properties": true,
    "declaration-block-no-duplicate-properties": [
      true,
      {
        "ignore": [
          "consecutive-duplicates-with-different-values"
        ]
      }
    ],
    "declaration-block-no-shorthand-property-overrides": true,
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-no-unknown": true,
    "keyframe-block-no-duplicate-selectors": true,
    "keyframe-declaration-no-important": true,
    "media-feature-name-no-unknown": true,
    "named-grid-areas-no-invalid": true,
    "no-descending-specificity": true,
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": true,
    "no-empty-source": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "no-invalid-position-at-import-rule": true,
    "no-irregular-whitespace": true,
    "property-no-unknown": true,
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-no-unknown": true,
    "selector-type-no-unknown": [
      true,
      {
        "ignore": [
          "custom-elements"
        ]
      }
    ],
    "string-no-newline": true,
    "unit-no-unknown": true,
    "alpha-value-notation": [
      "percentage",
      {
        "exceptProperties": [
          "opacity"
        ]
      }
    ],
    "at-rule-empty-line-before": [
      "always",
      {
        "except": [
          "blockless-after-same-name-blockless",
          "first-nested"
        ],
        "ignore": [
          "after-comment"
        ]
      }
    ],
    "at-rule-name-case": "lower",
    "at-rule-name-space-after": "always-single-line",
    "at-rule-no-vendor-prefix": true,
    "at-rule-semicolon-newline-after": "always",
    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always-multi-line",
    "block-closing-brace-space-before": "always-single-line",
    "block-opening-brace-newline-after": "always-multi-line",
    "block-opening-brace-space-after": "always-single-line",
    "block-opening-brace-space-before": "always",
    "color-function-notation": "modern",
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "comment-empty-line-before": [
      "always",
      {
        "except": [
          "first-nested"
        ],
        "ignore": [
          "stylelint-commands"
        ]
      }
    ],
    "comment-whitespace-inside": "always",
    "custom-property-empty-line-before": [
      "always",
      {
        "except": [
          "after-custom-property",
          "first-nested"
        ],
        "ignore": [
          "after-comment",
          "inside-single-line-block"
        ]
      }
    ],
    "custom-media-pattern": [
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
      {
        "message": "Expected custom media query name to be kebab-case"
      }
    ],
    "custom-property-pattern": [
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
      {
        "message": "Expected custom property name to be kebab-case"
      }
    ],
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-single-line-max-declarations": 1,
    "declaration-block-trailing-semicolon": "always",
    "declaration-block-no-redundant-longhand-properties": true,
    "declaration-colon-newline-after": "always-multi-line",
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "declaration-empty-line-before": [
      "always",
      {
        "except": [
          "after-declaration",
          "first-nested"
        ],
        "ignore": [
          "after-comment",
          "inside-single-line-block"
        ]
      }
    ],
    "font-family-name-quotes": "always-where-recommended",
    "function-comma-newline-after": "always-multi-line",
    "function-comma-space-after": "always-single-line",
    "function-comma-space-before": "never",
    "function-max-empty-lines": 0,
    "function-name-case": "lower",
    "function-parentheses-newline-inside": "always-multi-line",
    "function-parentheses-space-inside": "never-single-line",
    "function-url-quotes": "always",
    "function-whitespace-after": "always",
    "hue-degree-notation": "angle",
    "import-notation": "string",
    "indentation": 2,
    "keyframes-name-pattern": [
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
      {
        "message": "Expected keyframe name to be kebab-case"
      }
    ],
    "length-zero-no-unit": true,
    "max-empty-lines": 1,
    "max-line-length": 120,
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-case": "lower",
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "media-query-list-comma-newline-after": "always-multi-line",
    "media-query-list-comma-space-after": "always-single-line",
    "media-query-list-comma-space-before": "never",
    "no-empty-first-line": true,
    "no-eol-whitespace": true,
    "no-missing-end-of-source-newline": true,
    "number-leading-zero": "always",
    "number-max-precision": 4,
    "number-no-trailing-zeros": true,
    "property-case": "lower",
    "property-no-vendor-prefix": true,
    "rule-empty-line-before": [
      "always-multi-line",
      {
        "except": [
          "first-nested"
        ],
        "ignore": [
          "after-comment"
        ]
      }
    ],
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-quotes": "always",
    "selector-class-pattern": [
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
      {
        "message": "Expected class selector to be kebab-case"
      }
    ],
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-descendant-combinator-no-non-space": true,
    "selector-id-pattern": [
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
      {
        "message": "Expected id selector to be kebab-case"
      }
    ],
    "selector-list-comma-newline-after": "always",
    "selector-list-comma-space-before": "never",
    "selector-max-empty-lines": 0,
    "selector-no-vendor-prefix": true,
    "selector-not-notation": "complex",
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "double",
    "selector-type-case": "lower",
    "shorthand-property-no-redundant-values": true,
    "unit-case": "lower",
    "value-keyword-case": "lower",
    "value-list-comma-newline-after": "always-multi-line",
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never",
    "value-list-max-empty-lines": 0,
    "value-no-vendor-prefix": true,
    // 'alpha-value-notation': 'number', // https://stylelint.io/user-guide/rules/list/alpha-value-notation/
    // 'color-function-notation': 'legacy', // https://stylelint.io/user-guide/rules/list/color-function-notation/
    // 'no-empty-source': null, // https://stylelint.io/user-guide/rules/list/no-empty-source
    // 'shorthand-property-no-redundant-values': null, // https://stylelint.io/user-guide/rules/list/shorthand-property-no-redundant-values/
    'string-quotes': 'single', // https://stylelint.io/user-guide/rules/list/string-quotes/
    'scss/comment-no-empty': null, // https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/comment-no-empty
    'scss/double-slash-comment-empty-line-before': null, // https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/double-slash-comment-empty-line-before
    'prettier/prettier': null, // https://github.com/prettier/stylelint-prettier#installation
    // 'at-rule-empty-line-before': [
    //   // https://stylelint.io/user-guide/rules/list/at-rule-empty-line-before/
    //   'always',
    //   {
    //     except: ['first-nested', 'blockless-after-same-name-blockless'],
    //     ignore: ['after-comment'],
    //     ignoreAtRules: ['else'],
    //   },
    // ],
    'at-rule-no-unknown': [
      // https://stylelint.io/user-guide/rules/list/at-rule-no-unknown/
      true,
      {
        ignoreAtRules: [
          'extend',
          'at-root',
          'debug',
          'warn',
          'error',
          'if',
          'else',
          'for',
          'each',
          'while',
          'mixin',
          'include',
          'content',
          'return',
          'function',
          'tailwind',
          'apply',
          'responsive',
          'variants',
          'screen',
          'use',
        ],
      },
    ],
    // 'at-rule-no-vendor-prefix': null,
    'declaration-no-important': true,
    'max-nesting-depth': 3,
    // 'no-duplicate-selectors': true,
    // 'property-no-vendor-prefix': null,
    'scss/at-rule-no-unknown': true,
    'selector-max-id': 0,
    'selector-no-qualifying-type': null,
    // 'selector-no-vendor-prefix': null,
    // 'value-no-vendor-prefix': null,
  },
};
