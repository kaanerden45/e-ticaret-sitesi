// --- 100 ADET PROFESYONEL E-TİCARET ÜRÜN VERİTABANI ---
const productsData = [
    // ELEKTRONİK (25 Adet)
    { id: 1, title: "Sony WH-1000XM5 Kulaklık", price: 4999, category: "Elektronik", description: "Endüstri lideri gürültü engelleme, olağanüstü ses kalitesi." },
    { id: 2, title: "Apple Watch Series 9", price: 14499, category: "Elektronik", description: "Gelişmiş sağlık sensörleri, parlak Retina ekran." },
    { id: 3, title: "Logitech MX Master 3S Mouse", price: 2899, category: "Elektronik", description: "Sessiz tıklama, cam üstü yüksek hassasiyetli takip." },
    { id: 4, title: "Asus ROG Strix Klavye", price: 3799, category: "Elektronik", description: "Mekanik anahtarlar, özelleştirilebilir RGB aydınlatma." },
    { id: 5, title: "JBL Charge 5 Hoparlör", price: 4299, category: "Elektronik", description: "Su geçirmez tasarım, güçlü bas ve uzun pil ömrü." },
    { id: 6, title: "Anker 20000mAh Powerbank", price: 1499, category: "Elektronik", description: "Yüksek kapasiteli hızlı şarj destekli taşınabilir batarya." },
    { id: 7, title: "Razer BlackShark V2", price: 2599, category: "Elektronik", description: "Esports odaklı ses yalıtımı ve konforlu kulak yastıkları." },
    { id: 8, title: "Samsung T7 1TB SSD", price: 3199, category: "Elektronik", description: "Işık hızında veri transferi ve darbeye dayanıklı metal kasa." },
    { id: 9, title: "Logitech C920 HD Webcam", price: 2199, category: "Elektronik", description: "1080p canlı yayın ve net görüntülü konferans kamerası." },
    { id: 10, title: "HyperX QuadCast Mikrofon", price: 3499, category: "Elektronik", description: "Yayıncılar için titreşim önleyici stantlı stüdyo mikrofonu." },
    { id: 11, title: "Dell 27 inç 165Hz Monitör", price: 7499, category: "Elektronik", description: "1ms tepki süresi ve akıcı görsel deneyim." },
    { id: 12, title: "Apple iPad Air 5. Nesil", price: 19999, category: "Elektronik", description: "M1 çip gücüyle üstün performans ve Liquid Retina ekran." },
    { id: 13, title: "Xiaomi Mi Band 8 Bileklik", price: 1199, category: "Elektronik", description: "Spor takibi, uyku monitörü ve şık AMOLED ekran." },
    { id: 14, title: "TP-Link Archer AX50 Router", price: 2399, category: "Elektronik", description: "Wi-Fi 6 teknolojisi ile kesintisiz ve hızlı internet ağı." },
    { id: 15, title: "GoPro Hero 11 Kamera", price: 12999, category: "Elektronik", description: "5.3K video kaydı ve kusursuz görüntü sabitleme." },
    { id: 16, title: "Kindle Paperwhite Okuyucu", price: 4299, category: "Elektronik", description: "Göz yormayan e-mürekkep ekran ve suya dayanıklılık." },
    { id: 17, title: "Marshall Emberton II", price: 4799, category: "Elektronik", description: "Klasik rock tarzı tasarım ve 30+ saat taşınabilir müzik." },
    { id: 18, title: "SanDisk 128GB MicroSD", price: 599, category: "Elektronik", description: "4K video kayıtları için yüksek hızlı hafıza kartı." },
    { id: 19, title: "Keychron K2 Mekanik Klavye", price: 2999, category: "Elektronik", description: "Kablosuz ve kablolu kullanım, mac/windows uyumlu." },
    { id: 20, title: "Elgato Stream Deck", price: 4199, category: "Elektronik", description: "Yayıncılar için özelleştirilebilir 15 LCD tuşlu kontrol paneli." },
    { id: 21, title: "Bose QuietComfort Ultra", price: 8999, category: "Elektronik", description: "Konforlu kafa bandı ve uzamsal ses teknolojisi." },
    { id: 22, title: "Anker Soundcore Liberty 4", price: 2799, category: "Elektronik", description: "Yüksek çözünürlüklü kablosuz kulak içi kulaklık." },
    { id: 23, title: "Razer DeathAdder V3 Pro", price: 3999, category: "Elektronik", description: "Ultra hafif, profesyonel e-spor oyuncu faresi." },
    { id: 24, title: "Philips Hue Akıllı Işık Seti", price: 3299, category: "Elektronik", description: "Telefon kontrollü milyonlarca renk seçeneği." },
    { id: 25, title: "Sony Alpha a6400 Kamera", price: 28999, category: "Elektronik", description: "Hızlı otomatik netleme ve 4K video çekim gücü." },

    // AKSESUAR (25 Adet)
    { id: 26, title: "North Face Sırt Çantası", price: 2499, category: "Aksesuar", description: "Su geçirmez dayanıklı kumaş, özel laptop bölmesi." },
    { id: 27, title: "Ray-Ban Classic Pilot Gözlük", price: 3499, category: "Aksesuar", description: "UV400 korumalı camlar, metal şık çerçeve." },
    { id: 28, title: "Minimalist Hakiki Deri Cüzdan", price: 899, category: "Aksesuar", description: "RFID kart koruması ve %100 hakiki deri yapı." },
    { id: 29, title: "Herschel Pop Quiz Çanta", price: 2199, category: "Aksesuar", description: "Geniş iç hacim ve ikonik vintage tasarım." },
    { id: 30, title: "Oakley Holbrook Gözlük", price: 3899, category: "Aksesuar", description: "Dayanıklı çerçeve ve net görüş kalitesi." },
    { id: 31, title: "Montblanc Deri Kartlık", price: 1799, category: "Aksesuar", description: "Lüks iş adamı serisi ince cep kartlığı." },
    { id: 32, title: "Samsonite Seyahat Valizi", price: 5499, category: "Aksesuar", description: "Kırılmaz polikarbonat gövde ve 360 derece tekerlekler." },
    { id: 33, title: "Fjallraven Kanken Çanta", price: 2899, category: "Aksesuar", description: "İskandinav tasarımı hafif ve dayanıklı sırt çantası." },
    { id: 34, title: "Persol Klasik Optik Çerçeve", price: 4299, category: "Aksesuar", description: "El yapımı İtalyan şıklığı ve zarif detaylar." },
    { id: 35, title: "Timberland Deri Kemer", price: 799, category: "Aksesuar", description: "Günlük kullanım için sağlam, hakiki deri kemer." },
    { id: 36, title: "Tumi Bilgisayar Çantası", price: 6999, category: "Aksesuar", description: "Profesyoneller için özel tasarlanmış korumalı çanta." },
    { id: 37, title: "Carhartt Wip Bel Çantası", price: 999, category: "Aksesuar", description: "Sokak modasına uygun su itici bel çantası." },
    { id: 38, title: "Prada Şık Anahtarlık", price: 1499, category: "Aksesuar", description: "Metal ve deri kombinasyonlu prestijli aksesuar." },
    { id: 39, title: "Nike Spor Salonu Çantası", price: 1299, category: "Aksesuar", description: "Geniş alt tabanlı ayakkabı bölmeli spor çanta." },
    { id: 40, title: "Adidas Beyzbol Şapkası", price: 499, category: "Aksesuar", description: "Pamuklu kumaş, ayarlanabilir arka bant." },
    { id: 41, title: "Under Armour Spor Eldiveni", price: 699, category: "Aksesuar", description: "Fitness ve ağırlık antrenmanları için kaymaz avuç içi." },
    { id: 42, title: "Swatch Klasik Kol Saati", price: 2499, category: "Aksesuar", description: "İsviçre tasarımı günlük renkli kol saati." },
    { id: 43, title: "Matara Termos Kılıfı", price: 399, category: "Aksesuar", description: "Darbeye dayanıklı koruyucu neopren kılıf." },
    { id: 44, title: "Hugo Boss Deri Eldiven", price: 1899, category: "Aksesuar", description: "Kış ayları için yumuşak astarlı deri eldiven." },
    { id: 45, title: "İpek Şık Boyun Atkısı", price: 999, category: "Aksesuar", description: "Zarif dokuma desenli klasik tarz atkı." },
    { id: 46, title: "Eastpak Klasik Çanta", price: 1799, category: "Aksesuar", description: "Dayanıklı okul ve günlük çanta." },
    { id: 47, title: "Carrera Vintage Gözlük", price: 2999, category: "Aksesuar", description: "Cesur tasarım hatları ve yüksek kontrastlı camlar." },
    { id: 48, title: "Pasaportluk Kılıfı", price: 599, category: "Aksesuar", description: "Seyahatleriniz için özel deri pasaport kılıfı." },
    { id: 49, title: "MagSafe Deri Cüzdan", price: 1699, category: "Aksesuar", description: "Mıknatıslı telefon arkası pratik kartlık." },
    { id: 50, title: "Unisex Örgü Bere", price: 349, category: "Aksesuar", description: "Soğuk havalar için sıcak tutan yumuşak bere." },

    // GİYİM (25 Adet)
    { id: 51, title: "Oversize Siyah Hoodie", price: 1299, category: "Giyim", description: "Üç iplik şardonlu pamuk kumaş, kanguru cep." },
    { id: 52, title: "Unisex Bomber Pilot Ceket", price: 2899, category: "Giyim", description: "Rüzgar geçirmez dış yüzey, turuncu iç astar." },
    { id: 53, title: "Levi's 501 Kot Pantolon", price: 2199, category: "Giyim", description: "Zamana meydan okuyan orijinal kesim denim." },
    { id: 54, title: "Nike Pamuklu Tişört", price: 699, category: "Giyim", description: "Günlük kullanım için rahat kesim logolu tişört." },
    { id: 55, title: "Zara Oversize Keten Gömlek", price: 1199, category: "Giyim", description: "Yaz ayları için nefes alan hafif keten kumaş." },
    { id: 56, title: "Adidas Essentials Eşofman", price: 1499, category: "Giyim", description: "Paçaları lastikli yumuşak pamuklu eşofman." },
    { id: 57, title: "The North Face Mont", price: 4999, category: "Giyim", description: "Zorlu hava koşullarına dayanıklı profesyonel mont." },
    { id: 58, title: "Lacoste Polo Yaka Tişört", price: 1899, category: "Giyim", description: "Özel dokuma pamuklu şık polo yaka." },
    { id: 59, title: "Carhartt WIP İşçi Ceketi", price: 3499, category: "Giyim", description: "Kanvas kumaş, dayanıklı ve tarz duruş." },
    { id: 60, title: "Puma Slim Fit Spor Şort", price: 799, category: "Giyim", description: "Koşu ve antrenmanlar için esnek kumaş." },
    { id: 61, title: "H&M Balıkçı Yaka Kazak", price: 1299, category: "Giyim", description: "Kış mevsimi için sıcak tutan şık kazak." },
    { id: 62, title: "Champion Sweatshirt", price: 1599, category: "Giyim", description: "Klasik kolej tarzı rahat sweatshirt." },
    { id: 63, title: "Tommy Hilfiger Gömlek", price: 2299, category: "Giyim", description: "Ofis ve günlük şıklık için poplin gömlek." },
    { id: 64, title: "Calvin Klein 3'lü Boxer", price: 899, category: "Giyim", description: "Esnek lastikli kaliteli pamuklu iç giyim." },
    { id: 65, title: "Under Armour Rüzgarlık", price: 2399, category: "Giyim", description: "Koşu sırasında terletmeyen hafif rüzgarlık." },
    { id: 66, title: "Mavi Jake Siyah Kot", price: 1799, category: "Giyim", description: "Vücudu saran esnek modern siyah denim." },
    { id: 67, title: "Columbia Polar Üst", price: 1999, category: "Giyim", description: "Outdoor aktiviteler için sıcak tutan polar kumaş." },
    { id: 68, title: "Bershka Kargo Pantolon", price: 1499, category: "Giyim", description: "Sokak modasının vazgeçilmezi bol cepli pantolon." },
    { id: 69, title: "Vans Uyumlu Çorap Seti", price: 299, category: "Giyim", description: "Yüksek kaliteli pamuklu 5'li çorap paketi." },
    { id: 70, title: "Supreme Logo Tişört", price: 999, category: "Giyim", description: "Sınırlı sayıda üretilen sokak stili tişört." },
    { id: 71, title: "Pull & Bear Şişme Mont", price: 2699, category: "Giyim", description: "Hafif yapılı sıcak tutan şişme kışlık mont." },
    { id: 72, title: "Stradivarius Blazer Ceket", price: 2199, category: "Giyim", description: "Şık kombinler için klasik kesim blazer." },
    { id: 73, title: "New Balance Sweatpant", price: 1399, category: "Giyim", description: "Evde ve sporda maksimum konfor sağlayan alt." },
    { id: 74, title: "Defacto Chino Pantolon", price: 899, category: "Giyim", description: "Günlük ve klasik şıklık sunan rahat chino." },
    { id: 75, title: "Jack & Jones Yağmurluk", price: 1899, category: "Giyim", description: "Yağmurlu günler için su itici kapşonlu ceket." },

    // EV & YAŞAM (25 Adet)
    { id: 76, title: "Stanley Quencher Termos", price: 1999, category: "Ev & Yaşam", description: "Çift duvar vakumlu yalıtım, pipetli kapak." },
    { id: 77, title: "Xiaomi LED Masa Lambası", price: 1199, category: "Ev & Yaşam", description: "Ayarlanabilir renk sıcaklığı, göz yormayan LED." },
    { id: 78, title: "Nespresso Kahve Makinesi", price: 4299, category: "Ev & Yaşam", description: "Kapsüllü sistemle hızlı ve lezzetli espresso." },
    { id: 79, title: "Jumbo Çelik Matara", price: 699, category: "Ev & Yaşam", description: "Koku yapmaz paslanmaz çelik sağlıklı matara." },
    { id: 80, title: "Bambu Kesme Tahtası", price: 499, category: "Ev & Yaşam", description: "Antibakteriyel doğal bambu mutfak gereci." },
    { id: 81, title: "Xiaomi Hava Temizleyici", price: 4799, category: "Ev & Yaşam", description: "HEPA filtre ile evinizdeki toz ve polenleri yok edin." },
    { id: 82, title: "Deri Büyük Masa Pedi", price: 399, category: "Ev & Yaşam", description: "Çalışma masanızı koruyan şık deri mousepad." },
    { id: 83, title: "Ahşap Dekoratif Duvar Saati", price: 899, category: "Ev & Yaşam", description: "Sessiz mekanizma minimal duvar saati." },
    { id: 84, title: "Ultrasonik Aroma Difüzör", price: 799, category: "Ev & Yaşam", description: "LED ışıklı oda nemlendirici ve koku yayıcı." },
    { id: 85, title: "French Press Borosilikat", price: 349, category: "Ev & Yaşam", description: "Isıya dayanıklı cam filtreli kahve demliği." },
    { id: 86, title: "Kişisel Smoothie Blender", price: 1599, category: "Ev & Yaşam", description: "Taşınabilir kapaklı pratik sporcu blenderı." },
    { id: 87, title: "Akıllı LED Şerit Işık", price: 499, category: "Ev & Yaşam", description: "Müzik duyarlı kumandalı RGB şerit LED." },
    { id: 88, title: "Visco Ortopedik Yastık", price: 1299, category: "Ev & Yaşam", description: "Boyun ağrılarını önleyen visco yastık." },
    { id: 89, title: "Porselen Fincan Takımı", price: 999, category: "Ev & Yaşam", description: "Sunumlarınız için zarif kahve fincan seti." },
    { id: 90, title: "Katlanabilir Laptop Standı", price: 599, category: "Ev & Yaşam", description: "Alüminyum ayarlanabilir ergonomik bilgisayar standı." },
    { id: 91, title: "Dijital Hassas Mutfak Tartısı", price: 299, category: "Ev & Yaşam", description: "Gramaj ölçer hassas dijital tartı." },
    { id: 92, title: "Döküm Demir Tava", price: 1799, category: "Ev & Yaşam", description: "Mükemmel mühürleme ve ısı dağılımı sağlayan döküm." },
    { id: 93, title: "Bambu Çamaşır Sepeti", price: 1199, category: "Ev & Yaşam", description: "Kumaş torbalı katlanabilir şık banyo sepeti." },
    { id: 94, title: "Kablosuz 3'ü 1 Arada Şarj", price: 1499, category: "Ev & Yaşam", description: "Telefon, saat ve kulaklığı aynı anda şarj edin." },
    { id: 95, title: "Dijital Not Defteri", price: 349, category: "Ev & Yaşam", description: "Kağıt israfını önleyen silinebilir LCD not defteri." },
    { id: 96, title: "Himalaya Tuz Lambası", price: 449, category: "Ev & Yaşam", description: "Negatif iyon yayan doğal tuz lambası." },
    { id: 97, title: "Mantar Çalışma Panosu", price: 399, category: "Ev & Yaşam", description: "Notlarınızı asabileceğiniz şık çerçeveli pano." },
    { id: 98, title: "Bitki Yetiştirme Saksısı", price: 899, category: "Ev & Yaşam", description: "Otomatik su emiş sistemli modern saksı." },
    { id: 99, title: "Termos Sefer Tası", price: 999, category: "Ev & Yaşam", description: "Yemeklerinizi sıcak tutan paslanmaz çelik kap." },
    { id: 100, title: "Manyetik Bıçak Tutucu", price: 329, category: "Ev & Yaşam", description: "Mutfakta yer kazandıran güçlü mıknatıslı askı." }
];

