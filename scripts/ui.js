//Arayüz işlemleri

export default class UI {
  constructor() {
    this.list = document.querySelector("#list");
    this.form = document.querySelector("#search-form");
    this.title = document.querySelector("#title");
    this.playArea = document.querySelector(".play-area");
  }
  //liste alanına yükleniyor basar
  renderLoader() {
    this.list.innerHTML = ` <div class="container">
    <div class="loader"></div>
  </div>`;
  }

  //ekrana kartları bas
  renderCards(songs) {
    //gifi ekrandan kaldır
    this.list.innerHTML = "";

    //dizideki her bir eleman çin aşağıdaki fonksiyınu çalıştır
    songs.forEach((song) => {
      //elementi oluştur
      const div = document.createElement("div");
      //class ekleme
      div.className = "card";
      //innetHTML'ini belirle
      div.innerHTML = ` 
     <figure>
        <img
     src="${song.images.coverarthq}" />
        <div id="play">
    <i id="play-btn" class="bi bi-play-fill"></i>
    </div>
    </figure>
    <h4>${song.subtitle}</h4>
    <p>${song.title}</p>`;

      //data verileri ekle
      div.dataset.title = song.title;
      div.dataset.photo = song.images.coverarthq;
      div.dataset.url = song.hub?.actions[1].uri;
      //kartı html'e gönder
      this.list.appendChild(div);
    });
  }
  //başlığı günceller
  changeTitle(text) {
    this.title.innerText = text;
  }

  //müzik oynatma kısmını ekrana bas
  renderPlayingInfo(song) {
    console.log(song);
    this.playArea.innerHTML = `
     <div>
<img class="animate"
  src="${song.photo}"
  alt="">
</div>
<div>
<p>Şuan Oynatılıyor</p>
<h3>${song.title}</h3>
</div>
<audio controls autoplay src="${song.url}"></audio>`;
  }
}
