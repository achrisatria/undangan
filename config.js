/*
  EDIT DATA PELANGGAN DI FILE INI SAJA.
  Isi teks di antara tanda kutip. Jangan hapus tanda kutip atau koma.
*/
window.INVITATION = {
  // Identitas pasangan
  groomName: "Nama Mempelai Pria",
  brideName: "Nama Mempelai Wanita",
  groomFullName: "Nama Lengkap Mempelai Pria",
  brideFullName: "Nama Lengkap Mempelai Wanita",

  // Orang tua (boleh dikosongkan jika tidak ingin ditampilkan)
  groomParents: "Putra dari Bapak ... dan Ibu ...",
  brideParents: "Putri dari Bapak ... dan Ibu ...",

  // Acara
  eventDate: "18 Desember 2026",
  eventDateShort: "18 · 12 · 2026",
  eventDateISO: "2026-12-18T09:00:00+07:00", // format: YYYY-MM-DDTHH:mm:ss+07:00
  eventDay: "Jumat",
  eventTime: "09.00 WIB – selesai",
  eventType: "Akad Nikah",
  addressLines: [
    "Jl. Contoh No. 123",
    "Kecamatan, Kota, Provinsi"
  ],
  mapsUrl: "https://www.google.com/maps",

  // Pilihan teks: "announcement" untuk pemberitahuan, "intimate" untuk undangan akad terbatas
  invitationMode: "announcement",
  announcementText: "Prosesi akad nikah akan dilaksanakan secara sederhana dan terbatas bersama keluarga serta kerabat terdekat, tanpa penyelenggaraan resepsi pernikahan. Halaman ini kami bagikan sebagai pemberitahuan kabar bahagia sekaligus permohonan doa restu.",

  // Wedding gift: isi nomor rekening dan nama pemilik. Hapus bank kedua jika tidak dipakai.
  bankAccounts: [
    { bank: "BANK", number: "0000000000", owner: "Nama Pemilik Rekening" },
    { bank: "BANK KEDUA", number: "1111111111", owner: "Nama Pemilik Rekening" }
  ],

  // Kalimat dan tampilan
  openingTitle: "THE WEDDING ANNOUNCEMENT",
  openingButton: "Buka Undangan",
  quote: "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan pasangan-pasangan untukmu...",
  quoteReference: "QS. Ar-Rum: 21",
  theme: "rustic" // pilihan saat ini: rustic
};
