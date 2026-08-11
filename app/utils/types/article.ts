export interface BasicArticleType {
    title: string;
    teaser: string;
    content: string;
    imgAlt: string;
}

export interface ArticleType extends BasicArticleType {
    createdAt: string;
    imgUrl: string;
}

export interface ArticleFilters {
    search: string;
    sortByDate: boolean;
    resetFilters: boolean;
}
