import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-body-tertiary text-center text-lg-start text-light">
  
  <div class="container p-4 pb-0">
    <form action="">
    
      <div class="row">
        
        <div class="col-auto mb-4 mb-md-0">
          <p class="pt-2">
            <strong>Sign up for our newsletter</strong>
          </p>
        </div>
        
        <div class="col-md-5 col-12 mb-4 mb-md-0">
        
          <div data-mdb-input-init class="form-outline mb-4">
            <input type="email" id="form5Example22" class="form-control" />
            <label class="form-label" for="form5Example22">Email address</label>
          </div>
        </div>
        <div class="col-auto mb-4 mb-md-0">
       
          <button data-mdb-ripple-init type="button" class="btn btn-primary mb-4">
            Subscribe
          </button>
        </div>

      </div>

    </form>
  </div>
 
  <div class="text-center p-3" >
    © 2020 Copyright:
    <a class="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  
</footer>
    </div>
  )
}

export default Footer