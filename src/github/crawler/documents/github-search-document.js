import { GitHubDocument } from '../../../github/crawler/documents/github-document';

class GitHubSearchDocument extends GitHubDocument {
    constructor(responseText) {
        super(responseText);
    }

    getRepoListItems() {
        const repoList = this.doc.querySelector('.repo-list');
        const repoListItems = repoList.querySelectorAll('.repo-list-item');

        return repoListItems;
    }

    getRepoTitle(repo) {
        const repoTitle = repo.querySelector('a').getAttribute('href');

        return repoTitle;
    }
}

export { GitHubSearchDocument };