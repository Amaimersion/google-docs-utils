import {terser} from 'rollup-plugin-terser';
import {joinText} from './src/common/utils';


const BANNER = joinText(
    '\n',
    '/**',
    '* @license MIT',
    '* @see https://github.com/Amaimersion/google-docs-utils',
    '*/'
);
const GLOBAL_NAME = 'GoogleDocsUtils';


export default [
    {
        input: './src/index.js',
        output: [
            {
                file: './dist/iife/index.js',
                format: 'iife',
                name: GLOBAL_NAME,
                sourcemap: 'inline'
            },
            {
                file: './dist/cjs/index.js',
                format: 'cjs'
            }
        ]
    },
    {
        input: './src/index.js',
        output: [
            {
                file: './dist/iife/index.min.js',
                format: 'iife',
                name: GLOBAL_NAME,
                banner: BANNER,
                plugins: [
                    terser()
                ]
            },
            {
                file: './dist/cjs/index.min.js',
                format: 'cjs',
                banner: BANNER,
                plugins: [
                    terser()
                ]
            }
        ],
        watch: false
    }
];
