import { ESLintUtils } from '@typescript-eslint/utils';

export const noConstArray = ESLintUtils.RuleCreator.withoutDocs({
	meta: {
		messages: {
			'no-const-array': 'Cannot use "const" declared arrays',
			'no-const-array-methods': 'Can not use array methods in "const" declared arrays',
			'no-const-array-index-access': 'Cannot access array elements by index in "const" declared arrays'
		},
		schema: [],
		fixable: 'code',
		type: 'problem',
	},
	defaultOptions: [],
	create(context) {
		return {
			VariableDeclaration(node) {
				node.declarations.forEach((n) => {
					if (node.kind === 'const' && isArrayDeclaration(n)) {
						context.report({
							node,
							messageId: 'no-const-array',
						});
					}
				});
			},
			CallExpression(node) {
				const {callee} = node;
				if ( callee.type === 'MemberExpression' &&
					callee.object.type === 'Identifier' &&
					callee.property.type === 'Identifier' &&
					['concat', 'copyWithin', 'entries', 'every', 'fill', 'filter', 'find',
						'findIndex', 'flat', 'flatMap', 'forEach', 'includes', 'indexOf', 'join',
						'keys', 'lastIndexOf', 'map', 'pop', 'push', 'reduce', 'reduceRight',
						'reverse', 'shift', 'slice', 'some', 'sort', 'splice', 'toLocaleString',
						'toSource', 'toString', 'unshift', 'values']
						.includes(callee.property.name)) {
					context.report({
						node,
						messageId: 'no-const-array-methods'
					});
				}
			},
			MemberExpression(node) {
				const {object} = node;
				if (object.type === 'Identifier' && object.name === 'const') {
					context.report({
						node,
						messageId: 'no-const-array-index-access'
					});
				}
			}
		};
	},
});


function isArrayDeclaration(declaration: any) {
	return (
		declaration.init &&
		declaration.init.type === 'ArrayExpression'
	);
}