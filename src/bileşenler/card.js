import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  /* 
  div.prepend(div2);
  imgContainer.append(img);
  div3.append(imgContainer);
  div3.append(span)
  div.append(div3);
   */
  const fragment = document.createDocumentFragment();
  makale.forEach((e) => {
    const div = document.createElement("div");
    div.className = "card";
    const div2 = document.createElement("div");
    div2.className = "headline";

    const div3 = document.createElement("div");
    div3.className = "author";

    const imgContainer = document.createElement("div");
    imgContainer.className = "img-container";

    const img = document.createElement("img");

    const span = document.createElement("span");

    div2.textContent = e.anabaslik;
    img.setAttribute("src", e.yazarFoto);
    span.textContent = e.yazarAdi + " tarafından";

    imgContainer.append(img);
    div3.append(imgContainer);
    div3.append(span);

    div.prepend(div2);
    div.append(div3);

    fragment.appendChild(div);
  });

  return fragment;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  const selector = document.querySelector(secici);
  return selector;
};

const url = "http://localhost:5001/api/makaleler";

let allOfData = [];

axios
  .get(url)
  .then((resp) => {
    const response = resp.data.makaleler;

    for (const data in response) {
      const articles = response[data];

      for (const article of articles) {
        const newObj = {
          anabaslik: article.anabaslik,
          yazarFoto: article.yazarFoto,
          yazarAdi: article.yazarAdi,
        };
        allOfData.push(newObj);
      }
    }
    const addToCard = cardEkleyici(".cards-container");
    const allCards = Card(allOfData);
    addToCard.append(allCards);
  })
  .catch((err) => {
    console.log(err);
  });

export { Card, cardEkleyici };
