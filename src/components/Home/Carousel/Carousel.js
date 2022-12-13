import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { CAROUSEL_LIST } from '../../../constants/home';
import ButtonYellow from '../../_commonComponents/ButtonYellow';

const CarouselBig = () => {	
	const list = CAROUSEL_LIST.map((item, index) => (
		<div key={index}>
			<img src={item} alt="Team" />
		</div>
	));

	return (
		<article className="home-carousel">
			<img className="home-carousel-logo" src="image/logo.svg" alt="Logo" />
		
			<Carousel
				autoPlay infiniteLoop interval='10000' showThumbs={false} showStatus={false}
			>
				{list}
			</Carousel>
			
			<img className="home-carousel-smallscreen" src={CAROUSEL_LIST[0]} alt="People" />
			
			<h1 className="home-carousel-title">тВОЯ МРІЯ  – ПРОФЕСІЙНА ОСВІТА – ПЕРСПЕКТИВНА РОБОТА</h1>
			
			<h2 className="home-carousel-subtitle">Спільним шляхом до вершин!</h2>
			
			<div className="home-carousel-button">
				<a href="https://docs.google.com/forms/d/e/1FAIpQLSeZKSd9KCigHw2ZmxDtEFD8vJJrxdYWHpj1dBbfnr8M2XEPgw/viewform?usp=sf_link" target="_blanck">
					<ButtonYellow text="Заява онлайн" />
				</a>
			</div>
		</article>
	)
};

export default CarouselBig;