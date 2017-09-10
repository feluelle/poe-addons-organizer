class AJAX {
    /**
     * Initializes XMLHttpRequest
     * @param {Callback} onSuccess
     * @param {Callback} onError
     * @return {XMLHttpRequest} xhr
     */
    static _init(onSuccess, onError) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status == 200)
                    onSuccess(xhr.responseText);
                else
                    onError(xhr.statusText);
            }
        }
        return xhr;
    }

    /**
     * Creates a GET request to the passed url
     * @param {String} url
     * @return {Promise} promise
     */
    static get(url) {
        return new Promise((resolve, reject) => {
            const xhr = this._init(resolve, reject);
            xhr.open('GET', url);
            xhr.send();
        });
    }

    /**
     * Creates a POST request with the passed json
     * @param {Object} json The json has the following structure: 
     * { url: url, headers: { authorization: authorization, contentType: contentType, accept: accept }, data: data }
     * @return {Promise} promise
     */
    static post(json) {
        return new Promise((resolve, reject) => {
            const xhr = this._init(resolve, reject);
            xhr.open('POST', json.url);
            if (json.headers) {
                if (json.headers.authorization)
                    xhr.setRequestHeader('Authorization', json.headers.authorization);
                if (json.headers.contentType)
                    xhr.setRequestHeader('ContentType', json.headers.contentType);
                if (json.headers.accept)
                    xhr.setRequestHeader('Accept', json.headers.accept);
            }
            xhr.send(JSON.stringify(json.data));
        });
    }
}

export { AJAX };