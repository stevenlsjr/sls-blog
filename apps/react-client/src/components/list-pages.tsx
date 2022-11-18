import { useEffect } from "react";
import { useQuery } from "react-query";
import { WagtailClient } from "../api/wagtail-client";
import { MS_PER_HOUR } from "../constants";
import { ListPagePreview } from "./list-page-preview";


export function ListPages() {
  const wagtail = new WagtailClient();
  useEffect(() => {
    (window as any).WAGTAIL = wagtail;
  });
  const q = useQuery(["list-blog-pages"], () => wagtail.listBlogPages(), {
    staleTime: 12 * MS_PER_HOUR,
  });
  if (q.isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  } else if (q.isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>
    );
  }
  return (
    <>
      <ul>
        {q.data?.items.map((page) => {
          return <ListPagePreview page={page}></ListPagePreview>;
        })}
      </ul>
    </>
  );
}
