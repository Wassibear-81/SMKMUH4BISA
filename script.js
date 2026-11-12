/* ==========================================================
   DATA ANGGOTA – edit di sini saja.
   Ganti "foto" dengan nama file di folder assets/
   (contoh: "assets/raska.jpg").
   ========================================================== */
const members = [
  {
    nama: "Tito Maulidana",
    umur: "18 Tahun",
    kelas: "XII TKJ 3",
    hobi: "Street Art",
    minat: "Sepak Bola",
    intro:
      "Kenalin Gue Tito! Gue suka street art dan punya ketertarikan sama dunia bola juga .",
    detail:
      "Gue tertarik banget sama seni dan suka banget ngikutin bola terutama JACK MANIA BOS",
    // Isi username/nomor saja. Kosongkan ("") atau hapus baris yang tidak dipakai.
    sosmed: {
      instagram: "titodunham_",
      whatsapp: "6285891056250",
      tiktok: "",
      github: "",
      email: "",
    },
    foto: "assets/tito.jpg",
  },
  {
    nama: "Zen Alfachri",
    umur: "18 Tahun",
    kelas: "XII TKJ 3",
    hobi: "Doyan Tidur",
    minat: "Berorganisasi sampe amnesia",
    intro:
      "Siapa si yang gatau ketum IPM yang ganteng ini,Kenalin ini zen yang suka gangguin orang dan sering tidur.Tapi keren anjr jadi danton paskibraka dan ketum IPM.",
    detail: "Si Tampan Dari Kelapa Dua",
    sosmed: {
      instagram: "alfchri12_",
      whatsapp: "6283142086463",
      tiktok: "zen.alfachri08",
      github: "",
      email: "",
    },
    foto: "assets/zen.jpg",
  },
  {
    nama: "Panji Erlangga Pradita",
    umur: "17 Tahun",
    kelas: "XII TKJ 3",
    hobi: "WIBU BAU BAWANG",
    minat: "Katanya si mau jadi anime biar ngerasain betapa auranya dia anjay",
    intro:
      "Kenalin ini Panji. Si pendiem di kelas tapi sekalinya ngomong bikin getar semua kelas. Dia juga jago ngedit,Kreatif,ngelawak. mirip dapon jir ",
    detail: "mirip yohan dapon jir",
    sosmed: {
      instagram: "panjiiid",
      whatsapp: "6285892801785",
      tiktok: "can_we22",
      github: "",
      email: "",
    },
    foto: "assets/panji.jpg",
  },
  {
    nama: "Arda Hamizan",
    umur: "18 Tahun",
    kelas: "XII TKJ 3",
    hobi: "Hiking",
    minat: "Pengen tektok rinjani",
    intro:
      "Kenalin ini arda atau yang disebut juga acung, paling rusuh berisik di kelas tapi kadang juga tidur mulu sama bocah ipm juga. Dan dia juga hobi naik gunung kalo ada yang butuh dampingin call acung ae anjas ntar dia open trip acungtrip WKWK.",
    detail: "ngeselin ni orang berak",
    sosmed: {
      instagram: "_4rdaahmznnn  ",
      whatsapp: "",
      tiktok: "",
      github: "",
      email: "",
    },
    foto: "assets/arda.jpg",
  },
  {
    nama: "Fahri Ramadhan Witarsa",
    umur: "18 Tahun",
    kelas: "12 TKJ 3",
    hobi: "Futsal",
    minat: "Mau jadi pemain bola hebat",
    intro:
      "Kenalin bintang tamu tkj 3 bonasek/bonek, Die salah satu paling nyebelin di kelas dan selalu ngerusuh gapernah diem. Tapi kalo gada die kelas sunyi banget wkwk",
    detail: "mau jadi martin paes",
    sosmed: {
      instagram: "f4hri555",
      whatsapp: "85779410668",
      tiktok: "",
      github: "",
      email: "",
    },
    foto: "assets/Fahri.jpg",
  },
  {
    nama: "Alfandy Nopeheriansyah",
    umur: "18 Tahun",
    kelas: "12 TKJ 3",
    hobi: "Main Roleplay",
    minat: "Pengen roleplay tiap hari sampe jiwanya masuk monitor aowkoakwok",
    intro:
      "Kenalin ini alfandy atau biasa dipanggil panboy, Dia dikelas sok misterius dipanggil ga nengok pendiem yagitudah.",
    detail: "jiwa gengster",
    sosmed: { instagram: "", whatsapp: "", tiktok: "", github: "", email: "" },
    foto: "assets/Alfandy.jpg",
  },
  {
    nama: "Raska Adithya",
    umur: "17 Tahun",
    kelas: "12 TKJ 3",
    hobi: "Main game",
    minat: "Bakat dia cuman main game tapi ga terlalu bego lah wkwk",
    intro:
      "Perkenalkan ini Raska, disebut juga boler (botak plenger) dia dikelas kadang berisik rusuh atau tidur mulu jir aneh juga ni orang sering di obok-obok ama temennya wkwk .",
    detail: "mau sukses",
    sosmed: {
      instagram: "rre2ka4",
      whatsapp: "85741535559",
      tiktok: "khaanjudd",
      github: "",
      email: "",
    },
    foto: "assets/raska.jpg",
  },
];

