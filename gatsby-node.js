const path = require('path');

// Create slugs for files.
// Slug will used for blog page path.
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  switch (node.internal.type) {
    case `MarkdownRemark`:
      const fileNode = getNode(node.parent);
      const [basePath, name] = fileNode.relativePath.split('/');
      const slug = `/${basePath}/${name}/`;
      createNodeField({ node, name: `slug`, value: slug });
      break;
  }
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src'),
        pages: path.resolve(__dirname, 'src/pages'),
        components: path.resolve(__dirname, 'src/components'),
      },
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['source-map-loader'],
          enforce: 'pre',
        },
      ],
    },
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { deletePage, createPage } = actions;
  return new Promise(resolve => {
    // if the page component is the index page component
    // create a new page but with '/' as path
    if (page.componentPath === `${__dirname}/src/pages/index/index.tsx`) {
      deletePage(page);
      createPage({ ...page, path: '/' });
    }
    resolve();
  });
};
