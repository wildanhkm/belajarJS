let i = 1,
    operate = 6;
    total = 10;

for (i = 1; i <= 10; i++){
    if(i <= 6 && i != 5){
        console.log('Angkot No.'+ i + ' beroperasi dengan baik');
    }else if(i == 5 || i == 8 || i == 10){
        console.log('Angkot No.'+ i + ' sedang lembur');
    }else{
        console.log('Angkot No.'+ i + ' tidak beroperasi');
    }
}