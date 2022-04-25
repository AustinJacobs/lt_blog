import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_POSTS } from '../GraphQL/Queries';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { Card } from '../components/styles/Card.styled';
import { CardDetails } from '../components/styles/CardDetails.styled';
import { Loader } from '../components/styles/Loader.styled';
import Box from '../components/styles/Box';
import Heading from '../components/styles/Heading';
import Text from '../components/styles/Text';
import Grid from '../components/styles/Grid';

function ArticlesGrid() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <Loader>Loading...</Loader>;
  if (error) return `Error! ${error.message}`;

  return (
    <Grid width="100%" gridTemplateColumns='1fr 1fr 1fr' bg='white'>
      {data.allArticles.edges.map((article) => (
        <Card key={article.node._meta.id}>
          <Link to={article.node._meta.uid}>
            <img
              src={article.node.feature_image.url}
              alt={article.node.feature_image.alt}
            />
            <CardDetails>
              <Heading level={1} fontWeight='normal'>
                {article.node.title[0].text}
              </Heading>
              <Heading level={3}>
                Published on{' '}
                {format(new Date(article.node.published_at), 'MMM dd, yyyy')}
              </Heading>
              <Box>
                {article.node.body
                  .find((index) => index.type === 'inline_text')
                  ?.primary?.description?.map(({ text }, index) => {
                    if (index === 0) {
                      return (
                        <Text variant='p' mt='10px' mb='10px' key={index}>
                          {text.substring(0, 190)}...
                          <br />
                        </Text>
                      );
                    }
                    return '';
                  })}
              </Box>
            </CardDetails>
          </Link>
        </Card>
      ))}
    </Grid>
  );
}

export default ArticlesGrid;
