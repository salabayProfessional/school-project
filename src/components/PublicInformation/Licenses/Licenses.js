import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import NavSecond from '../../_commonComponents/NavSecond/NavSecond';
import Partners from '../../_commonComponents/Partners/Partners';
import Pattern from '../../_commonComponents/Pattern/Pattern';

const Licenses = () => {	
	return (
		<article className="licenses">
			<Header />
			
			<Pattern title='Ліцензії ПТО'>
				<br />
				<h4>				
					<a href="https://registry.edbo.gov.ua/university/1920/professions/" target="_blank">Натисніть, щоб відкрити документ</a>
				</h4>
			</Pattern>
			
			<Partners />
			
			<Footer />
		</article>
	)
};

export default Licenses;
