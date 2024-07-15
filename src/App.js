import React from "react";

import {Navbar,Hero,PopularProducts,SuperQuality,Services,SpecialOffer,CustomerReviews,Subscirbe,Footer}from './components'



function App() {
  return (
    <main className="realative">
      <Navbar/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding">
        <PopularProducts/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding">
        <Services/>
      </section>
      <section className="padding-x">
        <SpecialOffer/>
      </section>
      <section className=" bg-pale-blue padding">
        <CustomerReviews/>
      </section>
      <section className="padding-x sm:py-32 pw-16 w-full">
        <Subscirbe/>
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
    </main>
  );
}

export default App;
