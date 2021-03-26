let penumpang = [];
const tambahPenumpang = (nama, array) => {
  if (array.length == 0) {
    array.push(nama);
    return array;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == undefined) {
        array[i] = nama;
        return array;
      } else if (array[i] == nama) {
        console.log(`Penumpang bernama ${nama} sudah ada di dalam angkot`);
        return array;
      } else if (i == array.length - 1) {
        array.push(nama);
        return array;
      }
    }
  }
};

const hapusPenumpang = (nama, array) => {
  if (array.length == 0) {
    return console.log("Angkot masih kosong");
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == nama) {
        array[i] = undefined;
        return array;
      } else if (i == array.length - 1) {
        return console.log(
          `Penumpang bernama ${nama} tidak ada di dalam angkot`
        );
      }
    }
  }
};
