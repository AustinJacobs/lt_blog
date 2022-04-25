import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_DETAILS } from '../GraphQL/Queries';
import { format } from 'date-fns';
import { RichText } from 'prismic-reactjs';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { htmlSerializer } from '../prismic-config';
import Loader from '../components/styles/Loader.styled';
import ArticleDetailBodyContainer from '../components/styles/ArticleDetailBodyContainer.styled';
import Button from '../components/styles/Button.styled';
import Heading from '../components/styles/Heading';
import Text from '../components/styles/Text';
import Box from '../components/styles/Box';

function ArticleDetail() {
  useEffect(() => {
    const body = document.querySelector('#root');

    body.scrollIntoView();
  }, []);

  let history = useHistory();

  const { articleUid } = useParams();

  const { loading, error, data } = useQuery(GET_DETAILS(articleUid));

  if (loading) return <Loader>Loading...</Loader>;
  if (error) return `Error! ${error.message}`;

  console.log(data.article.body)

  return (
    <Box>
      <img
        src={data.article.feature_image.url}
        alt={data.article.feature_image.alt}
      />
      <ArticleDetailBodyContainer>
        <Heading level={1} fontWeight='normal' >{data.article.title[0].text}</Heading>
        <Text variant="span">
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
        <Button onClick={() => history.goBack()}>Back</Button>
      </ArticleDetailBodyContainer>
    </Box>
  );
}

export default ArticleDetail;
