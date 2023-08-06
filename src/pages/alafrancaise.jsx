import Header from '../components/header'
import Footer from '../components/footer'
import '../style/restaurantPages.scss'

//ASSETS
import {AiOutlineHeart, AiFillHeart, AiFillCheckCircle } from 'react-icons/ai'

export default function ALaFrancaise() {
    return (
        <div>
            <Header />
            
            <main className="menu">
                <section className= "menu__head">
                    <h2 className= "menu__head-title">À la française</h2>
                    <div className="menu__head-icon">
                        <AiOutlineHeart size={45} className= "heart1" />
                        <AiFillHeart size={45} className= "heart2" />
                    </div>
                </section>
                <section className="submenu">
                    <div className="submenu__head">ENTRÉES </div>
                    <div className="submenu__list submenu1">
                        <div className="meal n1">
                            <div className="meal__title">
                                <h3>Tartare de poulpe acidulé</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Aux zests d'Orange</p></div>
                                <div className="meal__price"><h5>25€</h5></div>
                                <div className="meal__select"><AiFillCheckCircle size={25} className="check"/></div>
                            </div>
                        </div>
                        <div className="meal n2">
                            <div className="meal__title">
                                <h3>Velouté de légumes d'antan</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Carotte, Panais, Topinambour</p></div>
                                <div className="meal__price"><h5>35€</h5></div>
                                <div className="meal__select"><AiFillCheckCircle size={25} className="check"/></div>
                            </div>
                        </div>
                        <div className="meal n3">
                            <div className="meal__title">
                                <h3>Soupe à l'oignon</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Revisitée</p></div>
                                <div className="meal__price"><h5>20€</h5></div>
                                <div className="meal__select"><AiFillCheckCircle size={25} className="check"/></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="submenu submenu2">
                    <div className="submenu__head"> PLATS </div>
                    <div className="submenu__list">
                        <div className="meal n1">
                            <div className="meal__title">
                                <h3>Coquilles Saint-Jacques</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Accompagnées d'une purée de panais</p></div>
                                <div className="meal__price"><h5>40€</h5></div>
                                <div className="meal__select"><AiFillCheckCircle size={25} className="check"/></div>
                            </div>
                        </div>
                        <div className="meal n2">
                            <div className="meal__title">
                                <h3>Magret de canard</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Et parmentier de pommes de terres</p></div>
                                <div className="meal__price"><h5>35€</h5></div>
                                <div className="meal__select"><AiFillCheckCircle size={25} className="check"/></div>
                            </div>
                        </div>
                        <div className="meal n3">
                            <div className="meal__title">
                                <h3>Pigeonneau d'Ille-et-Vilaine</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Sur son lit de gnocchis et de légumes</p></div>
                                <div className="meal__price"><h5>44€</h5></div>
                                <div className="meal__select"><AiFillCheckCircle size={25} className="check"/></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="submenu submenu3">
                    <div className="submenu__head"> DESSERTS </div>
                    <div className="submenu__list">
                    <div className="meal n1">
                        <div className="meal__title">
                            <h3>Pétales de violettes glacés</h3>
                        </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Et purée de noisettes</p></div>
                                <div className="meal__price"><h5>18€</h5></div>
                                <div className="meal__select"><AiFillCheckCircle size={25} className="check"/></div>
                            </div>
                        </div>
                        <div className="meal n2">
                            <div className="meal__title">
                                <h3>Fondant au chocolat</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Revisité</p></div>
                                <div className="meal__price"><h5>22€</h5></div>
                                <div className="meal__select"><AiFillCheckCircle size={25} className="check"/></div>
                            </div>
                        </div>
                        <div className="meal n3">
                            <div className="meal__title">
                                <h3>Millefeuille croustillant</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Myrtilles et pâte d'amande</p></div>
                                <div className="meal__price"><h5>23€</h5></div>
                                <div className="meal__select"><AiFillCheckCircle size={25} className="check"/></div>
                            </div>
                        </div>
                    </div>
                </section>   
                <div className="btn-container"><button className="btn-secondary">Commander </button></div>
            </main>
            <Footer />
        </div>
    )
}