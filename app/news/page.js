import Link from 'next/link';

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/first-news">First Link</Link>
        </li>
        <li>
          <Link href="/news/second-news">Second Link</Link>
        </li>
        <li>
          <Link href="/news/third-news">Third Link</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
