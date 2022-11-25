import { BlogPage } from "../../api/wagtail-client";
import { BlogPageBlockDetail } from "../blog-page-block-detail";

interface Props {
  page: BlogPage;
}

export default function BlogPageView({ page }: Props) {
  return (
    <>
      <h1>{page.title}</h1>
      <section>
        <p>{page.intro}</p>
      </section>
      <article>
        {page.body.map((block) => {
          return (
            <div key={block.id}>
              <BlogPageBlockDetail block={block}></BlogPageBlockDetail>
            </div>
          );
        })}
      </article>
      <code>
        <pre>{JSON.stringify(page, null, 2)}</pre>
      </code>
    </>
  );
}
