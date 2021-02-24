import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk/>
      <ProdukInfo name="Any Shoes" category="LEBARAN"/>
    </div>
  );
}

function FotoProduk(){
  return (
    <div className="Foto">
      <img src="bwasneaker.jpg" alt="produk"/>
    </div>
  );
}

function ProdukInfo(props){
  const {category, name} = props;
  const price = "2.999.999";
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR {price}</p>
        <p className="Info">
          One of the most recognizable shoes in the AJ Collection, the Air Jordan 3 Retro features lightweight,
          visible cushioning just like the original from the '88. Signature details and materials celebrate
          the game-changing icon.
        </p>
        <a onClick={TambahCart} href="#">Add to cart</a>
      </div>
    </div>
  );
}

function TambahCart(props){
  return console.log("Membeli produk ...");
}

export default App;
