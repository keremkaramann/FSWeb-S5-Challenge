const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //

  const div = document.createElement("div");
  div.className = "header";

  const span1 = document.createElement("span");
  span1.className = "date";
  span1.textContent = tarih;

  const header = document.createElement("h1");
  header.textContent = baslik;

  const span2 = document.createElement("span");
  span2.className = "date";
  span2.textContent = yazi;

  div.appendChild(span1);
  div.appendChild(header);
  div.appendChild(span2);

  return div;
};

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

  const selector = document.querySelector(secici);
  const createDiv = Header(
    "SAMUEL L. IPSUM",
    "25 Ağustos Cuma",
    "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men."
  );
  selector.append(createDiv);
};

export { Header, headerEkleyici };
