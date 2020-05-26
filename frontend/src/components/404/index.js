import React from 'react';
import './404.scss';
import Footer from '../Footer';

// 404 component

const ErrorPage = () => (

  <div className="page_404">
    <div className="container">
      <div className="row">	
        <div className="col-sm-12 ">
          <div className="col-sm-10 col-sm-offset-1  text-center">
            <div className="four_zero_four_bg">
              <h1 className="text-center ">404</h1>
            </div>
            <div className="contant_box_404">
              <h3 className="h2">T'es perdu ?</h3>
              <p>Tu veux revenir sur la page d'acceuil ?</p>
              <a href="/" className="link_404">Page d'accueil</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>

);

export default ErrorPage;