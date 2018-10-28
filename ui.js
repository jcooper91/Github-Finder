class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}" />
                        <a target="_blank" href="${user.html_url}">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-primary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-primary">Followers: ${user.followers}</span>
                        <span class="badge badge-primary">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    showRepos(repos) {
        let output = '';
        repos.forEach(function(repo) {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-primary">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        })
        document.getElementById('repos').innerHTML = output; 
    }

    showAlert(message, className) {
        // create div
        const div = document.createElement('div');
        // add class 
        div.className = className;
        // add message text
        div.appendChild(document.createTextNode(message));
        // get element to insert div after
        const container = document.querySelector('.searchContainer');
        // get element to insert div before 
        const search = document.querySelector('.search'); 
        // insert div
        container.insertBefore(div, search);

        setTimeout(() => {
            const alertMsg = document.querySelector('.alert');
            alertMsg.remove();
        }, 1000)
    }

    clearProfile() {
        const profile = document.getElementById('profile');
        profile.innerHTML = '';
    }
}