document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
    setupDrawerEvents();

    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get("category");

    if (categoryParam) {
        const filterButtons = document.querySelectorAll(".filter-btn");
        filterButtons.forEach(btn => {
            if (btn.textContent.trim().toLowerCase() === categoryParam.trim().toLowerCase()) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });
    }

    renderProducts();

    const searchInput = document.querySelector(".search-input");
    const filterButtons = document.querySelectorAll(".filter-btn");

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            filterProducts();
        });
    }

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener("click", function () {
                filterButtons.forEach(btn => btn.classList.remove("active"));
                this.classList.add("active");
                filterProducts();
            });
        });
    }

    // Ürün Detay Sayfası
    const productId = parseInt(urlParams.get("id"));
    if (productId && document.getElementById("detail-title")) {
        const product = productsData.find(p => p.id === productId);

        if (product) {
            document.getElementById("detail-title").textContent = product.title;
            document.getElementById("detail-price").textContent = product.price + " TL";
            document.getElementById("detail-desc").textContent = product.description;
            
            let icon = "⚡";
            if (product.category === "Aksesuar") icon = "🎒";
            if (product.category === "Giyim") icon = "👕";
            if (product.category === "Ev & Yaşam") icon = "🏠";
            
            const detailBadge = document.getElementById("detail-badge-icon");
            if(detailBadge) detailBadge.textContent = icon;
            const detailCat = document.getElementById("detail-cat-name");
            if(detailCat) detailCat.textContent = product.category;

            const addToCartBtn = document.querySelector(".add-to-cart-btn");
            if (addToCartBtn) {
                addToCartBtn.addEventListener("click", function (e) {
                    e.preventDefault();
                    const quantity = parseInt(document.getElementById("detail-qty").value) || 1;

                    let cart = JSON.parse(localStorage.getItem("cart")) || [];
                    const existingIndex = cart.findIndex(item => item.id === product.id);

                    if (existingIndex > -1) {
                        cart[existingIndex].quantity += quantity;
                    } else {
                        cart.push({
                            id: product.id,
                            title: product.title,
                            price: product.price,
                            category: product.category,
                            quantity: quantity
                        });
                    }

                    localStorage.setItem("cart", JSON.stringify(cart));
                    updateCartCount();
                    showToast(`${product.title} (${quantity} adet) sepetinize eklendi! 🛒`);
                });
            }
        } else {
            document.getElementById("detail-title").textContent = "Ürün bulunamadı!";
        }
    }

    // Sepet Sayfası ve Ödeme Modalı
    renderCartPage();

    const checkoutBtn = document.getElementById("checkout-btn");
    const checkoutModal = document.getElementById("checkout-modal");
    const closeModal = document.querySelector(".close-modal");
    const checkoutForm = document.getElementById("checkout-form");

    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", function () {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            if (cart.length === 0) {
                showToast("Sepetiniz boş! Önce sepete ürün eklemelisiniz. ⚠️");
                return;
            }
            checkoutModal.style.display = "flex";
        });
    }

    if (closeModal) {
        closeModal.addEventListener("click", function () {
            checkoutModal.style.display = "none";
        });
    }

    window.addEventListener("click", function (e) {
        if (e.target === checkoutModal) {
            checkoutModal.style.display = "none";
        }
    });

    if (checkoutForm) {
        checkoutForm.addEventListener("submit", function (e) {
            e.preventDefault();
            showToast("Tebrikler! Siparişiniz başarıyla alındı. 📦🎉");
            localStorage.removeItem("cart");
            checkoutModal.style.display = "none";
            renderCartPage();
            updateCartCount();
        });
    }
});

