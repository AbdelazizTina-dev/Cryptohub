import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseDamage,
  faDollarSign,
  faCashRegister,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

const SideNav = () => {
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHouseDamage,
    },
    {
      name: "Crypto",
      path: "/crypto",
      icon: faDollarSign,
    },
    {
      name: "Exchanges",
      path: "/exchanges",
      icon: faCashRegister,
    },
    {
      name: "News",
      path: "/news",
      icon: faNewspaper,
    },
  ];

  return (
    <nav className="flex flex-col w-80 h-screen bg-sky-900 justify-start">
      {links.map((link) => (
        <div className="flex flex-row items-center">
          <FontAwesomeIcon
            className="ml-4"
            icon={link.icon}
            color="white"
          />
          <a className="p-4 text-white font-semibold" href={link.path}>{link.name}</a>
        </div>
      ))}
    </nav>
  );
};

export default SideNav;
