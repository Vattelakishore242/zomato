import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-danger text-white p-2">


        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="/vite.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top " />
            QuickCrave
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#"></a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Register</a>
              </li>
              
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
