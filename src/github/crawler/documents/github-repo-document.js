import { GitHubDocument } from '../../../github/crawler/documents/github-document';

class GitHubRepoDocument extends GitHubDocument {
    constructor(responseText) {
        super(responseText);
    }
}

export { GitHubRepoDocument };