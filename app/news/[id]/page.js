import { DUMMY_NEWS } from '@/dummy-news';

const NewsDetailPage = ({ params }) => {
  const newsId = params.id;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsId);
  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
      </header>
      <h1>{newsItem.title}</h1>
      <time dateTime={newsItem.date}>{newsItem.date}</time>
    </article>
  );
};

export default NewsDetailPage;
