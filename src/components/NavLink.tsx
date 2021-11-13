import { Link } from "react-router-dom";

type NavLinkProps = {
  path: string;
  children: string;
};

function NavLink({ path, children }: NavLinkProps) {
  return (
    <Link to={path} className="nav-link">
      {children}
    </Link>
  );
}

export default NavLink;
