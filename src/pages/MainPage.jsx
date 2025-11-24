import { Link } from "react-router-dom";
import "./MainPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MainPage() {
  return (
    <>
      <div className="main-page">
        <header className="header-section">
          <h1 className="header-title">Teknolojik Yemekler</h1>
          <p className="header-subtitle">fırsatı kaçırma</p>
          <p className="header-message">
            <span>KOD</span> <span>ACIKTIRIR</span>
            <br />
            <span>PIZZA,</span> <span>DOYURUR</span>
          </p>

          
          <Link className="header-button" to="/Order">
            ACIKTIM
          </Link>
        </header>

        <nav className="nav-bar">
          <ul>
            <li>
              <a href="/Order">
                <img src="/assets/iteration-2/icons/1.svg" alt="korean" />
                YENİ! Kore
              </a>
            </li>
            <li>
              <a href="/Order">
                <img src="/assets/iteration-2/icons/2.svg" alt="pizza" />
                Pizza
              </a>
            </li>
            <li>
              <a href="/Order">
                <img src="/assets/iteration-2/icons/3.svg" alt="burger" />
                Burger
              </a>
            </li>
            <li>
              <a href="/Order">
                <img src="/assets/iteration-2/icons/4.svg" alt="kızartmalar" />
                Kızartmalar
              </a>
            </li>
            <li>
              <a href="/Order">
                <img src="/assets/iteration-2/icons/5.svg" alt="fast food" />
                Fast Food
              </a>
            </li>
            <li>
              <a href="/Order">
                <img
                  src="/assets/iteration-2/icons/6.svg"
                  alt="gazlı içecekler"
                />
                Gazlı İçecekler
              </a>
            </li>
          </ul>
        </nav>

        <section className="container">
          <div className="ozel-lezzetus">
            <h1>
              Özel <br />
              Lezzetus
            </h1>
            <h4>Position:Absolute Acı Burger</h4>
            <Link to="/Order" className="siparis-btn">
              SİPARİŞ VER
            </Link>
          </div>

          <div className="right-container">
            <div className="hackathlon">
              <h1>
                Hackathlon <br />
                Burger Menu
              </h1>
              <Link className="siparis-btn" to="/Order">
                SİPARİŞ VER
              </Link>
            </div>

            <div className="kurye">
              <h1>
                <span className="renk">Çooook</span> hızlı <br />
                npm gibi kurye
              </h1>
              <Link className="siparis-btn" to="/Order">
                SİPARİŞ VER
              </Link>
            </div>
          </div>
        </section>

        <div className="menus">
          <h3>en çok paketlenen menüler</h3>
          <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
        </div>

        <div className="button-container">
          <Link className="btn-btn" to="/Order">
            <img src="/assets/iteration-2/icons/1.svg" alt="Kore" />
            Ramen
          </Link>
          <Link className="btn-btn active" to="/Order">
            <img src="/assets/iteration-2/icons/2.svg" alt="Pizza" />
            Pizza
          </Link>
          <Link className="btn-btn" to="/Order">
            <img src="/assets/iteration-2/icons/3.svg" alt="Burger" />
            Burger
          </Link>
          <Link className="btn-btn" to="/Order">
            <img src="/assets/iteration-2/icons/4.svg" alt="French fries" />
            French fries
          </Link>
          <Link className="btn-btn" to="/Order">
            <img src="/assets/iteration-2/icons/5.svg" alt="Fast food" />
            Fast food
          </Link>
          <Link className="btn-btn" to="/Order">
            <img src="/assets/iteration-2/icons/6.svg" alt="Soft drinks" />
            Soft drinks
          </Link>
        </div>

        <div className="cards-container">
          <div className="card">
            <img src="/assets/iteration-2/pictures/food-1.png" alt="" />
            <h3>Terminal Pizza</h3>
            <div className="card-bot">
              <p className="score">4.9</p>
              <p className="stock">(200)</p>
              <p className="price">60₺</p>
            </div>
          </div>

          <div className="card">
            <img src="/assets/iteration-2/pictures/food-2.png" alt="" />
            <h3>Position Absolute Acı Pizza</h3>
            <div className="card-bot">
              <p className="score">4.9</p>
              <p className="stock">(200)</p>
              <p className="price">60₺</p>
            </div>
          </div>

          <div className="card">
            <img src="/assets/iteration-2/pictures/food-3.png" alt="" />
            <h3>useEffect Tavuklu Burger</h3>
            <div className="card-bot">
              <p className="score">4.9</p>
              <p className="stock">(200)</p>
              <p className="price">60₺</p>
            </div>
          </div>
        </div>

        <footer>
          <div className="footer-top">
            <div className="footer-left">
              <img
                className="footer-logo"
                src="/assets/iteration-2/footer/logo-footer.svg"
                alt="Teknolojik Yemekler Logo"
              />

              <ul className="contact-info">
                <li>
                  <img
                    src="/assets/iteration-2/footer/icons/icon-1.png"
                    alt=""
                  />
                  341 Londonderry Road,
                  <br />
                  Istanbul Türkiye
                </li>
                <li>
                  <img
                    src="/assets/iteration-2/footer/icons/icon-2.png"
                    alt=""
                  />
                  aciktim@teknolojikyemekler.com
                </li>
                <li>
                  <img
                    src="/assets/iteration-2/footer/icons/icon-3.png"
                    alt=""
                  />
                  +90 216 123 45 67
                </li>
              </ul>
            </div>

            <div className="footer-mid">
              <h3>Hot Menu</h3>
              <ul>
                <li>
                  <a className="footer-link" href="#">
                    Terminal Pizza
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    5 Kişilik Hackathlon Pizza
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    useEffect Tavuklu Pizza
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    Beyaz Console Frosty
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    Testler Geçti Mutlu Burger
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    Position Absolute Acı Burger
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-right">
              <h3>Instagram</h3>
              <div className="instagram">
                <img src="/assets/iteration-2/footer/insta/li-0.png" alt="" />
                <img src="/assets/iteration-2/footer/insta/li-1.png" alt="" />
                <img src="/assets/iteration-2/footer/insta/li-2.png" alt="" />
                <img src="/assets/iteration-2/footer/insta/li-3.png" alt="" />
                <img src="/assets/iteration-2/footer/insta/li-4.png" alt="" />
                <img src="/assets/iteration-2/footer/insta/li-5.png" alt="" />
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2023 Teknolojik Yemekler.</p>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </footer>
      </div>
    </>
  );
}
