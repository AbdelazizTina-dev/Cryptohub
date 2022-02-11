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


    return(
        <div className="w-full h-full p-6 ml-96">
            <CryptoDetail/>
        </div>
    );
}

export default CurrencyDetails