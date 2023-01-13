let category = ["business","entertainment","general","health","science","sports","technology"]
let random = Math.floor(Math.random() * 7)
console.log(category[random])
let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category[random]}&apiKey=f62b9cc3539e4060a43ca6bdc3f51aee`;
let response = fetch(url);
ihtml = "";
let response2 = response.then((v) => {
    return v.json();
}).then((news) => {
    for (let item = 0; item < (news.articles.length - 1); item++) {
        console.log(news.articles[item]);
        if (news.articles[item].content == null) {
            item++;
        }
        else{
        ihtml += `
        <div class="card w-100 mb-3">
        <div class="card-body">
          <h5 class="card-title">${news.articles[item].title}</h5>
          <p class="card-text">${news.articles[item].content}</p>
          <a href="${news.articles[item].url}" class="btn btn-primary" style="display:flex;width:110px;margin:auto;">Know More</a>
        </div>
      </div>`;
        }
    }
    console.log(news.articles.length);
    let accordion = document.getElementById("accordionPanelsStayOpenExample");
    accordion.innerHTML = ihtml;
})

