import React from 'react';
import './App.css';

function Reviews(){
    //mempersiapkan data dummy JSON
    const users = [
      {
        "id": 1,
        "name": "John",
        "foto": "https://images.pexels.com/photos/2846602/pexels-photo-2846602.jpeg?cs=srgb&dl=pexels-saul-joseph-2846602.jpg&fm=jpg",
        "review": "Harga murah dan kualitas terbaik. Keren."
      },
      {
        "id": 2,
        "name": "Suzuki",
        "foto": "https://images.pexels.com/photos/2505331/pexels-photo-2505331.jpeg?cs=srgb&dl=pexels-bruno-thethe-2505331.jpg&fm=jpg",
        "review": "Kualitas terbaik. Keren."
      },
      {
        "id": 3,
        "name": "Kim",
        "foto": "https://images.pexels.com/photos/2780196/pexels-photo-2780196.jpeg?cs=srgb&dl=pexels-ivan-oboleninov-2780196.jpg&fm=jpg",
        "review": "Model Keren."
      }
    ];
  
    const listReview = users.map((itemReview) =>
      <div key={itemReview.id} className="Item">
        <img src={itemReview.foto} alt="profile" />
        <div className="User">
          <h3>{itemReview.name}</h3>
          <p>{itemReview.review}</p>
        </div>
      </div>
    );
  
    return(
      <div className="Review-box">
        <h2>Reviews</h2>
        {listReview}
      </div>
    );
  }

export default Reviews;