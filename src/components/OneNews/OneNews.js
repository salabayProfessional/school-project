import Advertisement from '../_commonComponents/Advertisement/Advertisement';

const OneNews = ({ data }) => {
	if (!data) {
		return null;
	}
	
	const {
		title,
		date,
		images,
		text
	} = data;
	
	const imageList = images.map((item, index) => (
		<li className="one-news-pictures-item" key={index}>
			<img className="one-news-pictures-item-image" src={item} width="280" height="200" alt="More info" />
		</li>
	));
				
	return (
		<article className="one-news">
			<section className="one-news-header">
				{ images.length > 0
					&&				
					<img className="one-news-header-image" src={images[0]} width="410" height="600" alt="Article" />
				}
			</section>
		
			<section className="one-news-article">
				<h3 className="one-news-article-title">{title}</h3>
				
				<p className="one-news-article-date">{date}</p>
				
				<p className="one-news-article-text">{text}</p>
			</section>
			
			<section className="one-news-pictures-items">
				{imageList}
			</section>
			
			<div className="one-news-advertisement">
				<Advertisement />
			</div>
		</article>
	)
};

export default OneNews;