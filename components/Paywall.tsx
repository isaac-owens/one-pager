import React from 'react';

export const Paywall = () => {
   return (
     <div className="modal">
      <div className="overlay"></div>
      <div className="modal_content">

        <h2>Hey Awesome Modal!</h2>
        <p>
          Cupcake ipsum dolor sit amet pie brownie. Carrot cake wafer I love pie bear claw. Sweet cake cheesecake candy canes carrot cake marshmallow. Sweet roll I love sweet fruitcake donut chupa.
        </p>

        <button title="Close" className="close_modal">
          <i className="fas fa-times"></i>
        </button>
      </div>
     </div>
   );
};