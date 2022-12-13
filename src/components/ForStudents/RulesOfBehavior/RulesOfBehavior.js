import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import NavSecond from '../../_commonComponents/NavSecond/NavSecond';
import Partners from '../../_commonComponents/Partners/Partners';
import Pattern from '../../_commonComponents/Pattern/Pattern';

const RulesOfBehavior = () => {	
	return (
		<article>
			<Header />
			
			<Pattern title="правила поведінки здобувача освіти">
				<br />
				<h4>				
					<a href="https://drive.google.com/file/d/17wNC16odtZFmRlfCIS0IYi7KuPXuvbuR/view?usp=sharing" target="_blanck">						
						Правила поведінки здобувачів освіти в Державному професійно-технічному 
						навчальному закладі "Львівське вище професійне училище комп'ютерних технологій та будівництва"
					</a>
				</h4>
			</Pattern>
			
			<Partners />
			
			<Footer />
		</article>
	)
};

export default RulesOfBehavior;