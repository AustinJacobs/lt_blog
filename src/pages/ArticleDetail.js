import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_DETAILS } from '../GraphQL/Queries';
import { format } from 'date-fns';
import { RichText } from 'prismic-reactjs';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { htmlSerializer } from '../prismic-config';
import { Loader } from '../components/styles/Loader.styled';
import { DetailImageContainer } from '../components/styles/DetailImageContainer.styled';
import { ArticleDetailBodyContainer } from '../components/styles/ArticleDetailBodyContainer.styled';
import { Button } from '../components/styles/Button.styled';

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
    <DetailImageContainer>
      <img
        src={data.article.feature_image.url}
        alt={data.article.feature_image.alt}
      />
      <ArticleDetailBodyContainer>
        <h1>{data.article.title[0].text}</h1>
        <span>
          Published on{' '}
          {format(new Date(data.article.published_at), 'MMM dd, yyyy')}
        </span>
        <div>
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
        </div>
        <Button onClick={() => history.goBack()}>Back</Button>
      </ArticleDetailBodyContainer>
    </DetailImageContainer>
  );
}

export default ArticleDetail;
