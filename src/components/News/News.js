import { useState, useRef } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Advertisement from '../_commonComponents/Advertisement/Advertisement';
import ButtonLine from '../_commonComponents/ButtonLine';
import OneNews from '../OneNews/OneNews';
import NewsNav from './NewsNav/NewsNav';

import { 
	TITLE,
	ARTICLES,
	ARTICLES_PROPS
} from '../../constants/news';

const News = () => {
	const languageId = 0;
	const { allNews } = TITLE[languageId];
	const { seeMore, moreNews }	= ARTICLES_PROPS[languageId];
	
	const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop - 380);
	const newsRef = useRef();
	const advertisementRef = useRef();
	
	const [isOneNewsShows, setIsOneNewsShow] = useState(null);
	
	const newsNawClickHandler = (item, index) => {
		switch (index) {
			case 0:
				scrollToRef(newsRef);
				break;
			case 1:
				scrollToRef(advertisementRef);
				break;			
			default:
				scrollToRef(newsRef);
		}
	};
	
	const articleList = ARTICLES[languageId].map(({ title, date, images, text }, index) => (
		<li className="news-articles-item" key={index}>
			<div className="news-articles-item-left">
				{ images.length > 0
					&&				
					<img className="news-articles-item-image" src={images[0]} width="300" height="260" alt="Article" />
				}
			</div>
			
			<div className="news-articles-item-right">
				<h5 className="news-articles-item-right-title">{title}</h5>
				
				<p className="news-articles-item-right-date">{date}</p>
				
				<p className="news-articles-item-right-text">{text}</p>
				
				<div className="news-articles-item-right-button">
					<ButtonLine
						text={seeMore}
						clicked={ () => setIsOneNewsShow({ title, date, images, text }) }
					/>
				</div>
			</div>
		</li>
	));
					
	return (
		<article className="news">
			<Header />
			
			<div className="news-nav-wrapper">
				<NewsNav
					clicked={newsNawClickHandler}
				/>
			</div>
			
			{ !isOneNewsShows
				&&	
				<>
					<section className="news-header">
						<h1 className="news-header-title">{allNews}</h1>
					</section>
					
					<section className="news-articles" ref={newsRef}>
						<ul className="news-articles-items">{articleList}</ul>
						
						<div className="news-articles-button">
							<ButtonLine
								text={moreNews}
							/>
						</div>
					</section>
					
					<div className="news-advertisement" ref={advertisementRef}>
						<Advertisement />
					</div>
				</>
			}
			
				<OneNews
					data={isOneNewsShows}
				/>
			<Footer />
		</article>		
	)
};

export default News;