// api isteği atan fonksiyonlar bu dosyada olucak

const options = {
  headers: {
    "X-RapidAPI-Key": "45265695a1mshe1b7ae3dc7b3f5ap19e428jsnea5e60b503cb",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

//api işlemlerini yönetecek olan class
export default class API {
  //kurucu method
  constructor() {
    this.songs = [];
  }

  //TR deki popüler müzikleri alır

  async getPopular() {
    //api isteği at
    const res = await fetch(
      "https://shazam.p.rapidapi.com/charts/track",
      options
    );

    //gelen veriyi işle
    const data = await res.json();

    //class'ta tanımlanan songs değişkenine aktar
    this.songs = data.tracks;
  }
  //aratılan kelimeye uygun şarkıları al
  async searchMusic(query) {
    //api isteği at
    const res = await fetch(
      `https://shazam.p.rapidapi.com/search?term=${query}&locale=en`,
      options
    );
    //gelen cevabı işle
    const data = await res.json();

    //gelen cevabın formatını değiştir
    const formatted = data.tracks.hits.map((song) => {
      return song.track;
    });
    //gelen veriyi değişkene aktar
    this.songs = formatted;
  }
}
