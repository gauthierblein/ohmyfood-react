import Header from '../components/header'
import Footer from '../components/footer'
import '../style/restaurantPages.scss'

//ASSETS
import {AiOutlineHeart, AiFillHeart, AiFillCheckCircle } from 'react-icons/ai'

export default function LaNoteEnchantee() {
    return (
        <div>
            <Header />
            
            <main className="menu">
                <section className= "menu__head">
                    <h2 className= "menu__head-title">La note enchantée</h2>
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
                                <h3>Ravioles de foie gras</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Accompagnés de leur crème à la truffe</p></div>
                                <div className="meal__price"><h5>25€</h5></div>
                                <div className="meal__select"><AiFillCheckCircle size={25} className="check"/></div>
                            </div>
                        </div>
                        <div className="meal n2">
                            <div className="meal__title">
                                <h3>Caviar osciètre</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Sur blini à la farine de blé noir</p></div>
                                <div className="meal__price"><h5>35€</h5></div>
                                <div className="meal__select"><AiFillCheckCircle size={25} className="check"/></div>
                            </div>
                        </div>
                        <div className="meal n3">
                            <div className="meal__title">
                                <h3>Homard et espuma de chou-fleur</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Mariné au zets d'orange</p></div>
                                <div className="meal__price"><h5>20€</h5></div>
                                <div className="meal__select"><AiFillCheckCircle size={25} className="check"/></div>
                            </div>
                        </div>
                        <div class="meal n4">
                            <div class="meal__title">
                                <h3>Foie gras de canard cuit entier</h3>
                            </div>
                            <div class="meal__details">
                                <div className="meal__description"><p>Confiture de figue et pain toasté</p></div>
                                <div className="meal__price"><h5>35€</h5></div>
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
                                <h3>Noix de coquilles Saint-Jacques</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Sur lit de purée de céleri-rave</p></div>
                                <div className="meal__price"><h5>40€</h5></div>
                                <div className="meal__select"><AiFillCheckCircle size={25} className="check"/></div>
                            </div>
                        </div>
                        <div className="meal n2">
                            <div className="meal__title">
                                <h3>Langoustine poêlée</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Purée de patate douce</p></div>
                                <div className="meal__price"><h5>35€</h5></div>
                                <div className="meal__select"><AiFillCheckCircle size={25} className="check"/></div>
                            </div>
                        </div>
                        <div className="meal n3">
                            <div className="meal__title">
                                <h3>Mijoté de queue de boeuf</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Et riz sauvage aux zests de citron</p></div>
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
                            <h3>Macaron noisette et chocolat</h3>
                        </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Glace au caramel brun et sel de Guérande</p></div>
                                <div className="meal__price"><h5>18€</h5></div>
                                <div className="meal__select"><AiFillCheckCircle size={25} className="check"/></div>
                            </div>
                        </div>
                        <div className="meal n2">
                            <div className="meal__title">
                                <h3>Baba au rgum revisité</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Avec son coulis de citron</p></div>
                                <div className="meal__price"><h5>22€</h5></div>
                                <div className="meal__select"><AiFillCheckCircle size={25} className="check"/></div>
                            </div>
                        </div>
                        <div className="meal n3">
                            <div className="meal__title">
                                <h3>Tarte au citron meringuée</h3>
                            </div>
                            <div className="meal__details">
                                <div className="meal__description"><p>Déstructurée</p></div>
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