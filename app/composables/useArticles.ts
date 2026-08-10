import jsonArticles from "~/data/articles.json";
import type { BasicArticleType, ArticleType } from "~/utils/types/article";
import { useI18n } from "#imports";

const aggregateArticlesData = (i18nArticles: BasicArticleType[] | []) : ArticleType[] => {
    return jsonArticles.data.map((article, index) => {
        return { ...i18nArticles[index], ...article } as ArticleType;
    });
};

export function useArticles() {
    const { t } = useI18n();
    const raw = t("articles");
    const translatedArticles: BasicArticleType[] = Array.isArray(raw)
        ? raw
        : [];
    return aggregateArticlesData(translatedArticles);
}
