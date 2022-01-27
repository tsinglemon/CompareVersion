import {terser} from 'rollup-plugin-terser';

export default {
  input: 'src/main.js',
  output: {
    name: 'compare-version-plus',
    file: './dist/compare-version-plus.min.js',
    format: 'umd',
    plugins: [terser()]
  }
};