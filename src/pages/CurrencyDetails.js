import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import CryptoDetail from "../components/Crypto/CryptoDetail"
import { fetchCoin } from "../store/coin-slice"


const CurrencyDetails = () => {

    const dispatch = useDispatch()

    const {uuid} = useParams()
  
    useEffect(() => {
      dispatch(fetchCoin(uuid))
    },[dispatch,uuid])


    return(
        <div className="h-full">
            <CryptoDetail/>
        </div>
    );
}

export default CurrencyDetails