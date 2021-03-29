import { Article, Articles } from "./../Schemas/ArticleSchema";
import staticJSON from "../data/index.json";
const isBuild = process.env.NODE_ENV === "production";

export const getAllArticles = async (): Promise<Articles> => {
  if (isBuild) {
    return new Promise((resolve) => resolve(staticJSON as Articles));
  } else {
    try {
      const response = await fetch("http://localhost:3000/api/articles");
      const data: Promise<Articles> = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }
};

export const getArticle = async (id: string): Promise<Article> => {
  try {
    const response = await fetch(`http://localhost:3000/api/articles?id=${id}`);
    const data: Promise<Article> = await response.json();
    return data;
  } catch (error) {
    return undefined;
  }
};
