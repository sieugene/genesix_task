import React, { FC } from "react";
import { Article } from "../../Schemas/ArticleSchema";
import style from "./Article.module.scss";
import Link from "next/link";
type Props = {
  article: Article;
};

export const ArticleCard: FC<Props> = ({ article }) => {
  return (
    <Link href={`/article/${article.id}`}>
      <a>
        <div className={style.card}>
          <h2 className={style.card__text}>{article.title}</h2>
          <img
            src={article.image}
            alt={article.title}
            className={style.card__image}
          />
        </div>
      </a>
    </Link>
  );
};
