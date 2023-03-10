const apiRequest = async (url = '', optionsObject = null, errMsg = null) => {
    try {
        const response = await fetch(url, optionsObject);
        if (!response.ok) throw Error('Please reload app');
    } catch (error) {
        errMsg = error.message;
    } finally {
        return errMsg;
    }
}

export default apiRequest;