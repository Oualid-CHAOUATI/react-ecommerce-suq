import "./Footer.styles.scss";
export const Footer = () => {
  return (
    <>
      <footer className="container--">
        <div className="footer-content jc-space-between flex wrap__">
          <div className="col">
            <h4 className="footer-title">Contact</h4>
            <div className="col-txt">
              <p>
                Email : <span>suuq@gmail.com</span>
              </p>
              <p>
                Tel : <span>070000000</span>
              </p>
              <a href="contact.html" className="long-btn-r bg-green">
                Contact
              </a>
            </div>
          </div>
          <div className="col">
            <h4 className="footer-title">Réseaux sociaux</h4>
            <div className="col-txt">
              <a href="">Facebook</a>
              <br />
              <a href="">Instagram</a>
            </div>
          </div>
          <div className="col">
            <h4 className="footer-title">Conditions d'utilisation</h4>
            <div className="col-txt">
              <p>
                Nous t'invitons a lire les condition d'utilisation de notre
                plateforme par <a href="conditionUtilisation.html">ici</a>
              </p>
            </div>
          </div>
        </div>
        <div className="center-text copyrights">
          &copy; 2021 tout droits réservés
        </div>
      </footer>
    </>
  );
};
