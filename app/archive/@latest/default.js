import NewsList from '@/component/new-list';
import { getLatestNews } from '@/lib/new';

export default function LatestNewsPage() {
  const latestNews = getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