// --- YANDAN AÇILIR KATEGORİ MENÜSÜ FONKSİYONLARI ---
function setupDrawerEvents() {
    const openBtn = document.getElementById("open-drawer-btn");
    const closeBtn = document.getElementById("close-drawer-btn");
    const drawer = document.getElementById("sidebar-drawer");
    const overlay = document.getElementById("drawer-overlay");

    if (openBtn && drawer && overlay) {
        openBtn.addEventListener("click", function() {
            drawer.classList.add("open");
            overlay.classList.add("active");
        });
    }

    if (closeBtn && drawer && overlay) {
        closeBtn.addEventListener("click", closeDrawer);
        overlay.addEventListener("click", closeDrawer);
    }

    function closeDrawer() {
        if (drawer && overlay) {
            drawer.classList.remove("open");
            overlay.classList.remove("active");
        }
    }
}

// --- DİNAMİK VİTRİN VE RENDER FONKSİYONLARI ---
function renderProducts(productsToRender = productsData) {
    const container = document.querySelector(".product-container");
    if (!container) return;

    container.innerHTML = "";

    const isHomePage = document.querySelector(".featured-products") !== null;
    let items;

    if (isHomePage) {
        // Her yenilemede 100 ürün arasından rastgele 4 ürün seçer
        const shuffled = [...productsToRender].sort(() => 0.5 - Math.random());
        items = shuffled.slice(0, 4);
    } else {
        items = productsToRender;
    }

    const activeFilterBtn = document.querySelector(".filter-btn.active");
    if (activeFilterBtn && !isHomePage) {
        const catText = activeFilterBtn.textContent.trim();
        if (catText !== "Tümü") {
            items = items.filter(p => p.category === catText);
        }
    }

    if (items.length === 0) {
        container.innerHTML = "<p style='text-align:center; color:#9ca3af; width:100%; padding:30px;'>Aradığınız kriterlere uygun ürün bulunamadı.</p>";
        return;
    }

    items.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        let icon = "⚡";
        if (product.category === "Aksesuar") icon = "🎒";
        if (product.category === "Giyim") icon = "👕";
        if (product.category === "Ev & Yaşam") icon = "🏠";

        card.innerHTML = `
            <div class="product-badge-img">
                <span class="badge-icon">${icon}</span>
                <span class="badge-cat">${product.category}</span>
            </div>
            <h3>${product.title}</h3>
            <p class="price">${product.price} TL</p>
            <div class="card-buttons">
                <a href="detay.html?id=${product.id}" class="detail-btn">İncele</a>
                <button class="quick-add-btn" onclick="quickAddToCart(${product.id})">Sepete Ekle</button>
            </div>
        `;

        container.appendChild(card);
    });
}

