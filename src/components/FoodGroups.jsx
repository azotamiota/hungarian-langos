import React from "react";

export default function FoodGroups() {
  return <>
  <div id='food-groups' className='products'>
      <header className='services-header'><span className='red-letters'>Mi kap</span><span className='green-letters'>hato nalunk</span></header>
      <p id='services-description'>Ide johet valami altalanos leiras az etelekrol, italokrol...pl, hogy foleg magyaros eteleket kinalunk, es lehet kapni meggy markat :) </p>
      <div className="cards-class">
        <div className="card">
          <div className="services-logo"><i className="fa-lg fa-solid fa-utensils"></i></div>
          <div className="card-description">Ide johet a szoveg az elerheto gyorsetelerol, pl a langosrol nehany mondatban</div>
          <div className="button">Mutasd</div>
        </div>
        <div className="card">
          <div className="services-logo" style={{color: 'green'}}><i className="fa-lg fa-solid fa-bowl-food"></i></div>
          <div className="card-description">Ide mondjuk johet a szoveg az egytaletelekrol, pl szekely kaposzta es tarsai</div>
          <div className="button">Mutasd</div>
        </div>
        <div className="card">
          <div className="services-logo"><i className="fa-lg fa-solid fa-champagne-glasses"></i></div>
          <div className="card-description">Ide pedig az elerheto hideg es forro italokrol johet a szoveg</div>
          <div className="button">Mutasd</div>
        </div>
      </div>
  </div>;
  </>
}
