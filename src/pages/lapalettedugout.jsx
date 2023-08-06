import Header from '../components/header'
import Footer from '../components/footer'
import '../style/restaurantPages.scss'

//ASSETS
import {AiOutlineHeart, AiFillHeart, AiFillCheckCircle } from 'react-icons/ai'

export default function LaPaletteDuGout() {
    return (
        <div>
            <Header />
            
            <main className="menu">
                <section className= "menu__head">
                    <h2 className= "menu__head-title">La palette du gout</h2>
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
                                <h3>Fricassée d'escargot</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Au piment d'espelette</p></div>
                                <div className="meal__price"><h5>25€</h5></div>
                                <div className="meal__select"><AiFillCheckCircle size={25} className="check"/></div>
                            </div>
                        </div>
                        <div className="meal n2">
                            <div className="meal__title">
                                <h3>Foie gras de canard mi-cuit</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Et ses copeaux de truffe noire</p></div>
                                <div className="meal__price"><h5>35€</h5></div>
                                <div className="meal__select"><AiFillCheckCircle size={25} className="check"/></div>
                            </div>
                        </div>
                        <div className="meal n3">
                            <div className="meal__title">
                                <h3>Oeuf au plat</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Assaisonné à la truffe sur lit de poivrons</p></div>
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
                                <h3>Filet de boeuf aux herbes</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Accompagné de sa ribambelle de légumes</p></div>
                                <div className="meal__price"><h5>40€</h5></div>
                                <div className="meal__select"><AiFillCheckCircle size={25} className="check"/></div>
                            </div>
                        </div>
                        <div className="meal n2">
                            <div className="meal__title">
                                <h3>Parmentier de queue de boeuf</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>A la truffe noire sur sa purée de panais</p></div>
                                <div className="meal__price"><h5>35€</h5></div>
                                <div className="meal__select"><AiFillCheckCircle size={25} className="check"/></div>
                            </div>
                        </div>
                        <div className="meal n3">
                            <div className="meal__title">
                                <h3>Filet de turbot</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Aux agrumes</p></div>
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
                            <h3>Paris-Brest</h3>
                        </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Revisité</p></div>
                                <div className="meal__price"><h5>18€</h5></div>
                                <div className="meal__select"><AiFillCheckCircle size={25} className="check"/></div>
                            </div>
                        </div>
                        <div className="meal n2">
                            <div className="meal__title">
                                <h3>Macaron au chocolat d'exception</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Et glace à la vanille de Madagascar</p></div>
                                <div className="meal__price"><h5>22€</h5></div>
                                <div className="meal__select"><AiFillCheckCircle size={25} className="check"/></div>
                            </div>
                        </div>
                        <div className="meal n3">
                            <div className="meal__title">
                                <h3>Mousse au chocolat</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Au piment d'espelette et à la truffe noire</p></div>
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