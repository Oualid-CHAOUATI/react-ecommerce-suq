import { useState } from "react";
import { SchemeBtn } from "../../UI/SchemeBtn/SchemeBtn.ui";
import "./Header.styles.scss";
//prendre en compte header.js pour le click en dehors du menu (fermer le menu)
export const Header = () => {
  const [showNav, setShawNav] = useState(false);

  const toggleShowNav = () => setShawNav((currentState) => !currentState);

  return (
    <header>
      <div className="container flex">
        <a href="" className="logo">
          SUUQ
        </a>
        <nav className="flex-center">
          {/* j'ai ajouté order pour mettre le button à la fin de la boite */}
          <button
            className="hamburger btn"
            onClick={toggleShowNav}
            style={{ order: "1" }}
          >
            {hamburgerSvg}
          </button>
          <ul className={`menu flex center-align ${showNav && "show"}`}>
            <button
              className="x-btn flex-center"
              onClick={toggleShowNav}
            ></button>
            <li className="li">
              <a href="home.html">
                <span>A</span>cceuil
              </a>
            </li>
            <li className="li">
              <a href="categories.html">
                <span>C</span>
                ategories
              </a>
            </li>
            <li className="global li">
              <a className="btn">
                <span>P</span>
                roduits
              </a>

              <ul className="sub-menu">
                <li>
                  <a href="produitsNeufs.html">
                    <span>N</span>
                    eufs
                  </a>
                </li>
                <li>
                  <a href="produitsOccas.html">
                    <span>O</span>
                    ccasion
                  </a>
                </li>
                <li>
                  <a href="ajoutProduit.html">
                    <span>A</span>
                    jouter
                  </a>
                </li>
              </ul>
            </li>
            <li className="li">
              <a href="contact.html">
                <span>C</span>
                ontact
              </a>
            </li>

            <li>
              <a href="profil.html" className="profil-icon to-hide-desktop">
                profil
              </a>
            </li>

            <li>
              <a href="rechercher.html" className="search-icon to-hide-desktop">
                rechercher
              </a>
            </li>

            <li>
              {/* ------ schemeBtn */}

              <SchemeBtn />
            </li>
          </ul>
          <a href="connexion.html" className="long-btn-r bg-blue">
            m'inscrire
          </a>
          <a href="profil.html" className="profil-icon to-hide-mobile">
            {profilIcon}
          </a>
          <a href="rechercher.html" className="search-icon to-hide-mobile">
            {searchIcon}
          </a>
          <a href="panier.html" className="panier-icon">
            {basketIcon}
          </a>
        </nav>
      </div>
    </header>
  );
};

const basketIcon = (
  <svg
    id="Calque_2"
    data-name="Calque 2"
    xmlns="http://www.w3.org/2000/svg"
    width="42.002"
    height="40"
    viewBox="0 0 42.002 40"
  >
    <g id="_13" data-name="13">
      <path
        id="Tracé_1"
        data-name="Tracé 1"
        d="M36.7,24.663H16.9C13.55,16.574,10.57,8.09,7.436,0H0V3.067H5.623c2.98,8.323,6.145,16.412,9.218,24.5H36.656a16.742,16.742,0,0,0,0-2.906Zm-4.793,5.973a4.326,4.326,0,0,0-2.98,3.677,5.293,5.293,0,0,0,.494,3.515,4.044,4.044,0,0,0,2.486,2.064,3.658,3.658,0,0,0,3.7-1.263A5.234,5.234,0,0,0,36.7,34.314C36.24,31.759,34.1,30.117,31.909,30.636Zm-13.059,0a4.81,4.81,0,0,0-3.073,3.677,4.98,4.98,0,0,0,3.073,5.578,3.77,3.77,0,0,0,3.639-1.334,5.357,5.357,0,0,0,1.154-4.245c-.462-2.555-2.6-4.2-4.793-3.677ZM18.343,21.4H36.871L42,6.17H13.228l.83,3.085H19l.968,3.085H15.209l1,2.888H21.17l.983,3.282H17.36Z"
        fill="#271b1b"
        fill-rule="evenodd"
      />
    </g>
  </svg>
);
const searchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40.252"
    height="40"
    viewBox="0 0 40.252 40"
  >
    <path
      id="chercher"
      d="M39.5,35.975,28.931,25.409a2.857,2.857,0,0,0-2.013-.755,15.671,15.671,0,0,0,3.27-9.56A15.094,15.094,0,1,0,15.094,30.189a14.455,14.455,0,0,0,9.56-3.522,2.086,2.086,0,0,0,.755,2.013L35.975,39.245a2.432,2.432,0,0,0,3.522,0A2.145,2.145,0,0,0,39.5,35.975Zm-24.4-9.56A11.321,11.321,0,1,1,26.415,15.094,11.274,11.274,0,0,1,15.094,26.415Z"
      fill="#444"
    />
  </svg>
);
const profilIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="40"
    viewBox="0 0 30 40"
  >
    <g id="Groupe_125" data-name="Groupe 125" transform="translate(-1639 -40)">
      <circle
        id="Ellipse_21"
        data-name="Ellipse 21"
        cx="7"
        cy="7"
        r="7"
        transform="translate(1647 40)"
        fill="#271b1b"
      />
      <rect
        id="Rectangle_67"
        data-name="Rectangle 67"
        width="30"
        height="24"
        rx="9"
        transform="translate(1639 56)"
        fill="#271b1b"
      />
    </g>
  </svg>
);
const hamburgerSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="37.719"
    height="28.22"
    viewBox="0 0 37.719 28.22"
  >
    <g
      id="Groupe_94"
      data-name="Groupe 94"
      transform="translate(6391.387 218.246)"
    >
      <line
        id="Ligne_11"
        data-name="Ligne 11"
        x2="33.719"
        transform="translate(-6389.387 -216.246)"
        fill="none"
        stroke="#271b1b"
        stroke-linecap="round"
        stroke-width="4"
      />
      <line
        id="Ligne_14"
        data-name="Ligne 14"
        x2="29.137"
        transform="translate(-6384.806 -204.136)"
        fill="none"
        stroke="#271b1b"
        stroke-linecap="round"
        stroke-width="4"
      />
      <line
        id="Ligne_13"
        data-name="Ligne 13"
        x2="33.719"
        transform="translate(-6389.387 -192.026)"
        fill="none"
        stroke="#271b1b"
        stroke-linecap="round"
        stroke-width="4"
      />
    </g>
  </svg>
);
