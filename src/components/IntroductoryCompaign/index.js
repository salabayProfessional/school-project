// import ReactPlayer from 'react-player';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Pattern from '../_commonComponents/Pattern/Pattern';

import { 
	TITLE,
	COMMITTEE,
	VIDEOS,
	STUDYING
} from '../../constants/introCompaign';

// import ButtonYellow from '../_commonComponents/ButtonYellow';

const IntroductoryCompaign = () => {
	const languageId = 0;
	const title = TITLE.title[languageId];
	const titleImage = TITLE.imgPath;
	const committeeTitle = COMMITTEE.title[languageId];
	
	const committeeList = COMMITTEE.images.map((item, index) => (
		<li className="introductory-compaign-committee-item" key={index}>
			<img src={item} height="510" alt="Intro" />
		</li>
	));
	
	const videoList = VIDEOS.map((item, index) => (
		<li className="introductory-compaign-videos-item" key={index}>
			<video width="760" height="420" controls>
				<source src={item} type="video/mp4" />
				<source src={item} type="video/ogg" />
				Your browser does not support the video tag.				
			</video>
		</li>
	));
	
	const studyingList = STUDYING.map((item, index) => (
		<li className="introductory-compaign-studying-item" key={index}>
			<img src={item} width="280" height="210" alt="Intro" />
		</li>
	));
	
	return (
		<article className="introductory-compaign">
			<Header />
			
			<section className="introductory-compaign-header">
				<img className="introductory-compaign-header-image" src={titleImage} height="370" alt="Intro" />
				
				<h1 className="introductory-compaign-header-title">{title}</h1>
			</section>
						
			<div className="introductory-compaign-committee">
				<Pattern
					title={committeeTitle}
				>
					<ul className="introductory-compaign-committee-items">{committeeList}</ul>
				</Pattern>
			</div>
			
			<section className="introductory-compaign-videos">
				<div className="introductory-compaign-videos-inner">
					<ul className="introductory-compaign-videos-items">
						{videoList}
					</ul>
				</div>
			</section>
			
			<section className="introductory-compaign-studying">
				<ul className="introductory-compaign-studying-items">
					{studyingList}
				</ul>
			</section>
			
			<Footer />
		</article>
	)
};

export default IntroductoryCompaign;