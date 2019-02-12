const path = require('path');
const slash = require('slash');
const changeCase = require('change-case');

// Create slugs for files.
// Slug will used for blog page path.
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  switch (node.internal.type) {
    case `MarkdownRemark`:
      const fileNode = getNode(node.parent);
      if (fileNode.relativePath) {
        const [basePath, name] = fileNode.relativePath.split('/');
        const slug = `/${basePath}/${name}/`;
        createNodeField({ node, name: `slug`, value: slug });
      }

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

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const templates = ['service'].reduce(
      (mem, templateName) => ({
        ...mem,
        [templateName]: path.resolve(
          `src/templates/${changeCase.snakeCase(templateName)}.tsx`
        ),
      }),
      {}
    );

    graphql(`
      {
        services: allContentfulService {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        return reject(new Error(result.errors));
      }

      const services = result.data.services.edges.map(p => p.node);

      // Create services pages
      services.forEach(service => {
        createPage({
          path: service.slug,
          component: slash(templates.service),
          context: {
            slug: service.slug,
          },
        });
      });

      resolve();
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { deletePage, createPage } = actions;
  return new Promise(resolve => {
    // If the page component is the index page component create a new page but with '/' as path
    if (page.componentPath === `${__dirname}/src/pages/index/index.tsx`) {
      deletePage(page);
      createPage({ ...page, path: '/' });
    }

    resolve();
  });
};
