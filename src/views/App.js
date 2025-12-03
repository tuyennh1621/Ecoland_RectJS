import ecoLogo from "../assets/images/logo_eco_land.png";
import sliderEco from "../assets/images/slider-eco.jpg";
import RealEstateSearch from "../components/RealEstateSearch";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={ecoLogo} alt="EcoLand" className="me-2" />
          </a>

          {/* Hamburger toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Trang chủ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Nhà đất bán
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Nhà đất cho thuê
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Videos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Dự án
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tin tức
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Giới thiệu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Liên hệ
                </a>
              </li>
            </ul>
            {/* Right side */}
            <div className="d-flex align-items-center gap-3">
              <div className="position-relative">
                <i className="fa-regular fa-bell fa-lg"></i>
                <span className="badge">5</span>
              </div>
              <div className="position-relative">
                <i className="fa-regular fa-heart fa-lg"></i>
                <span className="badge">0</span>
              </div>
              <div className="d-flex align-items-center gap-2 nav-action-right">
                <a href="#">Đăng nhập</a>
                <span className="text-muted">|</span>
                <a href="#">Đăng ký</a>
              </div>
              <button className="btn btn-add-news">Đăng tin</button>
            </div>
          </div>
        </div>
      </nav>
      <div className="container-fluid p-0 hero-image">
        <div className="search-land">
          <RealEstateSearch />
        </div>
        <img src={sliderEco} alt="Slider Eco" />
      </div>
    </div>
  );
}

export default App;
