class Github {
    constructor() {
        this.client_id      = 'f835c7e06e8077cfc649';
        this.client_secret  = '691e398e10cb681791a5a5195c2de0942e55491e';
        this.repos_count    = 5;
        this.repos_sort     = 'created_at: asc';
    }

    async gitUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile   = await profileResponse.json();

        const repos     = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}