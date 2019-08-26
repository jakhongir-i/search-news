class UI {
  constructor() {
    this.trendNews = document.querySelector('#trend-news');
    this.topNews = document.querySelector('#top-news');
  }

  showNews(newsArr) {
    newsArr.forEach(news => {
      const article = `
            <article class="media">
            <figure class="media-left">
              <p class="image is-130x130">
                <img style="max-width: 130px; height: 130px; object-fit: cover"  src="${(news.urlToImage) ? news.urlToImage : "noimg.png" }">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                  <a href="${news.url}" target="_blank"><h3 class="is-marginless title" id="title">${news.title}</h3></a>
                  <strong class="has-text-success" id="source">${news.source.name}</strong> <small class="has-text-grey-light" id="publishedAt">${news.publishedAt.slice(0,10)}</small>
                  <br>
                  <p class="has-text-grey-dark" id="description">${news.description}</p>
              </div>
            </div>
        </article>
      `
      this.trendNews.innerHTML += article;
    });
    
  }

  showTopNews(topNews) {

    topNews.forEach(topNew => {
      const elemUrl = `<a target="_blank" href="${topNew.url}"><i class="fas fa-link is-grey-light" ></i></a>`;
      const topArticle = `
      <article class="media">
      <div class="media-content">
        <div class="content">
            <a href="${topNew.url}" target="_blank"><h3 class="is-marginless title">${topNew.title}</h3></a>
            <strong class="has-text-info" >${(topNew.author) ? topNew.author : "Anonim" }</strong><small class="has-text-grey-light"> ${topNew.source.name}</small>
            <br>
            <p class="has-text-grey-dark" >${topNew.content.replace(/\[\+\d+\schars\]$/, elemUrl )}</p>
        </div>
      </div>
      </article>
      `
      this.topNews.innerHTML += topArticle;
    })
  }

  showError(message, className) {
    this.clearError();
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message))
    const container = document.querySelector('.searchContainer');
    const field = document.querySelector('.field');
    container.insertBefore(div, field);
    
    setTimeout(() => {
      this.clearError();
    }, 3000);
  }

  clearError() {
    const error = document.querySelector('.notification');
    if (error) {
      error.remove();
    }
  }
}