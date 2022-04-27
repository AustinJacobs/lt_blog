import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_POSTS } from '../GraphQL/Queries';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import Box from '../components/styles/Box';
import Heading from '../components/styles/Heading';
import Text from '../components/styles/Text';
import Grid from '../components/styles/Grid';
import styled from 'styled-components';
import {
  compose,
  color,
  space,
  border,
  typography,
  layout,
  grid,
} from 'styled-system';
import logo from '../images/lti-logo.png';

const Card = styled.div`
  ${compose(color, space, border, typography, layout, grid)}
  justify-self: center;
  padding: 1em 1em 0 1em;
  cursor: pointer;

  img {
    width: 100%;
    max-width: 100%;
    border-radius: 5px 5px 0 0;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows[4]};
    transform: scale(1.002);
    transition: 0.5s;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
  }
`;

const Loader = styled.div`
  ${compose(color, space, border, typography, layout, grid)}
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-items: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
`;

const LogoImage = styled.img`
  ${compose(color, space, border, typography, layout, grid)}
  max-width: 50%;
  align-self: center;
  justify-self: center;
`;


function ArticlesGrid() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return (
    <Loader gridTemplateColumns='1fr' fontSize={6} bg='red.600'>
      Loading...
    </Loader>
  );
  if (error) return `Error! ${error.message}`;

  return (
    <Grid width='100%' bg='white'>
      <LogoImage src={logo} alt='logo' />
      {data.allArticles.edges.map((article) => (
        <Card
          width={8.75}
          bg='white.50'
          borderWidth={1}
          borderStyle='solid'
          borderColor='blue.100'
          borderRadius={3}
          my={4}
          key={article.node._meta.id}>
          <Link to={article.node._meta.uid}>
            <img
              src={article.node.feature_image.url}
              alt={article.node.feature_image.alt}
            />
            <Heading
              as='h1'
              fontWeight='normal'
              fontSize={['md', null, null, 'lg', null]}
              m='0'>
              {article.node.title[0].text}
            </Heading>
            <Heading
              as='h3'
              m='0'
              fontWeight='normal'
              fontSize={['sm', null, null, 'md', null]}>
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
          </Link>
        </Card>
      ))}
    </Grid>
  );
}

export default ArticlesGrid;
