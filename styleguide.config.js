const path = require('path');

const { name, version } = require('./package');

module.exports = {
  components: 'src/**/[A-Z]*.jsx',
  getComponentPathLine(componentPath) {
    const componentName = path.basename(componentPath, '.jsx');
    const componentDir = path.basename(path.dirname(componentPath));

    return `import ${componentName} from '${name}/${componentDir}';`;
  },
  sections: [
    {
      name: 'Label',
      content: 'src/Label/Section.md',
      components: 'src/Label/**/[A-Z]*.jsx',
    },
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src', 'ThemeWrapper'),
  },
  title: 'Publishmonkey Style Guide',
  usageMode: 'expand',
  version,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
};
