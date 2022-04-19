import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_DETAILS } from '../GraphQL/Queries';
import { format } from 'date-fns';
import { RichText } from 'prismic-reactjs';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { htmlSerializer } from '../prismic-config';

function ArticleDetail() {
  useEffect(() => {
    const body = document.querySelector('#root');

    body.scrollIntoView();
  }, []);

  let history = useHistory();

  const { articleUid } = useParams();

  const { loading, error, data } = useQuery(GET_DETAILS(articleUid));

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log(data.article.body)

  return (
    <div>
      <img
        src={data.article.feature_image.url}
        alt={data.article.feature_image.alt}
      />
      <h1>{data.article.title[0].text}</h1>
      <h3>
        Published on{' '}
        {format(new Date(data.article.published_at), 'MMM dd, yyyy')}
      </h3>
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
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  );
}

export default ArticleDetail;
