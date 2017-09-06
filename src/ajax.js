class AJAX {
    static _init(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status == 200)
                    resolve(xhr.responseText);
                else
                    reject(xhr.statusText);
            }
        }
        return xhr;
    }

    static get(url) {
        return new Promise((resolve, reject) => {
            const xhr = this._init(resolve, reject);
            xhr.open('GET', url);
            xhr.send();
        });
    }

    static post(json) {
        return new Promise((resolve, reject) => {
            const xhr = this._init(resolve, reject);
            xhr.open('POST', json.url);
            if (json.headers) {
                if (json.headers.authorization)
                    xhr.setRequestHeader("Authorization", json.headers.authorization);
                if (json.headers.contentType)
                    xhr.setRequestHeader("ContentType", json.headers.contentType);
                if (json.headers.accept)
                    xhr.setRequestHeader("Accept", json.headers.accept);
            }
            xhr.send(JSON.stringify(json.data));
        });
    }
}

module.exports = AJAX;