/* ---------- Helper ---------- */
const $ = (id) => document.getElementById(id);
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );

/* ---------- Render lingkaran hero ---------- */
const orbit = $("orbit");
orbit.innerHTML = members
  .map(
    (m, i) => `
  <button type="button" class="orbit__item" data-index="${i}" aria-label="Lihat profil ${esc(m.nama)}">
    <img src="${esc(m.foto)}" alt="Foto ${esc(m.nama)}">
  </button>`,
  )
  .join("");

/* ---------- Render kartu anggota ---------- */
$("cards").innerHTML = members
  .map(
    (m, i) => `
  <article class="card">
    <div class="card__photo"><img src="${esc(m.foto)}" alt="Foto ${esc(m.nama)}" loading="lazy"></div>
    <h3>${esc(m.nama)}</h3>
    <p class="card__meta">${esc(m.umur)} &middot; ${esc(m.kelas)}</p>
    <dl class="card__list">
      <div><dt>Hobi</dt><dd>${esc(m.hobi)}</dd></div>
      <div><dt>Minat</dt><dd>${esc(m.minat)}</dd></div>
    </dl>
    <p class="card__intro">${esc(m.intro)}</p>
    <button type="button" class="btn" data-index="${i}">Kenalan Lebih Dekat</button>
  </article>`,
  )
  .join("");

/* ---------- Sosial media ----------
   Mau tambah platform baru? Tambahkan satu baris di SOSMED:
   kunci (dipakai di data anggota), label tombol, dan fungsi pembuat link. */
const SOSMED = {
  instagram: {
    label: "Instagram",
    url: (v) =>
      "https://instagram.com/" + encodeURIComponent(v.replace(/^@/, "")),
  },
  whatsapp: {
    label: "WhatsApp",
    url: (v) => {
      let n = v.replace(/\D/g, "");
      if (n.startsWith("0")) n = "62" + n.slice(1); // 0812... -> 62812...
      return "https://wa.me/" + n;
    },
  },
  tiktok: {
    label: "TikTok",
    url: (v) =>
      "https://tiktok.com/@" + encodeURIComponent(v.replace(/^@/, "")),
  },
  github: {
    label: "GitHub",
    url: (v) => "https://github.com/" + encodeURIComponent(v),
  },
  email: { label: "Email", url: (v) => "mailto:" + v },
};

function renderSocial(sosmed = {}) {
  const box = $("modalSocial");
  const links = Object.keys(SOSMED)
    .filter((k) => sosmed[k] && String(sosmed[k]).trim())
    .map(
      (k) =>
        `<a href="${esc(SOSMED[k].url(String(sosmed[k]).trim()))}" target="_blank" rel="noopener noreferrer">${SOSMED[k].label}</a>`,
    );
  $("modalLinks").innerHTML = links.join("");
  box.hidden = links.length === 0; // sembunyikan bagian ini jika tidak ada kontak
}

/* ---------- Modal profil ---------- */
const modal = $("modal");

function openModal(i) {
  const m = members[i];
  if (!m) return;
  $("modalPhoto").src = m.foto;
  $("modalPhoto").alt = "Foto " + m.nama;
  $("modalName").textContent = m.nama;
  $("modalMeta").textContent = m.umur + " · " + m.kelas;
  $("modalHobi").textContent = m.hobi;
  $("modalMinat").textContent = m.minat;
  $("modalIntro").textContent = m.intro;
  $("modalDetail").textContent = m.detail || m.intro;
  renderSocial(m.sosmed);
  modal.showModal();
  document.body.classList.add("lock");
}

function closeModal() {
  modal.close();
}

document.addEventListener("click", (e) => {
  const trigger = e.target.closest("[data-index]");
  if (trigger) openModal(Number(trigger.dataset.index));
});
$("modalClose").addEventListener("click", closeModal);
// klik area gelap di luar kotak modal untuk menutup
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
// tombol Esc ditangani otomatis oleh <dialog>; bersihkan lock scroll saat tertutup
modal.addEventListener("close", () => document.body.classList.remove("lock"));

/* ---------- Navbar responsif ---------- */
const toggle = $("navToggle");
const menu = $("navMenu");

function setMenu(open) {
  menu.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
}
toggle.addEventListener("click", () =>
  setMenu(!menu.classList.contains("open")),
);
menu
  .querySelectorAll("a")
  .forEach((a) => a.addEventListener("click", () => setMenu(false)));
window.addEventListener("resize", () => {
  if (window.innerWidth > 720) setMenu(false);
});

/* ---------- Footer ---------- */
$("year").textContent = new Date().getFullYear();
