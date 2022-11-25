import { useInfiniteQuery } from "react-query";
import { BlogLandingPage, WagtailClient } from "../../api/wagtail-client";
import Link from "next/link";

interface Props {
  page: BlogLandingPage;
}

interface PageParam {
  limit: 2;
  offset: 2;
}

export default function BlogLandingPageView({ page }: Props) {
  const baseLimit = 2;
  const wagtail = new WagtailClient();
  const fetchPages = wagtail.listPagesByCursor({child_of: page.id}, 0, baseLimit);

  const infPages = useInfiniteQuery(["list-pages-inf"], fetchPages, {
    getNextPageParam(lastPage) {
      return lastPage.next;
    },
  });

  const pages = infPages.data?.pages.flatMap((item) => item.pages);

  const displayPageList = infPages.isLoading ? (
    <div>Loading...</div>
  ) : infPages.isError ? (
    <div>Error {(infPages.error as any).toString()}</div>
  ) : (
    <>
      <ul>
        {pages!.map((page) => (
          <li key={page.id}>
            <Link href={page.meta.html_url}>{page.title}</Link>
          </li>
        ))}
      </ul>
      <div>{infPages.isFetching ? "fetching" : null}</div>
    </>
  );

  return (
    <>
      <h1>{page.title}</h1>
      <div>
        <h2>Pages</h2>
        {displayPageList}
      </div>
      <button
        onClick={() => infPages.fetchNextPage()}
        disabled={infPages.isFetching || !infPages.hasNextPage}
      >
        Load More
      </button>
    </>
  );
}
