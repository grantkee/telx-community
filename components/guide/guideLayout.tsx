import React from "react";
import GuideBar from "./guideBar";
import GuideNav from "./guideNav";
import GuideMain from "./guideMain";

export interface ArticleProps {
  createdAt: string;
  detail: string;
  id: number;
  locale: string;
  publishedAt: string;
  rawHtml: string;
  title: string;
  updatedAt: string;
}
export interface GuideLayoutProps {
  article: ArticleProps;
  articles: Array<ArticleProps>
}

export default function GuideLayout(props: GuideLayoutProps) {
  const { article, articles } = props;
  
  return (
    <div className="guide-layout">
      <GuideBar />
      <div className="guide-layout-inner">
        <GuideNav 
          articles={articles}
        />
        <GuideMain 
          article={article}
        />
      </div>
    </div>
  )
}
