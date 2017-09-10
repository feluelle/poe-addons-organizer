import { AJAX } from '../../../../ajax/ajax';
import { GitHubDocument } from '../../../../github/crawler/pages/github-document';
import { GitHubRelease } from '../../../../github/crawler/pages/release/github-release';

class GitHubReleasePage extends GitHubDocument {
    constructor(htmlString) {
        super(htmlString);
    }

    /**
     * Requests the html site of /releases and creates a GitHubReleasePage out of it
     * @param {String} repositoryLink
     * @return {GitHubReleasePage} gitHubReleasePage
     */
    static async request(repositoryLink) {
        const responseText = await AJAX.get(`https://github.com${repositoryLink}/releases`);

        return new GitHubReleasePage(responseText);
    }

    /**
     * Gets the releases of the GitHubRelease Page
     * @return {Array} releases
     */
    getReleases() {
        const releaseTimeLine = this.doc.querySelector('.release-timeline');

        return releaseTimeLine !== null ?
            Array.from(releaseTimeLine.querySelectorAll('.release'))
                .map(releaseElement => new GitHubRelease(releaseElement)) : [];
    }
}

export { GitHubReleasePage };