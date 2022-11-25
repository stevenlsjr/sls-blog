import type { NextPage, NextPageContext } from "next";
import Head from "next/head";
import Image from "next/image";
import { dehydrate, useQuery } from "react-query";
import styles from "../styles/Home.module.css";
import { makeQueryClient } from "../api/query-client";
import { WagtailClient } from "../api/wagtail-client";
import { ListPages } from "../components/list-pages";
import { useEffect } from "react";

export async function getStaticProps(context: NextPageContext) {
  const client = makeQueryClient();
  const wagtail = new WagtailClient();
  const pages = await wagtail.listPages()

  const dehydratedState = dehydrate(client);
  return { props: { dehydratedState } };
}

const Home: NextPage = () => {
  const wagtail = new WagtailClient();

  useEffect(() => {
    (window as any).WAGTAIL = wagtail;
  });

  return (
    <div className={styles.container}>
    </div>
  );
};

export default Home;
