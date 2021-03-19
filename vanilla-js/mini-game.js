var tanya = true;
while (tanya) {
  //Mengambil input player
  var player = prompt("Pilih: gajah, semut, orang");

  //Mengambil input komputer
  //Membangkitkan bilangan acak
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.36 && comp < 0.66) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  var hasil = "";
  //Menentukan aturan
  if (player == comp) {
    hasil = "SERI";
  } else if (player == "gajah") {
    hasil = comp == "orang" ? "MENANG" : "KALAH";
  } else if (player == "orang") {
    hasil = comp == "semut" ? "MENANG" : "KALAH";
  } else if (player == "semut") {
    hasil = comp == "orang" ? "KALAH" : "MENANG";
  } else {
    hasil = "memasukkan pilihan yang salah";
  }

  //Tampilkan hasil
  alert(
    "Kamu memilih " +
      player +
      " dan komputer memilih " +
      comp +
      "\nMaka hasilnya kamu " +
      hasil
  );

  tanya = confirm("Main lagi?");
}

alert("terima kasih sudah bermain");