function filterProducts() {
    const searchInput = document.querySelector(".search-input");
    const activeFilterBtn = document.querySelector(".filter-btn.active");

    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const selectedCategory = activeFilterBtn ? activeFilterBtn.textContent.trim() : "Tümü";

    const filtered = productsData.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === "Tümü" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    renderProducts(filtered);
}

function quickAddToCart(productId) {
    const product = productsData.find(p => p.id === productId);

    if (product) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingIndex = cart.findIndex(item => item.id === product.id);

        if (existingIndex > -1) {
            cart[existingIndex].quantity += 1;
        } else {
            cart.push({
                id: product.id,
                title: product.title,
                price: product.price,
                category: product.category,
                quantity: 1
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        showToast(`${product.title} sepetinize eklendi! 🛒`);
    }
}

function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.textContent = totalItems;
    }
}

function renderCartPage() {
    const cartContainer = document.getElementById("cart-items-container");
    const cartTotalPrice = document.getElementById("cart-total-price");
    const clearCartBtn = document.getElementById("clear-cart-btn");

    if (!cartContainer) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p style='text-align:center; color:#9ca3af; padding: 20px;'>Sepetiniz boş.</p>";
        cartTotalPrice.textContent = "0 TL";
        if (clearCartBtn) clearCartBtn.style.display = "none";
        return;
    }

    if (clearCartBtn) clearCartBtn.style.display = "inline-block";
    cartContainer.innerHTML = "";
    let grandTotal = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        grandTotal += itemTotal;

        let icon = "⚡";
        if (item.category === "Aksesuar") icon = "🎒";
        if (item.category === "Giyim") icon = "👕";
        if (item.category === "Ev & Yaşam") icon = "🏠";

        const cartItemEl = document.createElement("div");
        cartItemEl.classList.add("cart-item");
        cartItemEl.innerHTML = `
            <div style="font-size: 26px; background: #1f2937; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 6px; border: 1px solid #374151;">
                ${icon}
            </div>
            <div class="cart-item-info">
                <h3>${item.title}</h3>
                <p class="cart-price">${item.price} TL</p>
            </div>
            <div class="cart-item-qty">
                <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
                <span style="margin: 0 10px; font-weight: bold;">${item.quantity}</span>
                <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">Sil</button>
        `;
        cartContainer.appendChild(cartItemEl);
    });

    cartTotalPrice.textContent = grandTotal + " TL";
}

function changeQty(index, amount) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart[index].quantity += amount;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCartPage();
    updateCartCount();
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const title = cart[index].title;
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCartPage();
    updateCartCount();
    showToast(`${title} sepetten çıkarıldı. 🗑️`);
}

function clearCart() {
    if (confirm("Sepetinizdeki tüm ürünleri silmek istediğinize emin misiniz?")) {
        localStorage.removeItem("cart");
        renderCartPage();
        updateCartCount();
        showToast("Sepetiniz temizlendi! 🧹");
    }
}

// --- ŞIK TOAST BİLDİRİM FONKSİYONU ---
function showToast(message) {
    let container = document.querySelector(".toast-container");
    if (!container) {
        container = document.createElement("div");
        container.classList.add("toast-container");
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = `<span>🚀</span> <span>${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}
