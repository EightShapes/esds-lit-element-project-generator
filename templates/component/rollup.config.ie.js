// This rollup config is used to bundle and compile a version of the component for IE11
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/[component-name]-entry.js',
  output: {
    file: 'dist/[component-name]-legacy.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    babel({
      presets: [
        ["@babel/env", {"modules": false}] // Putting this in a separate .babelrc file doesn't seem to work
      ],
    })
  ]
};
