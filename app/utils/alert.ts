export const createAlert = (text: string) => {
    const alertBox = document.createElement("div");
    alertBox.className = "custom-alert";
    alertBox.innerText = text;
    document.body.parentNode?.prepend(alertBox);
    setTimeout(() => {
        alertBox.remove();
    }, 1000);
};
