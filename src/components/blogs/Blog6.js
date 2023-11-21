import React from 'react';
import './Blog6.css';

const Blog6 = () => {

    return (
        <div class="container d-flex align-items-center h-100" style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + '/images/startup.jpeg'})` }}>
        <div class="row">
          <header class="text-center col-12">
            <h1 class="text-uppercase"><strong>The biggest startup event of the year</strong></h1>
          </header>
          <div class="buffer col-12"></div>
          <section class="text-center col-12">
            <hr/>
            <a class="btn btn-primary btn-xl" href="https://mailchi.mp/aff21acb8641/startup" >Find out more</a>
          </section>
        </div>
      </div>
    );
}

export default Blog6