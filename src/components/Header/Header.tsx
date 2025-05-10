import css from "./Header.module.css";
import Container from "../Common/Container/Container";
const Header = () => {
  return (
    <Container>
      <header>
        <a className={css.header_logo}>
          <svg
            className={css.header__logo_svg}
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="5" y="5" width="32" height="32" rx="16" fill="#FDFF61" />
            <rect
              x="2.5"
              y="2.5"
              width="37"
              height="37"
              rx="18.5"
              stroke="#FDFF61"
              stroke-opacity="0.1"
              stroke-width="5"
            />
            <rect x="13" y="16" width="4" height="10" rx="2" fill="#191919" />
            <rect x="19" y="13" width="4" height="16" rx="2" fill="#191919" />
            <rect x="25" y="16" width="4" height="10" rx="2" fill="#191919" />
          </svg>
          Soundwave
        </a>

        <nav className={css.navigation}>
          <ul className={css.navigation_list}>
            <li className={css.navigation__list_item}>
              <a className={css.navigation__item_page}>Artist</a>
            </li>
            <li className={css.navigation__list_item}>
              <a className={css.navigation__item_page}>The form</a>
            </li>
            <li className={css.navigation__list_item}>
              <a className={css.navigation__item_page}>Reviews</a>
            </li>
          </ul>
        </nav>

        <div className={css.contact}>
          <ul className={css.contact_list}>
            <li className={css.contact__list_item}>
              <a href="https://www.facebook.com/goITclub/">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="20" fill="#FDFF61" />
                  <path
                    d="M22.2 12.9001C22.35 12.9001 22.5 12.9001 22.8 12.9001V15.1501C22.65 15.1501 22.35 15.1501 22.05 15.1501C21.75 15.1501 21.45 15.1501 21.3 15.3001C21.15 15.4501 21.15 15.6001 21.15 15.9501C21.15 16.2501 21.15 16.4501 21.15 16.7501H22.8V18.6501H21.15V26.9001H18.6V18.6001H17.25V16.7001H18.6V16.0501C18.6 14.9501 18.75 14.1501 19.05 13.8001C19.5 13.1501 20.4 12.8501 21.75 12.8501C21.9 12.9001 22.05 12.9001 22.2 12.9001Z"
                    fill="#191919"
                  />
                </svg>
              </a>
            </li>
            <li className={css.contact__list_item}>
              <a href="https://www.instagram.com/goitclub/">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="20" fill="#FDFF61" />
                  <path
                    d="M27.9485 16.7225C27.9387 16.051 27.8143 15.3849 27.5762 14.7568C27.1595 13.6844 26.311 12.8365 25.2368 12.4213C24.6157 12.188 23.9591 12.063 23.2945 12.0488C22.4398 12.0106 22.1688 12 19.9991 12C17.8294 12 17.5513 12 16.7028 12.0488C16.0391 12.063 15.3825 12.188 14.7614 12.4213C13.6873 12.8365 12.8378 13.6844 12.422 14.7568C12.1884 15.3769 12.0622 16.0324 12.0498 16.695C12.0116 17.5492 12 17.8197 12 19.9858C12 22.1519 12 22.4287 12.0498 23.2766C12.0631 23.9401 12.1884 24.5947 12.422 25.2165C12.8387 26.2881 13.6873 27.136 14.7623 27.5512C15.3807 27.7924 16.0373 27.929 16.7037 27.9503C17.5593 27.9885 17.8303 28 20 28C22.1697 28 22.4478 28 23.2963 27.9503C23.96 27.937 24.6166 27.812 25.2386 27.5787C26.3127 27.1627 27.1613 26.3147 27.578 25.2432C27.8116 24.6222 27.9369 23.9676 27.9502 23.3033C27.9884 22.4499 28 22.1794 28 20.0124C27.9982 17.8463 27.9982 17.5714 27.9485 16.7225ZM19.9938 24.0821C17.7246 24.0821 15.8863 22.2468 15.8863 19.9814C15.8863 17.7159 17.7246 15.8807 19.9938 15.8807C22.2612 15.8807 24.1013 17.7159 24.1013 19.9814C24.1013 22.2468 22.2612 24.0821 19.9938 24.0821ZM24.2648 16.6852C23.7343 16.6852 23.307 16.2577 23.307 15.729C23.307 15.2004 23.7343 14.7728 24.2648 14.7728C24.7934 14.7728 25.2217 15.2004 25.2217 15.729C25.2217 16.2577 24.7934 16.6852 24.2648 16.6852Z"
                    fill="#191919"
                  />
                  <path
                    d="M19.9952 22.485C21.3773 22.485 22.4977 21.3646 22.4977 19.9825C22.4977 18.6004 21.3773 17.48 19.9952 17.48C18.6131 17.48 17.4927 18.6004 17.4927 19.9825C17.4927 21.3646 18.6131 22.485 19.9952 22.485Z"
                    fill="#191919"
                  />
                </svg>
              </a>
            </li>
            <li className={css.contact__list_item}>
              <a href="https://www.youtube.com/c/GoIT">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="20" fill="#FDFF61" />
                  <path
                    d="M28.82 15.8476C28.82 15.8476 28.64 14.5476 28.1 13.9905C27.44 13.2476 26.66 13.2476 26.3 13.1857C23.78 13 20 13 20 13C20 13 16.22 13 13.7 13.1857C13.34 13.2476 12.56 13.2476 11.9 13.9905C11.36 14.5476 11.18 15.8476 11.18 15.8476C11.18 15.8476 11 17.3333 11 18.819V20.181C11 21.6667 11.18 23.2143 11.18 23.2143C11.18 23.2143 11.36 24.5143 11.9 25.0714C12.56 25.8143 13.46 25.8143 13.88 25.8762C15.32 25.9381 20 26 20 26C20 26 23.78 26 26.3 25.8143C26.66 25.7524 27.44 25.7524 28.1 25.0095C28.64 24.4524 28.82 23.1524 28.82 23.1524C28.82 23.1524 29 21.6667 29 20.181V18.819C29 17.3333 28.82 15.8476 28.82 15.8476ZM18.14 21.9143V16.7143L23 19.3143L18.14 21.9143Z"
                    fill="#191919"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </Container>
  );
};

export default Header;
