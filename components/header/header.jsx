import Nav from "./nav";
import MobileNav from "./mobileNav";

export default function Header() {
  return (
    <header>
      <div className="header__container">
        <a className="logo" href="#">
          <img src="/images/logo.svg" alt="Insure Logo" />
        </a>
        <Nav />
        <MobileNav>
          <Nav />
        </MobileNav>
      </div>
    </header>
  );
}
