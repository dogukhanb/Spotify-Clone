import API from "./scripts/api.js";
import Uİ from "./scripts/ui.js";
//class'ın bir örneğini alma

const api = new API();
const ui = new Uİ();
// sayfanın yüklnme olayını izle
document.addEventListener("DOMContentLoaded", async () => {
  //ekrana yüklenme gifi bas
  ui.renderLoader();
  //api istek at
  await api.getPopular();
  //gelen verileri ekrana bas
  ui.renderCards(api.songs);
});

//dormun gödnerilme olayını izle

ui.form.addEventListener("submit", async (event) => {
  //sayfayı yenilemeyi engelle
  event.preventDefault();
  //aratılan kelimeye eriş
  const query = event.target.searchInput.value;
  //kelime boşşa uyarı ver
  if (!query.trim()) return alert("Lütfen aratılacak kelimeyi giriniz.");
  //ekrana yükleniyor bas
  ui.renderLoader();
  //başlığı güncelle
  ui.changeTitle(query + " İçin Sonuçlar");
  // api'den şarkıları al
  await api.searchMusic(query);
  //şarkıları ekrana bas
  ui.renderCards(api.songs);
});

//kartların playBtn tıklanma olayını izleme

ui.list.addEventListener("click", (e) => {
  //tıklanılan eleman playBtn ise oynat
  if (e.target.id === "play-btn") {
    //tıklanılan karttaki şarkının bilgilerini al
    const song = e.target.closest(".card").dataset;

    //şarkıyı oynatma kısmını ekrana bas
    ui.renderPlayingInfo(song);
  }
});
