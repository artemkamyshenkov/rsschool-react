module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    [
      '@babel/preset-typescript',
      {
        runtime: 'automatic',
        targets: {
          node: 'current',
        },
        modules: 'commonjs',
      },
    ],
  ],
  plugins: ['@babel/plugin-transform-modules-commonjs'],
};
