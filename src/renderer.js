import { GitHubCrawler } from './github/crawler/github-crawler';

const init = async() => {
    const gitHubCrawler = new GitHubCrawler();
    const poeRepos = gitHubCrawler.getPoERepos();

    return poeRepos;
};

const render = (poeRepos) => {
    var app = new Vue({
        el: '#app',
        data: {
            message: poeRepos
        }
    });
};

init().then(render);