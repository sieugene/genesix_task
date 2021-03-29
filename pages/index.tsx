import { GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";
import { ArticleCard } from "../Components/Article/Article";
import { Articles } from "../Schemas/ArticleSchema";
import { getAllArticles } from "../Services";
import styles from "../styles/Home.module.scss";

type Props = {
  articles: Articles;
};

const Home: FC<Props> = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Главная</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h1 className={styles.title}>Статьи</h1>
        <div className={styles.articles}>
          {articles?.length &&
            articles.map((a) => {
              return <ArticleCard key={a.id} article={a} />;
            })}
        </div>
      </main>
    </>
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
