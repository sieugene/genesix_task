import { GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";
import { Articles } from "../Schemas/ArticleSchema";
import { getAllArticles } from "../Services";
import styles from "../styles/Home.module.css";

type Props = {
  articles: Articles;
};

const Home: FC<Props> = ({ articles }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Статьи</h1>

        {articles?.length &&
          articles.map((a) => {
            return (
              <div key={a.id}>
                <h2>{a.title}</h2>
                <img src={a.image} alt={a.title} />
              </div>
            );
          })}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getAllArticles();
  return {
    props: {
      articles: articles ?? [],
    },
  };
};

export default Home;
