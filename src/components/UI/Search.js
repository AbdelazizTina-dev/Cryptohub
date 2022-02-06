const Search = () => {
  return (
    <div className="py-6 relative mx-auto text-gray-600 grid place-items-center">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
