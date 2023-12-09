# No Const Array plugin
## What's doing those plugin?
### Restricts using arrays which will be declared as constant
> **Caution**
> 123
### Usage
```javascript
module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'overrides': [
		{
			plugins: ['no-const-array'],
			rules: {
				'no-const-array/no-const-array': 'error'
			},
			'env': {
				'node': true
			},
			'files': [
				'.eslintrc.{js,cjs}'
			],
			'parserOptions': {
				'sourceType': 'script'
			}
		}
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint',
		'no-const-array'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'no-const-array/no-const-array': 'error' // rule
	}
};

```

# This rule writed only for fun, but if you want to make update, open repository link
