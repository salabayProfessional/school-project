import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TeamPattern from './TeamPattern/TeamPattern';

const Team = (props) => {
	const languageId = 0;	
	
	const title = props.title.title[languageId];	
	const imgPath = props.title.imgPath;
	
	const articleProps = props.articlesProps[languageId];
	const articlesTitle = articleProps[props.role];
	
	const articleList = props.articles[languageId].map(({ image, name, middleName, text }, index) => (
		<li className="team-articles-item" key={index}>
			<div className="team-articles-item-left">
				<img className="team-articles-item-image" src={image} width="125" height="175" alt="Avatar" />
			</div>
			
			<div className="team-articles-item-right">
				<h4 className="team-articles-item-right-title">{name}</h4>
				<h4 className="team-articles-item-right-title">{middleName}</h4>
				<p className="team-articles-item-right-text">{text}</p>
			</div>
		</li>
	));
				
	return (
		<article className="team">
			<Header />
			
			<section className="team-header">
				<h1 className="team-header-title">{title}</h1>
				<img className="team-header-image" src={imgPath} width="1920" height="370" alt="Intro" />			
			</section>
			
			
			<TeamPattern title={articlesTitle}>
				<section className="team-articles">
					<ul className="team-articles-items">
						{articleList}
					</ul>
				</section>
			</TeamPattern>
				
			<Footer />
		</article>		
	)
};

export default Team;