import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_DETAILS } from '../GraphQL/Queries';
import { format } from 'date-fns';
import { RichText } from 'prismic-reactjs';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
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

const ArticleDetailBodyContainer = styled.div`
  ${compose(color, space, border, typography, layout, grid)}
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0 auto;
  padding: 1em 6em 1em 6em;

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
  background-color: ${({ theme }) => theme.colors.red[600]};
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 5px;
  color: white;
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
    <Box>
      <img
        src={data.article.feature_image.url}
        alt={data.article.feature_image.alt}
      />
      <ArticleDetailBodyContainer>
        <Heading
          level={1}
          fontWeight='normal'
          fontSize={['2xl', null, null, '4xl', null]}
          m='0'>
          {data.article.title[0].text}
        </Heading>
        <Text variant='span'>
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
          style={{ background: 'transparent', border: 'none' }}>
          <Button fontSize={'md'} onClick={() => history.goBack()}>
            Back
          </Button>
        </motion.button>
      </ArticleDetailBodyContainer>
    </Box>
  );
}

export default ArticleDetail;
