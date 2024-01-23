import React from "react";

function footer(){
    return(
<div>
<footer className="text-center p-4">
    <div className="contianer">
        <div className="row">
            <div className="col-md-12"></div>
            <a
        data-mdb-ripple-init
        className="btn btn-link btn-floating btn-lg text-body m-auto p-4"
        href="#!"
        role="button"
        data-mdb-ripple-color="light" ><i className="fab fa-github"></i ></a>
            <div className="col-md-12">
                <h5>© Your Website 2022. All Rights Reserved.</h5>
            </div>
        </div>
    </div>
</footer>
</div>
    )
}
export default footer;