import CryptoItem from "./CryptoItem"
import Search from "./Search"


const CryptoList = () => {
    return (
        <div>
        <div className="pb-4">
            <Search/>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {[...Array(50).keys()].map((i) => (
            <CryptoItem key={i} />
          ))}
        </div>
      </div>
    )
}

export default CryptoList