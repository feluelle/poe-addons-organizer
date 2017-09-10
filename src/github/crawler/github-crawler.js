import { GitHubSearchPage } from '../../github/crawler/pages/search/github-search-page';
import { GitHubReleasePage } from '../../github/crawler/pages/release/github-release-page';

class GitHubCrawler {
    async getPoERepos() {
        let result = [];

        const gitHubSearchPage = await GitHubSearchPage.request("?q=topic:pathofexile");
        const repositories = gitHubSearchPage.getRepositories();

        repositories.forEach(async (repository) => {
            const title = repository.getTitle();
            const gitHubReleasePage = await GitHubReleasePage.request(title);
            const gitHubReleases = gitHubReleasePage.getReleases();
            const archives = gitHubReleases.map(gitHubRelease => gitHubRelease.getArchives());

            result.push({
                "title": title,
                "archives": archives
            });
        });

        return result;
    }
}

export { GitHubCrawler };