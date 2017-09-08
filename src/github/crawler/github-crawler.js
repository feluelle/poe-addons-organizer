import { AJAX } from '../../ajax/ajax';
import { GitHubSearchDocument } from '../../github/crawler/documents/github-search-document';

class GitHubCrawler {
    constructor() {

    }

    async getPoERepos() {
        const searchResponse = await AJAX.get('https://github.com/search?utf8=%E2%9C%93&q=topic%3Apoe&type=');

        const gitHubDocument = new GitHubSearchDocument(searchResponse);
        const repoListItems = gitHubDocument.getRepoListItems();
        const repoTitles = [];
        repoListItems.forEach(repo => repoTitles.push(gitHubDocument.getRepoTitle(repo)));

        return repoTitles;
    }
}

export { GitHubCrawler };