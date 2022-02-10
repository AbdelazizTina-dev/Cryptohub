import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import CryptoDetail from "../components/Crypto/CryptoDetail"
import { fetchCoin } from "../store/coin-slice"


const CurrencyDetails = () => {

    const dispatch = useDispatch()

    const {uuid} = useParams()
  
    useEffect(() => {
      dispatch(fetchCoin(uuid))
    },[dispatch,uuid])

    const coin = useSelector((state) => state.coin.data)

    console.log("sup from details page")
    console.log(coin)

    return(
        <div className="w-full h-full p-6 ml-96">
            <CryptoDetail coin={coin}/>
        </div>
    );
}

export default CurrencyDetails