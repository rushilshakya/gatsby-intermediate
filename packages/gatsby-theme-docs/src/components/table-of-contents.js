/** @jsx jsx */

import { jsx } from 'theme-ui';
import { Link, useStaticQuery, graphql } from 'gatsby';

const TableOfContents = () => {
  const data = useStaticQuery(graphql`
    query {
      allDocsPage {
        nodes {
          id
          title
          path
        }
      }
    }
  `);

  const pages = data.allDocsPage.nodes;

  return (
    <div>
      <h2>Explore the Docs</h2>
      <ul>
        {pages.map(page => (
          <li key={page.id}>
            <Link
              to={page.path}
              sx={{
                '&.active': {
                  fontStyle: 'italic',
                  textDecoration: 'none',
                  '::after': { content: '"(currently viewing)"' },
                },
              }}
              activeClassName="active"
            >
              {page.title}
            </Link>{' '}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
