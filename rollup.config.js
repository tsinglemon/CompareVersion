import {terser} from 'rollup-plugin-terser';

export default {
  input: 'src/main.js',
  output: {
    name: 'compareVersion',
    file: './dist/compare-version-plus.min.js',
    format: 'umd',
    // plugins: [terser()]
  }
};