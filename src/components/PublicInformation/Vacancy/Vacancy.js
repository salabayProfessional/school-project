import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import NavSecond from '../../_commonComponents/NavSecond/NavSecond';
import Partners from '../../_commonComponents/Partners/Partners';
import Pattern from '../../_commonComponents/Pattern/Pattern';

const Vacancy = () => {	
	return (
		<article className="computer-profession">
			<Header />
			
			<Pattern title='вакансії'>
				<br />
				<h4>На даний момент вакансій немає.</h4>
			</Pattern>
			
			<Partners />
			
			<Footer />
		</article>
	)
};

export default Vacancy;
