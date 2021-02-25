import React from 'react';
import './App.css';
import ReviewItems from './Reviews';
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk/>
      <ProdukInfo name="Any Shoes" category="LEBARAN" isDiscount="yes"/>
      <ReviewItems/>
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

function CekDiskon(props) {
  const { isDiscount, discount } = props;
  if (isDiscount) {
    return (
      <p>Diskon {discount}%</p>
    );
  }else{
    return (
      <p>Tidak ada diskon</p>
    );
  }
}

function ProdukInfo(props){
  const {category, name, isDiscount} = props;
  const benefits = ["Bahan adem dan nyaman", "Sol dan jahitan kuat", "Model klasik", "Diskon", "Keren"];
  const listBenefits = benefits.map((itemBenefit) => 
    <li key={itemBenefit}>{itemBenefit}</li>
  );
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 2.999.999</p>
        <CekDiskon isDiscount={isDiscount}  discount={50} />
        <p className="Info">
          One of the most recognizable shoes in the AJ Collection, the Air Jordan 3 Retro features lightweight,
          visible cushioning just like the original from the '88. Signature details and materials celebrate
          the game-changing icon.
        </p>
        <ul>
          {listBenefits}
        </ul>
        <a onClick={(e) => TambahCart(name, e)} href="#">Add to cart</a>
      </div>
    </div>
  );
}

function TambahCart(e){
  return console.log("Membeli produk " + e);
}

CekDiskon.propTypes = {
  discount: PropTypes.number.isRequired
};

export default App;
