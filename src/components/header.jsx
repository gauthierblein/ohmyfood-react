import { useLocation, Link } from "react-router-dom";
import '../style/_layout.scss'

//ASSETS
import logo from '../assets/images/logo/ohmyfood.png'
import homePic from '../assets/images/logo/homePic.jpeg'
import { AiOutlineArrowLeft} from 'react-icons/ai'


export default function Header() {
    // The current location
    const location = useLocation();
    const path = location.pathname
    const tag = path.substring(1)
    console.log(tag)
    
    const data = [
        {"id" : "alafrancaise",
        "url" : "https://i.postimg.cc/wxXcJ4d5/jay-wennington-N-Y88-TWm-Gw-A-unsplash.jpg"
        },
        {"id" : "lanoteenchantee",
        "url" : "https://i.postimg.cc/X7nKgKVR/louis-hansel-shotsoflouis-q-NBGVy-OCY8-Q-unsplash.jpg"
        },
        {"id" : "lapalettedugout",
        "url" : "https://i.postimg.cc/gjWVQ836/stil-u2-Lp8t-XIcjw-unsplash.jpg"
        },
        {"id" : "ledelicedessens",
        "url" : "https://i.postimg.cc/x83v28Pp/toa-heftiba-DQKer-Ts-Qwi0-unsplash.jpg"
        },
    ]

    const rightPic = data.find((element) => element.id === tag)
    console.log(rightPic)


    return (
        <header className="header">
            <div className="header__top">
                <Link to="/" className="header__icon"><AiOutlineArrowLeft size={30}/></Link>
                <img src={logo} alt="logo" className="header__logo"/> </div>

            {rightPic ?
            <div>
                <img src={rightPic.url} alt="A_la_française" className="header__img"/>
            </div> : 
            <div>
                <img src={homePic} alt="A_la_française" className="header__img"/>
            </div>
            }

        </header>
    )
}