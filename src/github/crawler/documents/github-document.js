class GitHubDocument {
    constructor(responseText) {
        this.doc = this._textToHtml(responseText);
    }

    _textToHtml(text) {
        const doc = new DOMParser().parseFromString(text, 'text/html');

        return doc;
    }
}

export { GitHubDocument };