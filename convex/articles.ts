import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// 記事の更新順で記事を取得
export const get = query({
  // 引数
  args: {},

  // 実際の処理の部分
  handler: async (ctx) => {
    const articles = await ctx.db.query("articles").collect();

    const sortedArticles = articles.sort(
      (a, b) => b._creationTime - a._creationTime // 降順ソート
    );

    return sortedArticles.map((article) => {
      return {
        id: article._id,
        title: article.title,
        description: article.description,
        author: article.author,
        createdAt: article._creationTime,
        viewCount: article.viewCount,
      };
    });
  },
});

// 記事の更新順で記事を取得(取得制限あり)
export const getLatest = query({
  // 引数
  args: {
    // convex の型指定 (JSのnumber型と互換性のある convex の型を v から持ってきている)
    limit: v.optional(v.number()),
  },

  // 実際の処理の部分
  handler: async (ctx, args) => {
    const { limit } = args;
    const articles = await ctx.db.query("articles").collect();

    const sortedArticles = articles
      .sort((a, b) => b._creationTime - a._creationTime) // 降順ソート
      .slice(0, limit ?? 10); // 取得した記事の個数の上限を決める。デフォルトでは 10

    return sortedArticles.map((article) => {
      return {
        id: article._id,
        title: article.title,
        description: article.description,
        author: article.author,
        createdAt: article._creationTime,
        viewCount: article.viewCount,
      };
    });
  },
});

// 記事のビュー数の多い順で記事を取得
export const getPopular = query({
  // 引数
  args: {
    // convex の型指定 (JSのnumber型と互換性のある convex の型を v から持ってきている)
    limit: v.optional(v.number()),
  },

  // 実際の処理の部分
  handler: async (ctx, args) => {
    const { limit } = args;
    const articles = await ctx.db.query("articles").collect();

    const sortedArticles = articles
      .sort((a, b) => b.viewCount - a.viewCount) // 降順ソート
      .slice(0, limit ?? 10); // 取得した記事の個数の上限を決める。デフォルトでは 10

    return sortedArticles.map((article) => {
      return {
        id: article._id,
        title: article.title,
        description: article.description,
        author: article.author,
        createdAt: article._creationTime,
        viewCount: article.viewCount,
      };
    });
  },
});

// author で記事を取得
export const getByAuthor = query({
  args: {
    author: v.string(),
  },
  handler: async (ctx, { author }) => {
    const articles = await ctx.db
      .query("articles")
      .filter((q) => q.eq(q.field("author"), author))
      .collect();

    const sortedArticles = articles.sort(
      (a, b) => b._creationTime - a._creationTime // 降順ソート
    );

    return sortedArticles.map((article) => {
      return {
        id: article._id,
        title: article.title,
        description: article.description,
        author: article.author,
        createdAt: article._creationTime,
        viewCount: article.viewCount,
      };
    });
  },
});

// 記事の追加
export const insert = mutation({
  args: {
    title: v.string(),
    description: v.string(),
  },
  // author は固定として、editor からは title と description を受け取る
  handler: async (ctx, { title, description }) => {
    await ctx.db.insert("articles", {
      title,
      description,
      author: "@HoiLen",
      viewCount: 0,
    });
  },
});

// id から記事を取得する
export const getById = query({
  args: {
    id: v.id("articles"),
  },
  handler: async (ctx, { id }) => {
    const article = await ctx.db.get(id);
    if (!article) {
      throw new Error("Article not found");
    }

    return {
      id: article._id,
      title: article.title,
      description: article.description,
      author: article.author,
      createdAt: article._creationTime,
      viewCount: article.viewCount,
    };
  },
});

export const incrementViewCount = mutation({
  args: {
    id: v.id("articles"),
  },
  handler: async (ctx, { id }) => {
    const article = await ctx.db.get(id);
    if (!article) {
      throw new Error("Article not found");
    }

    // _id で変更するレコードを指定し、{} でカラムに変更をかける
    await ctx.db.patch(article._id, {
      viewCount: article.viewCount + 1,
    });
  },
});

// 記事に変更をかける関数
export const mutateArticle = mutation({
  args: {
    id: v.id("articles"),
    title: v.string(),
    description: v.string(),
  },
  handler: async (ctx, { id, title, description }) => {
    const article = await ctx.db.get(id);
    if (!article) {
      throw new Error("Article not found");
    }

    // _id で変更するレコードを指定し、{} でカラムに変更をかける
    await ctx.db.patch(article._id, {
      title: title,
      description: description,
    });
  },
});

// 記事を削除する関数
export const deleteArticle = mutation({
  args: {
    id: v.id("articles"),
  },
  handler: async (ctx, { id }) => {
    const article = await ctx.db.get(id);
    if (!article) {
      throw new Error("Article not found");
    }

    // _id で指定した記事を削除
    await ctx.db.delete(article._id);
  },
});
