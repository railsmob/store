import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default [
  // CommonJS
  {
    input: '@railsmob/store.js',
    output: {
      file: 'lib/index.js',
      format: 'cjs',
      indent: false,
    },
    plugins: [babel()],
  },
  // ES
  {
    input: '@railsmob/store.js',
    output: {
      file: 'es/index.js',
      format: 'es',
      indent: false,
    },
    plugins: [babel()],
  },
  // UMD Dev
  {
    input: '@railsmob/store.js',
    output: {
      file: 'dist/index.js',
      format: 'umd',
      name: 'RailsmobEvents',
      indent: false,
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
    ],
  },
  // UMD Prod
  {
    input: '@railsmob/store.js',
    output: {
      file: 'dist/index.min.js',
      format: 'umd',
      name: 'RailsmobStore',
      indent: false,
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      terser(),
    ],
  },
];
