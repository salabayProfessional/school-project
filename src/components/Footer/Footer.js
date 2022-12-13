import { PICTURE_LIST } from '../../constants/footer';
import Networks from '../_commonComponents/Networks/Networks';
import ButtonYellow from '../_commonComponents/ButtonYellow';
import Map from './Map/Map';

const Footer = () => {
	const topList = PICTURE_LIST.map((item, index) => (
		<li className="footer-top-item" key={index}>
			<img src={item} width="50" height="45" alt="Logo" />
		</li>
	));
	
	return (
		<footer className="footer">
			<Map />
		
			<div className="footer-inner">
				<section className="footer-top">
					<ul className="footer-top-items">{topList}</ul>
				</section>
				
				<div className="footer-line" />
				
				<section className="footer-bottom">
					<div className="footer-bottom-item">
						<img src="image/logo.svg" width="95" height="150" alt="Logo" />
					</div>
					
					<div className="footer-bottom-item">
						<p className="footer-bottom-item-title">контакти</p>						
						<p className="footer-bottom-item-phone-1">(032) 252-68-86</p>						
						<p className="footer-bottom-item-phone-2">38 (098) 064-21-85</p>						
						<p className="footer-bottom-item-mail">lvpuktb@gmail.com</p>						
					</div>
					
					<div className="footer-bottom-item">
						<p className="footer-bottom-item-location-1">вул. Авраама Лінкольна, 23,</p>
						<p className="footer-bottom-item-location-2">Львів, Львівська область, 79000</p>						
						<div className="footer-bottom-item-networks">
							<Networks isWhite />
						</div>
					</div>
					
					<div className="footer-bottom-item button">
						<div className="footer-bottom-item-button">							
							<a href="https://docs.google.com/forms/d/e/1FAIpQLScNA8IVEtoM9ohgt2NSOmgeW2ZSac52z6fyQuHA6RIfgwFyBA/viewform?embedded=true" target="_blanck">
								<ButtonYellow text="Заява онлайн" />
							</a>
						</div>
						<p className="footer-bottom-item-message">© 2021 Львівське вище професійне училище комп’ютерних технологій та будівництва</p>
					</div>
				</section>
			</div>
		</footer>
	)
};

export default Footer;