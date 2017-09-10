import { AJAX } from '../../../../ajax/ajax';
import { GitHubDocument } from '../../../../github/crawler/pages/github-document';
import { GitHubRepository } from '../../../../github/crawler/pages/repository/github-repository';

class GitHubSearchPage extends GitHubDocument {
    /**
     * Creates a document out of the passed html string by calling the GitHubDocument's constructor
     */
    constructor(htmlString) {
        super(htmlString);
    }

    /**
     * Requests the html site of /search and creates a GitHubSearchPage out of it
     * @param {String} searchParams
     * @return {GitHubSearchPage} gitHubSearchPage
     */
    static async request(searchParams) {
        const responseText = await AJAX.get(`https://github.com/search${searchParams}`);

        return new GitHubSearchPage(responseText);
    }

    /**
     * Gets the repositories of the GitHubSearchPage
     * @return {Array} repositories
     */
    getRepositories() {
        return Array.from(this.doc
            .querySelector('.repo-list')
            .querySelectorAll('.repo-list-item'))
            .map(repositoryElement => new GitHubRepository(repositoryElement));
    }
}

export { GitHubSearchPage };