import axios from "axios";

const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //
  const div = document.createElement("div");
  div.className = "topics";

  konu.forEach((element) => {
    const div2 = document.createElement("div");
    div2.className = "tab";
    div2.textContent = element;
    div.append(div2);
  });
  return div;
};

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  const selector = document.querySelector(secici);
  return selector;
};

const url = "http://localhost:5001/api/konular";

axios
  .get(url)
  .then((resp) => {
    const allTabs = Tablar(resp.data.konular);
    const tabAdd = tabEkleyici(".tabs-container");
    tabAdd.append(allTabs);
  })
  .catch((err) => {
    console.log("sorun oluştu axios", err);
  });

export { Tablar, tabEkleyici };
