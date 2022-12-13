import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NavSecond from '../_commonComponents/NavSecond/NavSecond';
import Partners from '../_commonComponents/Partners/Partners';
import Pattern from '../_commonComponents/Pattern/Pattern';

const LinkPattern = () => {	
	return (
		<article className="link-pattern">
			<Header />
			
			<Pattern title=''>
			</Pattern>
			
			<Partners />
			
			<Footer />
		</article>
	)
};

export default LinkPattern;
