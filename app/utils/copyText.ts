import { createAlert } from "~/utils/alert";

export const copyToClipboard = (toCopy: string) => {
    try {
        window.navigator.clipboard.writeText(toCopy);
        createAlert("SUCCESS-ICON - Copié avec succès !");
    } catch (_err) {
        createAlert("FAIL-ICON - Erreur lors de la copie !");
    }
};
