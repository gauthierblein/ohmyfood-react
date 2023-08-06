import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import '../style/_home.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import Loader from '../components/loader'

//ASSETS
import ledelicedessens from '../assets/images/restaurants/toa-heftiba-DQKerTsQwi0-unsplash.jpg'
import lapalettedugout from '../assets/images/restaurants/stil-u2Lp8tXIcjw-unsplash.jpg'
import lanoteenchantee from '../assets/images/restaurants/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg'
import alafrancaise from '../assets/images/restaurants/jay-wennington-N_Y88TWmGwA-unsplash.jpg'
import { FaMobileAlt, FaList, FaStore } from 'react-icons/fa'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'


export default function Home() {
    //Set Up loader
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {setLoading(false);}, 2000);
    }, []);

    if (loading)  return (<Loader />);

    return (
        <div>
            <Header/>
            
            <main>
                <section className="intro">
                    <div className="intro__head">Réservez le menu qui vous convient le mieux</div>
                    <div className="intro__second">Découvrez des restaurants d'exception, sélectionnés par nos soins.</div>
                    <div className="intro__button"><button className=" intro__button-btn">Explorer nos restaurants</button></div>
                </section>
                <section className="functioning">
                    <h1>Fonctionnement</h1>
                    <ol className="functioning__steps">
                        <li>
                            <div className="step">
                                <div className="step__number">1</div>
                                    <FaMobileAlt size={25} />
                                <div className="step__text1">Choisissez un restaurant</div>
                            </div>
                        </li>
                        <li>
                            <div className="step">
                                <div className="step__number">2</div>
                                    <FaList size={25} />
                                <div className="step__text2">Composez votre menu</div>
                            </div>
                        </li>
                        <li>
                            <div className="step">
                                <div className="step__number">3</div>
                                    <FaStore size={25} />
                                <div className="step__text3">Dégustez au restaurant</div>
                            </div>
                        </li>
                    </ol>
                </section>

    <section className="restaurant">
        <h1>Restaurants</h1>
        <div className="restaurant__list">
            <div className="adress">
                <Link to="/lapalettedugout" className="adress__link">
                    <div className="adress__box-img">
                        <img src={lapalettedugout} alt="La_Palette_du_Goût" className="adress__img"/>
                        <div className="adress__new">Nouveau</div>
                    </div>
                    <div className="adress__details">
                        <div className="adress__text"><h3>La palette du goût</h3> <p>Ménilmontant</p></div>
                        <div className="adress__icon">
                            <AiOutlineHeart size={35} className= "heart1" />
                            <AiFillHeart size={35} className= "heart2" />
                        </div>
                    </div>
                </Link>
            </div>
            <div className="adress">
            <Link to="/lanoteenchantee" className="adress__link">
                    <div className="adress__box-img">
                        <img src={lanoteenchantee} alt="La_note_enchantee" className="adress__img"/>
                        <div className="adress__new">Nouveau</div>
                    </div> 
                    <div className="adress__details">
                        <div className="adress__text"><h3>La note enchantée</h3> <p>Charonne</p></div>
                        <div className="adress__icon">
                            <AiOutlineHeart size={35} className= "heart1" />
                            <AiFillHeart size={35} className= "heart2" />
                        </div>
                    </div>
                </Link>
            </div>
            <div className="adress">
                <Link to="/alafrancaise" className="adress__link">
                    <img src={alafrancaise} alt="A_la_francaise" className="adress__img"/>
                    <div className="adress__details">
                        <div className="adress__text"><h3>À la française</h3> <p>Cité Rouge</p></div>
                        <div className="adress__icon">
                            <AiOutlineHeart size={35} className= "heart1" />
                            <AiFillHeart size={35} className= "heart2" />
                        </div>
                    </div>
                </Link>
            </div>
            <div className="adress">
                <Link to="/ledelicedessens" className="adress__link">
                    <img src={ledelicedessens} alt="Délice des Sens" className="adress__img"/>
                    <div className="adress__details">
                        <div className="adress__text"><h3>Le délice des sens</h3> <p>Folie-Méricourt</p></div>
                        <div className="adress__icon">
                            <AiOutlineHeart size={35} className= "heart1" />
                            <AiFillHeart size={35} className= "heart2" />
                        </div>
                    </div>
                </Link>
            </div> 
        </div>  
    </section>
    </main>

        <Footer/>
        </div>
    )
}