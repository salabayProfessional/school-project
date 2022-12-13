import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import NavSecond from '../../_commonComponents/NavSecond/NavSecond';
import Partners from '../../_commonComponents/Partners/Partners';
import Pattern from '../../_commonComponents/Pattern/Pattern';

const Monitoring = () => {	
	return (
		<article>
			<Header />
			
			<Pattern title='моніторинг якості освіти'>
				<br />
				<h4>Моніторинг якості освіти у закладі освіти не проводився.</h4>
			</Pattern>
			
			<Partners />
			
			<Footer />
		</article>
	)
};

export default Monitoring;
