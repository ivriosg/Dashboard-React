import Logo from "../assets/Logo";

export default function Aside() {
  return (
    <aside className="layout-aside">
      <div className="logotipo">
        <Logo />
      </div>
      <div className="menu">
        <ul>
          <li className="menu-top active">
            <a href="#" className="menu-top">
              Quick Actions
            </a>
          </li>
          <li className="menu-top">
            <a href="#">Product Categories</a>
            <ul>
              <li className="menu-secondary">
                <a href="#">Products</a>
              </li>
              <li className="menu-secondary">
                <a href="#">Product Attributes</a>
              </li>
              <li className="menu-secondary">
                <a href="#">Products Classes</a>
              </li>
              <li className="menu-secondary">
                <a href="#">Products Parties</a>
              </li>
              <li className="menu-secondary">
                <a href="#">Products Types</a>
              </li>
              <li className="menu-secondary">
                <a href="#">Products Plans</a>
              </li>
              <li className="menu-secondary">
                <a href="#">Categories</a>
              </li>
            </ul>
          </li>
          <li className="menu-top">
            <a href="#">Offers Catalogue</a>
            <ul>
              <li className="menu-secondary">
                <a href="#">Packages</a>
              </li>
              <li className="menu-secondary">
                <a href="#">Offers</a>
              </li>
              <li className="menu-secondary">
                <a href="#">Groups</a>
              </li>
              <li className="menu-secondary">
                <a href="#">Catalogues</a>
              </li>
              <li className="menu-secondary">
                <a href="#">Organization</a>
              </li>
              <li className="menu-secondary">
                <a href="#">Discounts</a>
              </li>
            </ul>
          </li>
          <li className="menu-top">
            <a href="#">Contracts Catalogue</a>
          </li>
          <li className="menu-top">
            <a href="#">Help</a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
