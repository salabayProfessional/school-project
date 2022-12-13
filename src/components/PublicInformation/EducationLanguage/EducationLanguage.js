import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import NavSecond from '../../_commonComponents/NavSecond/NavSecond';
import Partners from '../../_commonComponents/Partners/Partners';
import Pattern from '../../_commonComponents/Pattern/Pattern';

const EducationLanguage = () => {	
	return (
		<article>
			<Header />
			
			<Pattern title='мова освітнього процесу'>
				<br />
				<h4>				
					Мовою освітнього процесу у вищому
					професійному училищі є  державна мова (пункт 3.21 Статуту училища)
				</h4>
			</Pattern>
			
			<Partners />
			
			<Footer />
		</article>
	)
};

export default EducationLanguage;
