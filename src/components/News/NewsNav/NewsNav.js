import { 
	NAV_LIST
} from '../../../constants/news';

const NewsNav = ({ clicked }) => {
	const languageId = 0;
	const navList = NAV_LIST[languageId].map((item, index) => {
		return (
			<li
				className="news-nav-item"
				onClick={() => clicked(item, index)}
				key={item}
			>
				{item}
			</li>
		)
	})
	
	return (
		<nav className="news-nav">
			<ul className="news-nav-items">{navList}</ul>
		</nav>		
	)
};

export default NewsNav;