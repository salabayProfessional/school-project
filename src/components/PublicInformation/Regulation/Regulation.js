import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import NavSecond from '../../_commonComponents/NavSecond/NavSecond';
import Partners from '../../_commonComponents/Partners/Partners';
import Pattern from '../../_commonComponents/Pattern/Pattern';

const Regulation = () => {	
	return (
		<article>
			<Header />
			
			<Pattern title='статут'>
				<br />
				<h4>				
					<a href="https://drive.google.com/file/d/19jrKYqNuNXEy1Ru7BwuSK-u9L92-5hA9/view?usp=sharing" target="_blanck">
						Натисніть, щоб відкрити документ
					</a>
				</h4>
			</Pattern>
			
			<Partners />
			
			<Footer />
		</article>
	)
};

export default Regulation;
