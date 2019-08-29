const news = new News();
const ui = new UI();
const hints = new Hints();

const searchInput = document.querySelector("#searchInput");

searchInput.addEventListener("keyup", e => {
  let searchText = e.target.value;

  if (searchText !== '') {
    news.getNews(searchText)
      .then(data => {                  // Show hints
        hints.showHints(data.data);
        console.log(data.data);
      })
      .catch(err => console.log(err));
    if (e.keyCode === 13) {           // Show News on click Enter
      news.getNews(searchText)
        .then(data => {
          document.querySelector("#trend-news").innerHTML = "";
          document.querySelector("#top-news").innerHTML = "";
          ui.showNews(data.data);
          ui.showTopNews(data.topData);
          console.log(data.topData);

        //   if(data.data.length === 0 || data.topData.length === 0){    SHOW ERROR ON 
        //     ui.showInfoError(searchText);
        //   }
        })
        .catch(err => console.log(err));
    } else {
      // ui.showError('Pleas, fill in the field!', 'notification is-danger');
    }
  } else {
    // ui.showError('Pleas, fill in the field!', 'notification is-danger');
  }

  e.preventDefault();
});
