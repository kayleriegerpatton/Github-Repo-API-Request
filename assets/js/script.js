// const mainContainer = $("#main-container");

// const handleResponse = function () {};

// const renderCards = function () {
//   //   get repo name
//   const repoName = repos.name;

//   //   get link
//   const repoLink = repos.html_url;

//   // construct card
//   const repoCard = `<div class="card" style="width: 18rem">
//   <img src="..." class="card-img-top" alt="..." />
//   <div class="card-body">
//     <h5 class="card-title">${repoName}</h5>
//     <p class="card-text"></p>
//     <a href="${repoLink}" class="btn btn-primary">Deployed Application</a>
//   </div>
// </div>`;

//   // map over repo data
// };

// const handleError = function () {};

// get data from API
// const getAPIData = function () {fetch("https://api.github.com/users/kayleriegerpatton/repos").then(
//   handleResponse).then(renderCards).catch(handleError)};

fetch("https://api.github.com/users/kayleriegerpatton/repos").then(function (
  response
) {
  console.log();
});
