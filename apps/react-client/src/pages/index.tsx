import type { NextPage, NextPageContext } from "next";
import Head from "next/head";
import Image from "next/image";
import { dehydrate, useQuery } from "react-query";
import styles from "../styles/Home.module.css";
import { makeQueryClient } from "../api/query-client";
import { WagtailClient } from "../api/wagtail-client";
import { ListPages } from "../components/list-pages";

export async function getStaticProps(context: NextPageContext) {
  const client = makeQueryClient();
  const wagtail = new WagtailClient();
  try {
    const pages = await client.fetchQuery("list-blog-pages", () =>
      wagtail.listBlogPages({})
    );
    await Promise.all(
      pages.items.map((page) =>
        client.prefetchQuery(["detail-page-by-id", page.id], () =>
          wagtail.detailPage(page.id)
        )
      )
    );
  } catch (e) {
    if (!(e as any).isAxiosInstance) {
      throw e;
    }
  }

  const dehydratedState = dehydrate(client);
  return { props: { dehydratedState } };
}

const Home: NextPage = () => {
  const wagtail = new WagtailClient();

  return (
    <div className={styles.container}>
      <ListPages></ListPages>
    </div>
  );
};

export default Home;
