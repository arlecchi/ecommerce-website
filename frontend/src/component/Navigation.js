
const Navigation = ()=>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="#">MerchVerse</a>
                <li className="ms-auto me-2 d-flex align-items-center d-lg-none">
                    <button className="btnIcon mx-2">
                        <i class="bi bi-bag position-relative">
                            <div className="circleBadge position-absolute top-0 end-0 transform-translate-middle"></div>
                        </i>
                    </button>
                </li>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                    <a className=" nav-link mx-2 active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className=" nav-link mx-2" href="#">Category</a>
                    </li>
                    <li className="nav-item">
                    <a className=" nav-link mx-2" href="#">Product</a>
                    </li>
                    <li className="d-lg-flex align-items-center d-none">
                        <button className="btnIcon mx-2">
                            <i class="bi bi-bag position-relative">
                                <div className="circleBadge position-absolute top-0 end-0 transform-translate-middle"></div>
                            </i>
                        </button>
                    </li>
                </ul>
                <div className="d-flex btnWrapper mt-lg-0 mt-5">
                    <button className="w-100 secondaryBtn" >Sign In</button>
                    <button className="w-100 primaryBtn">Login</button>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation