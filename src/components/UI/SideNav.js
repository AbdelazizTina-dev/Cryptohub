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
    <nav className="flex flex-row lg:flex-col h-full w-full lg:w-1/5 lg:min-h-screen lg:sticky lg:top-0 lg:left-0 bg-gray-600 lg:pt-4">
        <img src={logo} alt="logo" className="scale-75 hidden lg:inline"/>
      {links.map((link) => (
        <div
          key={link.id}
          className="flex flex-row basis-1/4 lg:basis-0 items-center hover:bg-gray-400"
        >
          <FontAwesomeIcon
            className="mx-4"
            icon={link.icon}
            color="white"
            size="lg"
            fixedWidth
          />
          <Link
            className="p-4 text-white font-semibold text-center lg:text-left text-xl w-5/6"
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
