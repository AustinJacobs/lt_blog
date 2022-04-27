import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_POSTS } from '../GraphQL/Queries';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import Box from '../components/styles/Box';
import Heading from '../components/styles/Heading';
import Text from '../components/styles/Text';
import Grid from '../components/styles/Grid';
import Flex from '../components/styles/Flex';
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
import { motion } from 'framer-motion';
import Ring from 'react-cssfx-loading/lib/Ring';

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

const VerticalLine = styled.div`
  ${compose(color, space, border, typography, layout, grid)}
`;

const LogoImage = styled.img`
  ${compose(color, space, border, typography, layout, grid)}
  max-width: 75px;
  justify-self: center;
`;

function ArticlesGrid() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading)
    return (
      <Flex justifyContent='center' mt='50vh'>
        <Ring color='#B71A04' width='80px' height='80px' />
      </Flex>
    );
  if (error) return `Error! ${error.message}`;

  return (
    <React.Fragment>
      <Flex
        mt={5}
        alignItems='center'
        justifyContent='center'
        flexDirection='row'>
        <a href='/'>
          <LogoImage
            src={logo}
            alt='logo'
            gridRow='1/2'
            gridColumn='1'
            mr={4}
          />
        </a>
        <VerticalLine
          gridRow='1'
          gridColumn='2/3'
          borderLeft='2px solid'
          borderColor='black'
          height='50px'
        />
        <Text fontSize={4.25} ml={4} gridRow='1' gridColumn='3/4' variant='p'>
          Leisure Time Inc.
        </Text>
      </Flex>
      <Grid
        gridTemplateColumns='1fr 1fr 1fr'
        width='100%'
        bg='white'
        gridGap={5}
        px={['1em', null, null, '5em', null]}
        py={5}>
        {data.allArticles.edges.map((article) => (
          <motion.div
            whileHover={{ y: -3 }}
            whileTap={{ y: -3 }}
            style={{ background: 'transparent', border: 'none' }}
            key={article.node._meta.id}>
            <Card
              width='100%'
              height='100%'
              bg='white'
              borderWidth={1}
              borderStyle='solid'
              borderColor='blue.100'
              borderRadius={3}>
              <Link to={article.node._meta.uid}>
                <img
                  src={article.node.feature_image.url}
                  alt={article.node.feature_image.alt}
                />
                <Heading
                  as='h1'
                  fontWeight='normal'
                  fontSize={['lg', null, null, 'xl', null]}
                  m={0}
                  mb={3}>
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
                          <Text as='p' mt='10px' mb='10px' key={index}>
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
          </motion.div>
        ))}
      </Grid>
    </React.Fragment>
  );
}

export default ArticlesGrid;
