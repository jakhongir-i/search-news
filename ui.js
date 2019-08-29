class UI {
  constructor() {
    this.trendNews = document.querySelector('#trend-news');
    this.topNews = document.querySelector('#top-news');
    this.results = document.querySelector('.resultsContainer')
  }

  showNews(newsArr) {
    newsArr.forEach(news => {
      const article = `
      <div class="columns is-desktop">
        <div class="column is-4-desktop is-12-mobile">
        <figure class="image" style="height: 100%;">
          <img style="object-fit: cover; height: 100%;" src="${(news.urlToImage) ? news.urlToImage : "noimg.png" }">
        </figure>
      </div>
      <div class="column">
        <a href="${news.url}" target="_blank">
          <h3 class="is-marginless title" id="title">${news.title}</h3>
        </a>
        <strong class="has-text-success" id="source">${news.source.name}</strong> <small
          class="has-text-grey-light" id="publishedAt">${news.publishedAt.slice(0,10)}</small>
        <br>
        <p class="has-text-grey-dark" id="description">${news.description}</p>
      </div>
    </div>
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

  showInfoError(searchtext) {
    this.results.innerHTML += `
    <p>По запросу <strong>${searchtext}</strong> ничего не найдено. <br>
    Рекомендации:
    </p>
    <ul class="list is-shadowless"> 
      <li class="list-item" style="border: none">&bull; Убедитесь, что все слова написаны без ошибок.</li>
      <li class="list-item" style="border: none">&bull; Попробуйте использовать другие ключевые слова.</li>
      <li class="list-item" style="border: none">&bull; Попробуйте использовать более популярные ключевые слова.</li>
    </ul> 
    `;
  }

  clearError() {
    const error = document.querySelector('.notification');
    if (error) {
      error.remove();
    }
  }
}