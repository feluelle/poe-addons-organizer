import { AJAX } from '../../ajax/ajax';

class GitHubClient {
    constructor() {
        this.token = '<auth-token>';
    }

    getPoERepos() {
        const json = {
            url: "https://api.github.com/graphql",
            headers: {
                authorization: "Bearer " + this.token,
                contentType: "application/json",
                accept: "application/json"
            },
            data: {
                query: "{search(query: \"topic:poe\", type: REPOSITORY, first: 100) {nodes {... on Repository {description}}}}"
            }
        }

        return AJAX.post(json);
    }
}

export { GitHubClient };