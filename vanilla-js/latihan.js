let s = '';
for (let i=10;i>0;i--){ //loop baris
    for (let k=0;k<i;k++){ //loop kolom
        s+='*';
    }
    s+='\n';
}
console.log(s);