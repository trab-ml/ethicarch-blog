export interface BasicArticleType {
    title: string;
    teaser: string;
    content: string;
    imgAlt: string;
}

export interface ArticleType extends BasicArticleType {
    createdAt: Date;
    imgUrl: string;
}
