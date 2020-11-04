import React from 'react';
import { Button } from "@chakra-ui/core";

export const Paywall = () => {

  // Callback function for subscribe button click
  const subscribeAndClose = () => {
    localStorage.setItem('subscribed', 'true');
    const modal = document.querySelector('#modal');
    modal.className = 'hide';
  }

   return (
     <div id="modal" className="modal">
      <div className="overlay"></div>
      <div className="modal_content">

        <h2>Uh-Oh!</h2>
        <p>
          Looks like you've reached your limit of OnePager views. In order to keep viewing OnePagers you will have to subscribe. Don't worry, it's as easy as the click of a button!
        </p>

        <Button variantColor='green' onClick={subscribeAndClose}>Subscribe!</Button>
      </div>
     </div>
   );
};