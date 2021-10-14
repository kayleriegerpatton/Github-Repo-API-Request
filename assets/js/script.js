const mainContainer = $("#main-container");

// Where/how did this function use 'repos' when it's not defined anywhere in the code?
const renderCards = function (repos) {
  const constructCards = function (eachRepo) {
    //   get repo name
    const repoName = eachRepo.name;
    console.log(repoName);

    //   get link
    const repoLink = eachRepo.html_url;

    // construct card
    const repoCard = `<div class="card" style="width: 18rem">
  <img src="" class="card-img-top" alt="" />
  <div class="card-body">
    <h5 class="card-title">${repoName}</h5>
    <p class="card-text"></p>
    <a href="${repoLink}" class="btn btn-primary">Deployed Application</a>
  </div>
</div>`;
    // append to main container
    mainContainer.append(repoCard);
  };
  // map over repo data
  repos.forEach(constructCards);
};

const onLoad = function () {
  const handleResponse = function (dataResponse) {
    // *** What is this doing? I don't understand the console logged info either.
    return dataResponse.json();
  };

  // const handleError = function () {};

  // get data from API
  fetch("https://api.github.com/users/kayleriegerpatton/repos")
    .then(handleResponse)
    .then(renderCards);
  // .catch(handleError);
};

window.addEventListener("load", onLoad);
