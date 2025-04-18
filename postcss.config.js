module.exports = {
  plugins: [
    'autoprefixer',
    process.env.NODE_ENV === 'production' && [
      'cssnano',
      {
        preset: 'default',
      },
    ],
  ].filter(Boolean),
}; 