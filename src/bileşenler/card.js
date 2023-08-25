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

  div2.textContent = makale.anabaslik;
  img.setAttribute("src", makale.yazarFoto);
  span.textContent = makale.yazarAdi + " tarafından";

  imgContainer.append(img);
  div3.append(imgContainer);
  div3.append(span);

  div.prepend(div2);
  div.append(div3);

  return div;
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
  const url = "http://localhost:5001/api/makaleler";

  axios
    .get(url)
    .then((resp) => {
      const response = resp.data.makaleler;

      for (const data in response) {
        response[data].map((secilen) => {
          selector.append(Card(secilen));
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export { Card, cardEkleyici };
