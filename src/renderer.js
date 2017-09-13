import { GitHubCrawler } from './github/crawler/github-crawler';

const init = async () => {
    const gitHubCrawler = new GitHubCrawler();
    const poeRepos = await gitHubCrawler.getPoERepos();

    return poeRepos;
};

const render = (poeRepos) => {
    const app = new Vue({
        el: '#app',
        data: {
            addons: poeRepos
        },
        methods: {
            download() {
                const select = document.querySelector('.addon__release-list');
                const selectedValue = select.options[select.selectedIndex].value;

                window.location.href = `https://github.com${selectedValue}`;
            }
        }
    });
};

init().then(render);