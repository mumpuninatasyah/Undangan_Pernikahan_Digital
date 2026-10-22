document.addEventListener("DOMContentLoaded", function () {
    const musik = document.getElementById("musik-undangan");
    const btnOpen = document.getElementById("btn-open");
    const body = document.body;
    const mainContent = document.querySelector("main");


    function pemicuMusikOtomatis() {
        if (musik && musik.paused) {
            musik.play().then(() => {
                - removeEventListenerOtomatis();
            }).catch(error => {
                console.log("Autoplay diblokir sementara oleh browser:", error);
            });
        }
    }

    document.addEventListener("click", pemicuMusikOtomatis);

    function removeEventListenerOtomatis() {
        document.removeEventListener("click", pemicuMusikOtomatis);
    }


     if (btnOpen) {
        btnOpen.addEventListener("click", function (e) {
            e.stopPropagation(); 

            document.getElementById("cover").classList.add("naik");
            body.classList.remove("locked");

            if (musik && musik.paused) {
                musik.play();
            }

            if (mainContent) {
                mainContent.scrollIntoView({ behavior: "smooth" });
            }
              removeEventListenerOtomatis();
        });
    }
});

const tanggalAcara = new Date("2026-12-20T09:00:00").getTime(); 

function hitungMundur() {
    const sekarang = new Date().getTime();
    const selisih = tanggalAcara - sekarang;

    if (selisih <= 0) {
        document.getElementById("hari").textContent = "00";
        document.getElementById("jam").textContent = "00";
        document.getElementById("menit").textContent = "00";
        document.getElementById("detik").textContent = "00";
        return;
    }

    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor((selisih / (1000 * 60 * 60)) % 24);
    const menit = Math.floor((selisih / (1000 * 60)) % 60);
    const detik = Math.floor((selisih / 1000) % 60);

    document.getElementById("hari").textContent = String(hari).padStart(2, "0");
    document.getElementById("jam").textContent = String(jam).padStart(2, "0");
    document.getElementById("menit").textContent = String(menit).padStart(2, "0");
    document.getElementById("detik").textContent = String(detik).padStart(2, "0");
}

hitungMundur();                   
setInterval(hitungMundur, 1000);   


const formRsvp = document.getElementById("form-rsvp");
const pesanSukses = document.getElementById("pesan-sukses");

formRsvp.addEventListener("submit", function (e) {
    e.preventDefault(); 
    
    formRsvp.reset();

    document.querySelectorAll("main > section").forEach(function (sec) {
        sec.classList.add("d-none");  });

    const halamanAkhir = document.getElementById("halaman_7");
    halamanAkhir.classList.remove("d-none");
    halamanAkhir.classList.add("tampil");

    window.scrollTo(0, 0);
    formRsvp.reset();
});

const wadahKelopak = document.getElementById("kelopak");
const jumlahKelopak = 18;   

for (let i = 0; i < jumlahKelopak; i++) {
    const petal = document.createElement("span");
    petal.className = "petal";

    const ukuran = 10 + Math.random() * 14;           
    petal.style.width = ukuran + "px";
    petal.style.height = ukuran + "px";
    petal.style.left = Math.random() * 100 + "%";     

    const durasiJatuh = 8 + Math.random() * 8;        
    const durasiGoyang = 2 + Math.random() * 3;      
    petal.style.animationDuration = durasiJatuh + "s, " + durasiGoyang + "s";
    petal.style.animationDelay = (-Math.random() * 16) + "s, 0s";  

    wadahKelopak.appendChild(petal);
}

const elemenFade = document.querySelectorAll(".fade-scroll");

const pengamat = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("terlihat");     
        } else {
            entry.target.classList.remove("terlihat");  
        }
    });
}, { threshold: 0.2 }); 

elemenFade.forEach(function (el) {
    pengamat.observe(el);
});