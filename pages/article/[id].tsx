import { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";
import { Article } from "../../Schemas/ArticleSchema";
import { getAllArticles, getArticle } from "../../Services";
import Link from "next/link";
import style from "../../styles/Article.module.scss";

type Props = {
  article: Article;
};

const ArticlePage: FC<Props> = ({ article }) => {
  return (
    <div className="container">
      <div className={style.article}>
        <h2>
          <Link href={`/`}>
            <a className={style.back}>{"<"}</a>
          </Link>

          {article.title}
        </h2>
        <p>{article.description}</p>
        <img src={article.image} alt={article.title} />
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getAllArticles();
  const paths =
    articles?.length &&
    articles.map((a) => {
      return {
        params: { id: a.id.toString() },
      };
    });
  return {
    paths: paths ?? [{ params: { id: "1" } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;

  const article = id && (await getArticle(id as string));

  return { props: { article: article ?? null } };
};

export default ArticlePage;
