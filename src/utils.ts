export const copyFormAdress = async (formId: string) => {
    if (!navigator.clipboard) {
        console.error('Clipboard API is not available');
        return;
    }

    try {
        await navigator.clipboard.writeText(`http://localhost:5173/test/${formId}`);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
}