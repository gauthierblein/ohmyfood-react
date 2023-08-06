import { FaUtensils, FaHandsHelping } from 'react-icons/fa'

import '../style/_layout.scss'

export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer__logo">ohmyfood</div>
                    <ul className="footer__list">
                        <li><span className="footer__link">< FaUtensils size={20} className="footer__icon"/>Proposer un restaurant</span></li>
                        <li><span className="footer__link">< FaHandsHelping size={20} className="footer__icon"/>Devenir partenaire</span></li>
                        <li><span className="footer__link">Mentions légales</span></li>
                        <li><a className="footer__link" href="mailto:contact@ohmyfood.com">Contact</a></li>
                    </ul>
            </footer>
        </div>
    )
}