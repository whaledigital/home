/* eslint-disable no-undef */
jest.mock('path');
const { createPages } = require('../gatsby-node');

describe('gatsby-node', () => {
  const actions = {};

  describe('createPages', () => {
    let graphql;

    beforeEach(() => {
      actions.createPage = jest.fn();
      graphql = jest.fn();
    });

    it('should throw an error on graphql error', () => {
      graphql.mockReturnValueOnce(
        Promise.reject(new Error('something wrong!'))
      );

      expect(createPages({ graphql, actions })).rejects.toMatchObject({
        message: 'something wrong!',
      });
    });
  });
});
