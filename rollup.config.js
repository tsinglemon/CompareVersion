import {terser} from 'rollup-plugin-terser';

export default {
  input: 'src/main.js',
  output: {
    name: 'compareVersion',
    file: './dist/compareVersion.js',
    format: 'umd',
    plugins: [terser()]
  }
};