// MENÜ TOGGLE
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.navbar-menu');
  
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  
    // Her bir menü bağlantısına tıklama olayı ekleyerek menüyü kapatıyoruz
    document.querySelectorAll('.navbar-menu a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
      });
    });
  });
  
  // KİTAP VERİLERİ
  const books = [
    {
      title: "DEVLET-İ ALİYYE Osmanlı İmparatorluğu Üzerine Araştırmalar (1-2-3-4-5) 5 Cilt Tam Takım",
      price: "1.900,00 TL",
      image: "https://static.nadirkitap.com/fotograf/2287009/39/Kitap_2024111013030422870097.jpg"
    },
    {
      title: "Phobos Harmonia & Deimos Diptedir Hakikat",
      price: "1.900,00 TL",
      image: "https://static.nadirkitap.com/fotograf/2287009/40/Kitap_20250108144045228700913.jpg"
    },
    {
      title: "SAHİH-İ BUHARİ MUHTASARI TECRİD-İ SARİH TERCEMESİ 13 CİLT TAKIM",
      price: "1.850,00 TL",
      image: "https://static.nadirkitap.com/fotograf/2287009/40/Kitap_2025021100575522870092.jpg"
    },
    {
      title: "TÜRKİYE İSTİKLAL VE HÜRRİYET MÜCADELELERİ TARİHİ / 20 CİLT TAKIM",
      price: "1.850,00 TL",
      image: "https://static.nadirkitap.com/fotograf/2287009/38/Kitap-D_20240824232227228700911.jpg"
    },
    {
      title: "Cambridge University Grammar In Use 3'lü Set-with answers and CD-ROM",
      price: "1.750,00 TL",
      image: "https://static.nadirkitap.com/fotograf/2287009/39/Kitap_2024111018185722870098.jpg"
    },
    {
      title: "Feigin and Cherry's Textbook of Pediatric Infectious Diseases",
      price: "1.750,00 TL",
      image: "https://static.nadirkitap.com/fotograf/2287009/38/Kitap_2024090511032422870098.jpg"
    },
    {
      title: "SAHİH'İ BUHARİ MUHTASARI TECRİD-İ SARİH TERCEMESİ VE ŞERHİ 13 CİLT TAKIM",
      price: "1.750,00 TL",
      image: "https://static.nadirkitap.com/fotograf/2287009/39/Kitap_20241130222907228700912.jpg"
    },
    {
      title: "Türk İmparatorluğunun Paylaşılması Hakkında Yüz Proje ( 1281-1913 ) 18 adet haritalı",
      price: "1.750,00 TL",
      image: "https://static.nadirkitap.com/fotograf/2287009/40/Kitap_2025021514164222870094.jpg"
    },
    {
      title: "Evrimin Dört Boyutu - Yaşam Tarihinde Genetik, Epigenetik, Davranışsal ve Simgesel Değişimler [GENİŞLETİLMİŞ 3.BASKI]",
      price: "1.600,00 TL",
      image: "https://static.nadirkitap.com/fotograf/2287009/39/Kitap_2024111017432622870092.jpg"
    },
    {
      title: "T.B.M.M. Gizli Celse Zabıtları - 4 CİLT TAKIM",
      price: "1.150,00 TL",
      image: "https://static.nadirkitap.com/fotograf/2287009/40/Kitap_2025021101114022870099.jpg"
    }
    // Diğer kitaplar...
  ];
  
  const rareBooks = [
    {
      title: "LA GRANDE ENCYCLOPEDIE LA INVENTAIRE RAISONNE Des Sciences, Des Lettres Et Des Arts",
      price: "23.500,00 TL",
      image: "https://static.nadirkitap.com/fotograf/2287009/38/Kitap_20240901145326228700912.jpg"
    },
    {
      title: "İNKILAP VE KADRO - BİLGİ YAYINLARI 1. BASIM (2.BASKI)-YAZARINDAN MİLLİ ŞEF İSMET İNÖNÜ'YE İTHAFLI-İMZALI",
      price: "8.950,00 TL",
      image: "https://static.nadirkitap.com/fotograf/2287009/38/Kitap_20240812115849228700911.jpg"
    },
    {
      title: "OSMANLICA ORiJİNAL 1927 BASKILI NUTUK+NUTUK VESİKALARI İKİ CİLT TAKIM",
      price: "8.500,00 TL",
      image: "https://static.nadirkitap.com/fotograf/2287009/39/Kitap-D_20241209161939228700912.jpg"
    },
    {
      title: "Descartes-ciltli şömizli-İLK BASKI",
      price: "7.900,00 TL",
      image: "https://static.nadirkitap.com/fotograf/2287009/39/Kitap_20241019184452228700911.jpg"
    },
    {
      title: "KIERKEGAARD (Ciltli,Şömizli)",
      price: "5.000,00 TL",
      image: "https://static.nadirkitap.com/fotograf/2287009/39/Kitap_2024101918455422870099.jpg"
    },
    {
      title: "Ceza Kanunu Şerhi -4 Cilt Takım-MAJNO",
      price: "4.950,00 TL",
      image: "https://static.nadirkitap.com/fotograf/2287009/40/Kitap_2025021100531422870099.jpg"
    },
    {
      title: "ROCKWOOD VE GREEN ERİŞKİN KIRIKLARI,ÇOCUK KIRIKLARI",
      price: "4.950,00 TL",
      image: "https://static.nadirkitap.com/fotograf/2287009/40/Kitap-D_20241224213623228700913.jpg"
    },
    {
      title: "LA GRANDE ENCYCLOPEDIE LA INVENTAIRE RAISONNE Des Sciences, Des Lettres Et Des Arts 9.CİLT CANARIES CERATOSOMA",
      price: "4.900,00 TL",
      image: "https://static.nadirkitap.com/fotograf/2287009/38/Kitap_2024090114575922870094.jpg"
    },
    {
      title: "John Locke(Ciltli, Şömizli)",
      price: "4.000,00 TL",
      image: "https://static.nadirkitap.com/fotograf/2287009/39/Kitap_2024101918422122870098.jpg"
    },
    {
      title: "Harry Potter 7 Kitap Set + HARRY POTTER VE LANETLİ ÇOCUK",
      price: "1.950,00 TL",
      image: "https://static.nadirkitap.com/fotograf/2287009/40/Kitap_2025021412491222870095.jpg"
    }
    // Diğer nadir kitaplar...
  ];
  
  // KİTAP OLUŞTURMA
  function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.innerHTML = `
      <img class="book-image" src="${book.image}" alt="${book.title}">
      <div class="book-details">
        <h3 class="book-title">${book.title}</h3>
        <div class="book-price">${book.price}</div>
      </div>
    `;
    return card;
  }
  
  // KİTAPLARI YÜKLE
  function loadBooks() {
    const bookContainer = document.getElementById('bookList');
    const rareContainer = document.getElementById('rareBookList');
  
    books.forEach(book => {
      bookContainer.appendChild(createBookCard(book));
    });
    rareBooks.forEach(book => {
      rareContainer.appendChild(createBookCard(book));
    });
  }
  
  // HARİTA
  function initMap() {
    ymaps.ready(function() {
      const map = new ymaps.Map('map', {
        center: [39.920231, 32.855226],
        zoom: 15
      });
      
      const placemark = new ymaps.Placemark([39.920231, 32.855226], {
        hintContent: 'Atılgan Sahaf',
        balloonContent: 'Karanfil Sokak No:5/26 Kızılay/Ankara'
      });
      
      map.geoObjects.add(placemark);
    });
  }
  
  // SAYFA YÜKLENDİĞİNDE
  window.onload = function() {
    loadBooks();
    initMap();
  };
  