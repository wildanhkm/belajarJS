let kesempatan = 1;
let k = kesempatan <= 3 ? true : false;
while (k) {
  let sisa = 3 - kesempatan;
  //ambil input user
  let player = prompt("Tebak angka antara 1 sampai 10 \nAngka pilihan:");

  //buat angka acak
  let random = Math.floor(Math.random() * 10) + 1;

  //buat aturan tebak angka
  let hasil = "";
  if (player == random) {
    hasil = "Anda benar";
    k = false;
  } else if (player < random) {
    hasil = "TERLALU RENDAH \nAnda memiliki kesempatan " + sisa;
    kesempatan++;
  } else if (player > ranodm) {
    hasil = "TERLALU TINGGI \nAnda memiliki kesempatan " + sisa;
    kesempatan++;
  } else {
    hasil = "Anda tidak memilih angka \nAnda memiliki kesempatan " + sisa;
    kesempatan++;
  }
  alert(hasil);

  if (kesempatan > 3) {
    alert("Anda kehabisan kesempatan \nAngka yang dicari adalah " + random);
    k = false;
  }
}
