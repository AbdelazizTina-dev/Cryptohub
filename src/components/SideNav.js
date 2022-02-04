import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseDamage,
  faDollarSign,
  faCashRegister,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SideNav = () => {
  const links = [
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
      id:3,
      name: "Exchanges",
      path: "/exchanges",
      icon: faCashRegister,
    },
    {
      id:4,
      name: "News",
      path: "/news",
      icon: faNewspaper,
    },
  ];

  return (
    <nav className="flex flex-col w-80 h-screen bg-sky-900 justify-start py-4">
      {links.map((link) => (
        <div key={link.id} className="flex flex-row items-center hover:bg-transparent">
          <FontAwesomeIcon
            className="mx-4"
            icon={link.icon}
            color="white"
            size="lg"
            fixedWidth
          />
          <Link className="py-4 text-white font-semibold text-xl w-5/6" to={link.path}>{link.name}</Link>
        </div>
      ))}
    </nav>
  );
};

export default SideNav;
