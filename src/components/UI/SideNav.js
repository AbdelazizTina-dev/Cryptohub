import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseDamage,
  faDollarSign,
  faCashRegister,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from '../../logo.png'

export const links = [
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: faHouseDamage,
  },
  {
    id: 2,
    name: "Crypto",
    path: "/crypto",
    icon: faDollarSign,
  },
  {
    id: 3,
    name: "Exchanges",
    path: "/exchanges",
    icon: faCashRegister,
  },
  {
    id: 4,
    name: "News",
    path: "/news",
    icon: faNewspaper,
  },
];

const SideNav = () => {


  return (
    <nav className="flex flex-col h-full w-96 bg-gray-600 justify-start pt-4 px-4 z-1 fixed top-0 left-0 overflow-y-hidden">
        <img src={logo} alt="logo" className="scale-75"/>
      {links.map((link) => (
        <div
          key={link.id}
          className="flex flex-row items-center hover:bg-gray-400"
        >
          <FontAwesomeIcon
            className="mx-4"
            icon={link.icon}
            color="white"
            size="lg"
            fixedWidth
          />
          <Link
            className="py-4 text-white font-semibold text-xl w-5/6"
            to={link.path}
          >
            {link.name}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default SideNav;
