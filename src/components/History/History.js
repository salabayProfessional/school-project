import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Pattern from '../_commonComponents/Pattern/Pattern';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { 
	TITLE,
	ARTICLES,
	PICTURES
} from '../../constants/history';

const History = () => {
	const languageId = 0;
	const title = TITLE.title[languageId];
	const titleImage = TITLE.imgPath;
	
	const historyText = ARTICLES[languageId].map(({ title, text }, index) => (
		<li className="history-right-articles-item" key={index}>
			<h4 className="history-right-articles-item-title">{title}</h4>
			<p className="history-right-articles-item-text">{text}</p>
		</li>
	));
	
	const carouselList = PICTURES.map((item, index) => (
		<div key={index}>
			<img src={item} alt="Historical palce" />
		</div>
	));
	
	return (
		<article className="history">
			<Header />
			
			<section className="history-header">
				<h1 className="history-header-title">{title}</h1>
				<img className="history-header-image" src={titleImage} width="1920" height="370" alt="Intro" />			
			</section>
			
			<div className="history-header-inner">
				<Pattern
					title=''
				>
					<section className="history-right-articles">
						<ul className="history-right-articles-items">
							{historyText}
						</ul>
					</section>
				</Pattern>
			</div>
			
			<section className="history-pictures">
				<Carousel
					autoPlay infiniteLoop interval='10000' showThumbs={true} showStatus={false} verticalSwipe={true}
				>
					{carouselList}
				</Carousel>			
			</section>
			
			<Footer />
		</article>
	)
};

export default History;