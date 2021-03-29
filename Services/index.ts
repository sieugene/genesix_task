import { Article, Articles } from "./../Schemas/ArticleSchema";

export const getAllArticles = async (): Promise<Articles> => {
  try {
    const response = await fetch("http://localhost:3000/api/articles");
    const data: Promise<Articles> = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getArticle = async (id: string): Promise<Article> => {
  try {
    const response = await fetch(`http://localhost:3000/api/articles?id=${id}`);
    const data: Promise<Article> = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
