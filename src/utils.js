export const constructFormData = ({to, subject, text, ...rest}) => {
    const formData = new FormData();
    formData.append("to", to);
    formData.append("subject", subject);
    formData.append("text", text);

    Object.entries(rest).forEach(([key, value]) => {
        formData.append(key, value);
    })
    return formData;
}
