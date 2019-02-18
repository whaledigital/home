const path = require('path');
const slash = require('slash');
const changeCase = require('change-case');

const locales = require('./src/constants/locales');

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
              node_locale
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
        const localizedPath = locales[service.node_locale].default
          ? service.slug
          : `${locales[service.node_locale].path}/${service.slug}`;

        createPage({
          path: localizedPath,
          component: slash(templates.service),
          context: {
            slug: service.slug,
            lang: service.node_locale,
          },
        });
      });

      resolve();
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  return new Promise(resolve => {
    deletePage(page);

    Object.keys(locales).map(lang => {
      const localizedPath = locales[lang].default
        ? page.path
        : locales[lang].path + page.path;

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          lang,
        },
      });
    });

    resolve();
  });
};
