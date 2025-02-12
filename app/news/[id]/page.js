import { DUMMY_NEWS } from '@/dummy-news';
import Link from 'next/link';

const NewsDetailPage = ({ params }) => {
  const newsId = params.id;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsId);
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsId}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
      </header>
      <h1>{newsItem.title}</h1>
      <time dateTime={newsItem.date}>{newsItem.date}</time>
      <p>{newsItem.content}</p>
    </article>
  );
};

export default NewsDetailPage;
