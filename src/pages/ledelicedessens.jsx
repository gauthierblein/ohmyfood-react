import Header from '../components/header'
import Footer from '../components/footer'
import '../style/restaurantPages.scss'

//ASSETS
import {AiOutlineHeart, AiFillHeart, AiFillCheckCircle } from 'react-icons/ai'

export default function LeDeliceDesSens() {
    return (
        <div>
            <Header />
            
            <main className="menu">
                <section className= "menu__head">
                    <h2 className= "menu__head-title">Le délice des sens</h2>
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
                                <h3>Tartare de thon</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Assaisonné au yuzu</p></div>
                                <div className="meal__price"><h5>25€</h5></div>
                                <div className="meal__select"><AiFillCheckCircle size={25} className="check"/></div>
                            </div>
                        </div>
                        <div className="meal n2">
                            <div className="meal__title">
                                <h3>Bouchée de homard croustillant</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Et sa farandole de petits légumes</p></div>
                                <div className="meal__price"><h5>35€</h5></div>
                                <div className="meal__select"><AiFillCheckCircle size={25} className="check"/></div>
                            </div>
                        </div>
                        <div className="meal n3">
                            <div className="meal__title">
                                <h3>Velouté de cèpes</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Aux truffes</p></div>
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
                                <h3>Poulet rôti aux herbes de provence</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Et sa crème de truffe</p></div>
                                <div className="meal__price"><h5>40€</h5></div>
                                <div className="meal__select"><AiFillCheckCircle size={25} className="check"/></div>
                            </div>
                        </div>
                        <div className="meal n2">
                            <div className="meal__title">
                                <h3>Langoustine rôtie</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Et ses légumes de saison</p></div>
                                <div className="meal__price"><h5>35€</h5></div>
                                <div className="meal__select"><AiFillCheckCircle size={25} className="check"/></div>
                            </div>
                        </div>
                        <div className="meal n3">
                            <div className="meal__title">
                                <h3>Côte de boeuf angus</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Et sa purée de panais</p></div>
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
                            <h3>Farandole de desserts</h3>
                        </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Du chef</p></div>
                                <div className="meal__price"><h5>18€</h5></div>
                                <div className="meal__select"><AiFillCheckCircle size={25} className="check"/></div>
                            </div>
                        </div>
                        <div className="meal n2">
                            <div className="meal__title">
                                <h3>Crème brûlée</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Revisitée</p></div>
                                <div className="meal__price"><h5>22€</h5></div>
                                <div className="meal__select"><AiFillCheckCircle size={25} className="check"/></div>
                            </div>
                        </div>
                        <div className="meal n3">
                            <div className="meal__title">
                                <h3>Tiramisu</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>À la noisette</p></div>
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