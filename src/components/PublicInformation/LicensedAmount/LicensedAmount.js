import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import NavSecond from '../../_commonComponents/NavSecond/NavSecond';
import Partners from '../../_commonComponents/Partners/Partners';
import Pattern from '../../_commonComponents/Pattern/Pattern';

const LicensedAmount = () => {	
	return (
		<article>
			<Header />
			
			<Pattern title='ліцензований обсяг'>
				<br />
				<h4>				
					<a href="https://registry.edbo.gov.ua/university/1920/professions/" target="_blanck">
						Інформація
					</a>
				</h4>
			</Pattern>
			
			<Partners />
			
			<Footer />
		</article>
	)
};

export default LicensedAmount;
