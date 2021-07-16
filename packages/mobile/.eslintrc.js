module.exports = {
	extends: [
		'airbnb',
		'prettier',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:workspaces/recommended',
	],
	parser: 'babel-eslint',
	plugins: ['react-hooks'],
	env: {
		jest: true,
	},
	rules: {
		'no-use-before-define': 'off',
		'react/jsx-filename-extension': 'off',
		'react/prop-types': 'off',
		'import/prefer-default-export': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'import/extensions': 'off',
		'no-param-reassign': ['error', {props: false}],
		'no-undef': 'off',
	},
	settings: {
		'import/resolver': {
			'babel-plugin-root-import': {
				rootPathPrefix: '~',
				rootPathSuffix: 'src',
			},
		},
	},
	globals: {
		fetch: false,
	},
};