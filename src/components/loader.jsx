import '../style/_utils.scss'
import '../style/_layout.scss'

// ASSETS
import { FaSpinner } from 'react-icons/fa'
import logo from '../assets/images/logo/ohmyfood.png'

export default function Loader () {
    return (
        <div className="loadingpage">
            <img className="loadingpage__logo" src={logo} alt="loadinglogo"/>
            <div className="loadingpage__spinner"><FaSpinner size={50}/></div>
        </div>
    )
}