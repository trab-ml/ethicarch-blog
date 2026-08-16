import { createAlert } from "~/utils/alert";

export const copyToClipboard = (toCopy: string) => {
    const { $t } = useNuxtApp();
    try {
        window.navigator.clipboard.writeText(toCopy);
        createAlert($t("alerts.copySuccess")?.toString() ?? "COPIED !");
    } catch (_err) {
        createAlert($t("alerts.errorSuccess")?.toString() ?? "ERROR !");
    }
};
