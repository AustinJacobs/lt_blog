import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_POSTS } from '../GraphQL/Queries';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

function ArticlesGrid() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      {data.allArticles.edges.map((article) => (
        <div key={article.node._meta.id}>
          <Link to={article.node._meta.uid}>
            <img
              src={article.node.feature_image.url}
              alt={article.node.feature_image.alt}
            />
            <h1>{article.node.title[0].text}</h1>
            <h3>
              Published on{' '}
              {format(new Date(article.node.published_at), 'MMM dd, yyyy')}
            </h3>
            <div>
              {article.node.body
                .find((index) => index.type === 'inline_text')
                ?.primary?.description?.map(({ text }, index) => {
                  if (index === 0) {
                    return (
                      <p key={index}>
                        {text.substring(0, 190)}...
                        <br />
                      </p>
                    );
                  }
                  return '';
                })}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ArticlesGrid;
