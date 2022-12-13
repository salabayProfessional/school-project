import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Partners from '../../_commonComponents/Partners/Partners';
import Pattern from '../../_commonComponents/Pattern/Pattern';

const OfficialInformation = () => {	
	return (
		<article>
			<Header />
			
			<Pattern title="Офіційна інформація">
				<br />
				<h4>				
					<a href="https://drive.google.com/file/d/1z5IS8RS34A1RINu7qQ9-WreAqiBqbVRr/view?usp=sharing" target="_blanck">
						Електроенергія
					</a>
				</h4>			
			</Pattern>
			
			<Partners />
			
			<Footer />
		</article>
	)
};

export default OfficialInformation;