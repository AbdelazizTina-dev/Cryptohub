const Links = ({name, links}) => {

  return (
    <div className="p-6">
      <p className="text-blue-600 font-semibold text-2xl pb-4">{name} Links</p>
      <ul className="divide-y divide-gray-300">
        {links.map((link) => (
          <li key={links.indexOf(link)} className="flex flex-row items-center px-4 py-6 hover:bg-gray-100">
            <p className="text-lg capitalize ">{link.type}</p>
            <a
              href={link.url}
              className="ml-auto pr-3 font-bold text-blue-600 text-left"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
