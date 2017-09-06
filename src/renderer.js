// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const PastebinClient = require('./pastebin-client');
const GitHubClient = require('./github-client');

const init = async () => {
    const pastebinClient = new PastebinClient();
    const token = await pastebinClient.getAuthToken();

    const gitHubClient = new GitHubClient(token);
    const poeRepos = await gitHubClient.getPoERepos();

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