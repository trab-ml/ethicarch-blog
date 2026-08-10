export const formatDate = (dateStr: string, localeCode: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(localeCode, {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};
