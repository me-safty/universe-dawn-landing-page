module.exports = {
	extends: [
		".eslintrc.yml",
		".eslintrc.typescript.yml",
		".eslintrc.react.yml",
	],
	rules: {
		"import/no-absolute-path": 2,
		"no-restricted-imports": [
			2,
			{
				paths: [
					"providers",
					"src",
					"admin-portal",
					"components",
					"degenia",
					"hocs",
					"hooks",
					"services",
					"styles",
					"tools",
					"typings",
					"universe-dawn",
					"util",
				],
				patterns: [
					"providers/*",
					"src/*",
					"admin-portal/*",
					"components/*",
					"degenia/*",
					"hocs/*",
					"hooks/*",
					"services/*",
					"styles/*",
					"tools/*",
					"typings/*",
					"universe-dawn/*",
					"util/*",
				],
			},
		],
	},
	ignorePatterns: [
		".eslintrc.js",
		"next-env.d.ts",
		"babel.config.js",
		"next-i18next.config.js",
		"next.config.js",
		"*.stories.tsx",
	],
	parserOptions: {
		tsconfigRootDir: __dirname,
	},
	overrides: [
		{
			files: ["*.tsx"],
			rules: {
				"no-undef": "off",
			},
		},
	],
}