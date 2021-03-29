const fs = require("fs");
const path = require("path");
import { Article, Articles as ArticlesSchema } from "../Schemas/ArticleSchema";
const filePath = path.join(process.env.ROOT, "data", "index.json");

class Articles {
  getAll(): Promise<ArticlesSchema> {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, function (err, data) {
        if (err) {
          setTimeout(() => {
            reject(err);
          }, 1500);
        } else {
          setTimeout(() => {
            resolve(JSON.parse(data));
          }, 1500);
        }
      });
    });
  }
  async getOne(id: string): Promise<Article> {
    return new Promise(async (resolve, reject) => {
      const articles = await this.getAll();
      const article =
        articles?.length && articles.find((a) => a.id === Number(id));
      if (article) {
        setTimeout(() => {
          resolve(article);
        }, 1500);
      } else {
        setTimeout(() => {
          reject("Not found");
        }, 1500);
      }
    });
  }
}
export const ArticlesController = new Articles();
