import { AJAX } from '../../ajax/ajax';

class GitHubClient {
    /**
     * Authorizes the GitHubClient by defining the authorization token
     */
    constructor() {
        this.token = '<auth-token>';
    }

    /**
     * Gets all information needed to receive all PoE information about GitHub repositories using GitHub's GraphQL API
     * @return {Promise} promise
     */
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