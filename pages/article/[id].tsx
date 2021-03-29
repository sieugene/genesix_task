import { GetServerSideProps } from "next";
import { FC } from "react";
import { Article } from "../../Schemas/ArticleSchema";
import { getArticle } from "../../Services";
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;
  const article = id && (await getArticle(id as string));
  if (!article) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return { props: { article: article ?? null } };
};

export default ArticlePage;
