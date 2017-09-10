class GitHubDocument {
    constructor(htmlString) {
        this.doc = this._textToHtml(htmlString);
    }

    _textToHtml(text) {
        const doc = new DOMParser().parseFromString(text, 'text/html');

        return doc;
    }
}

export { GitHubDocument };