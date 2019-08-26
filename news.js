class News {
  constructor() {
    this.apiKey = '351776ba86614321af3173d1708e3740';
  }
  
  async getNews(news) {
    const newsRes = await fetch(`https://newsapi.org/v2/everything?q=${news}&apiKey=${this.apiKey}`);
    const topNews = await fetch(`https://newsapi.org/v2/top-headlines?q=${news}&apiKey=${this.apiKey}`);
    const data = await newsRes.json();
    const topData = await topNews.json();

    return {
      data: data.articles.slice(0,5),
      topData : topData.articles.slice(0,5)
    }
  }
}