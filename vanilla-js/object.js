//Object literal
// const mahasiswa = {
//   nama: "me",
//   nim: "12345",
//   email: "me@me.com",
//   halo: function () {
//     console.log(this);
//     // this mengembalikan object yg bersangkutan
//   },
// };
// mahasiswa.halo();

//Object function declaration
// function buatObjMhs(nama, nim, email) {
//   let mhs = {};
//   mhs.nama = nama;
//   mhs.nim = nim;
//   mhs.email = email;
//   return mhs;
// }

//Object function constructor
// function Mahasiswa(nama, nim, email) {
//   this.nama = nama;
//   this.nim = nim;
//   this.email = email;
// }
// function Halo() {
//   console.log("halo");
//   console.log(this);
//   this pada function constructor mengembalikan object yg baru dibuat di line 40
// }

// let me = buatObjMhs("me", "123542", "me@me.com");
// let you = new Mahasiswa("you", "12345", "you@you.com");

//konsep this
//this adalah keyword spesial yang didefinisikan secara otomatis pada setiap function atau object
// this adalah window di scope global
// new Halo();

function Angkot(supir, trayek, penumpang, kas) {
  this.supir = supir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = (nama) => {
    this.penumpang.push(nama);
    return this.penumpang;
  };

  this.penumpangTurun = (nama, bayar) => {
    if (this.penumpang.length === 0) {
      console.log("Angkot masih kosong");
      return false;
    } else {
      for (let i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] == nama) {
          this.penumpang[i] = undefined;
          this.kas += bayar;
          return this.penumpang;
        }
      }
    }
  };
}

let angkot1 = new Angkot("Sandhika", ["Cicaheum", "Cibiru"], [], 0);
