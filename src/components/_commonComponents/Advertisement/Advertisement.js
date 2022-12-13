import Block from './Block/Block';

import { 
	TITLE,
	ARTICLES,
	ARTICLES_PROPS
} from '../../../constants/advertisement';
import ButtonYellow from '../ButtonYellow';

const Advertisement = () => {
	const languageId = 0;
	
	const title = TITLE[languageId];
	const articles = ARTICLES[languageId];
	const { allAdvertisements } = ARTICLES_PROPS[languageId];
	
	// Preparation_(start)
	const articlesLength = articles.length;
	let articlesCount = {
		left: 0,
		right: 0
	};
	
	if (articlesLength > 4) {
		articlesCount.left = Math.round(articlesLength / 2);		
		articlesCount.right = articlesLength - articlesCount.left;
	} else {
		articlesCount.left = articlesLength;
	}
	
	const contentLeft = articlesCount.left === 0 ? null : getContent(articles, 0, articlesCount.left - 1);
	const contentRight =  articlesCount.right === 0 ? null : getContent(articles, articlesCount.left + 1, articlesLength - 1);	
	
	// Get articles content
	function getContent(articles, from, to) {
		let res = [];
		for (let i = from; i <= to; i++) {
			res.push(articles[i]);
		}
		
		return res;
	}
	// Preparation_(end)
				
	return (
		<section className="advertisement">
			<div className="advertisement-header">
				<h3 className="advertisement-header-title">{title}</h3>
			</div>
			
			{
				contentLeft && !contentRight 
				&&
				<main className="advertisement-articles-single">
					<Block 
						content={contentLeft}
					/>
				</main>
			}
			
			{
				contentLeft && contentRight
				&&				
				<main className="advertisement-articles">
					<div className="advertisement-articles-inner">
						<div className="advertisement-articles-block-wrapper-left">
							<Block 
								content={contentLeft}
							/>
						</div>
						
						<div className="advertisement-articles-block-wrapper-right">
							<Block
								content={contentRight}
							/>
						</div>
					</div>
				</main>
			}
			
			<div className="advertisement-button">
				<ButtonYellow text={allAdvertisements} />
			</div>
		</section>
	)
};

export default Advertisement;