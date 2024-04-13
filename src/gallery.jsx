import React from 'react';

function Gallery() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">E-Commerce</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-toggle="modal" data-target="#loginModal">Login</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <h1>Gallery</h1>
        <div className="row">
          <div className="col-md-4">
            <img src="https://hips.hearstapps.com/hmg-prod/images/orange-1558624428.jpg" className="gallery-img" alt="Image 1" />
          </div>
          <div className="col-md-4">
            <img src="https://static01.nyt.com/images/2018/05/23/dining/23fruit/23fruit-videoSixteenByNineJumbo1600.jpg" className="gallery-img" alt="Image 2" />
          </div>
          <div className="col-md-4">
            <img src="https://post.healthline.com/wp-content/uploads/2021/05/mango-bowl-fruit-1296x728-body.jpg" className="gallery-img" alt="Image 3" />
          </div>
        </div>
      </div>
      <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">Login</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" id="username" placeholder="Enter your username" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
