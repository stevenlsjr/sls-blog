import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useQuery } from "react-query";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const query = useQuery("get-index", async () => {
    const resp = (await fetch("http://localhost:8000/api/wagtail-v2/pages/"))
      .json;
    return resp;
  });
  return <div className={styles.container}>Hi</div>;
};

export default Home;
