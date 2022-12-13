import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';
import Partners from '../../../_commonComponents/Partners/Partners';
import Pattern from '../../../_commonComponents/Pattern/Pattern';

const CarProfession = () => {	
	return (
		<article>
			<Header />
			
			<Pattern title="Автомобільний напрям">
				<br />
				<h4>				
					<a href="ttps://drive.google.com/file/d/1ooSXey-IEhy-C8IpvflYAZxTdBLMqn-e/view?usp=sharing" target="_blanck">
						Натисніть, щоб відкрити документ
					</a>
				</h4>
				
				<br />
				<h4>				
					<a href="docs/car-prof.pdf" target="_blanck">
						Натисніть, щоб відкрити документ PDF
					</a>
				</h4>
			</Pattern>
			
			<Partners />
			
			<Footer />
		</article>
	)
};

export default CarProfession;
