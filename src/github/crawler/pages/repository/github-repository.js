class GitHubRepository {
    constructor(repositoryElement) {
        this.repositoryElement = repositoryElement;
    }

    /**
     * Gets the repository title of the GitHub repository
     * @return {String} tag
     */
    getTitle() {
        return this.repositoryElement
            .querySelector('a')
            .getAttribute('href');
    }
}

export { GitHubRepository };