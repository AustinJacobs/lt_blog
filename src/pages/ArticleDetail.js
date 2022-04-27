import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_DETAILS } from '../GraphQL/Queries';
import { format } from 'date-fns';
import { RichText } from 'prismic-reactjs';
import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import { htmlSerializer } from '../prismic-config';
import Heading from '../components/styles/Heading';
import Text from '../components/styles/Text';
import Box from '../components/styles/Box';
import styled from 'styled-components';
import Flex from '../components/styles/Flex';
import {
  compose,
  color,
  space,
  border,
  typography,
  layout,
  grid,
} from 'styled-system';
import { motion } from 'framer-motion';
import Ring from 'react-cssfx-loading/lib/Ring';
import logo from '../images/lti-logo.png';

const ArticleDetailBodyContainer = styled.div`
  ${compose(color, space, border, typography, layout, grid)}
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0 auto;

  a {
    text-decoration: underline ${({ theme }) => theme.colors.lightBlue};
    color: ${({ theme }) => theme.colors.blue[500]};
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 50%,
      ${({ theme }) => theme.colors.blue[50]} 50%
    );
    background-position: -0% 0;
    background-size: 200% auto;
    transition: background-position 0.5s ease-out;
  }

  a:hover {
    background-position: -99.99% 0;
    text-decoration: underline ${({ theme }) => theme.colors.blue[700]};
  }
`;

const Button = styled.button`
  ${compose(color, space, border, typography, layout, grid)}
`;

const VerticalLine = styled.div`
  ${compose(color, space, border, typography, layout, grid)}
`;

const LogoImage = styled.img`
  ${compose(color, space, border, typography, layout, grid)}
  max-width: 75px;
  justify-self: center;
`;

const ArticleImage = styled.img`
  ${compose(color, space, border, typography, layout, grid)}
  width: 100%;
`;

function ArticleDetail() {
  useEffect(() => {
    const body = document.querySelector('#root');

    body.scrollIntoView();
  }, []);

  let history = useHistory();

  const { articleUid } = useParams();

  const { loading, error, data } = useQuery(GET_DETAILS(articleUid));

  if (loading)
    return (
      <Flex justifyContent='center' mt='50vh'>
        <Ring color='#B71A04' width='80px' height='80px' />
      </Flex>
    );
  if (error) return `Error! ${error.message}`;

  console.log(data.article.body);

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
      <Box>
        <ArticleImage
          p={0}
          m={0}
          mt={5}
          src={data.article.feature_image.url}
          alt={data.article.feature_image.alt}
        />
        <ArticleDetailBodyContainer px={['2em', null, null, '6em', null]}>
          <Heading
            level={1}
            fontWeight='normal'
            fontSize={['3xl', null, null, '5xl', null]}
            m='0'
            mt={4.5}>
            {data.article.title[0].text}
          </Heading>
          <Text color='red.600' mt={0} as='p'>
            Published on{' '}
            {format(new Date(data.article.published_at), 'MMM dd, yyyy')}
          </Text>
          <Box>
            {data.article.body
              .filter((index) => index.type === 'inline_text')
              .map((content, index) => {
                return (
                  <RichText
                    key={index}
                    render={content.primary.description}
                    htmlSerializer={htmlSerializer}
                  />
                );
              })}
          </Box>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ y: -2 }}
            style={{ background: 'transparent', border: 'none', padding: '0' }}>
            <Button
              width='100px'
              height='40px'
              border='none'
              borderRadius='5px'
              bg='red.600'
              color='white'
              fontSize={'md'}
              onClick={() => history.goBack()}
              mb={5}>
              Back
            </Button>
          </motion.button>
        </ArticleDetailBodyContainer>
      </Box>
    </React.Fragment>
  );
}

export default ArticleDetail;
