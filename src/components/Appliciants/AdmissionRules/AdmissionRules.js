import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Partners from '../../_commonComponents/Partners/Partners';
import Pattern from '../../_commonComponents/Pattern/Pattern';

const AdmissionRules = () => {	
	return (
		<article>
			<Header />
			
			<Pattern title="правила прийому">
				<br />
				<h4>				
					<a href="https://drive.google.com/file/d/1r8da-nprVZMzeTDE24BSfH6Sk_pdUBfb/view?usp=sharing" target="_blanck">
						Правила прийому для підготовки кваліфікованих робітників на 2022 рік
					</a>
				</h4>
				
				<br />
				<h4>				
					<a href="https://drive.google.com/file/d/1wpfTZzGim9R5DDkZnoCVhGwqWcQx1fkt/view?usp=sharing" target="_blanck">
						Правила прийому для здобуття освітньо-професійного ступеня фахового молодшого бакалавра на 2022 рік
					</a>
				</h4>
				
				<br />
				<h4>				
					<a href="https://drive.google.com/file/d/1ENt0RGXm4lXp1uFphstrvxrLZ1UbhThz/view?usp=sharing" target="_blanck">
						МОТИВАЦІЙНИЙ ЛИСТ
					</a>
				</h4>
			</Pattern>
			
			<Partners />
			
			<Footer />
		</article>
	)
};

export default AdmissionRules;