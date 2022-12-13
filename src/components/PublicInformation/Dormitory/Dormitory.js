import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Partners from '../../_commonComponents/Partners/Partners';
import Pattern from '../../_commonComponents/Pattern/Pattern';

const Dormitory = () => {	
	return (
		<article>
			<Header />
			
			<Pattern title="Гуртожиток">
				<br />			
				<h4>Гуртожиток  (площею 2342,2 кв.м) знаходиться поряд з навчальним корпусом ДПТНЗ
				«Львівське вище професійне училище комп’ютерних технологій та будівництва» за адресою:</h4>
				<br />			
				<h4>Львівська обл., м.Львів, вул.Лінкольна А., будинок 23</h4>
				<br />
				<h4>Учням училища надаються безоплатні місця в гуртожитку.
				Загальна кількість ліжко-місць у гуртожитку 165.</h4>
			</Pattern>
			
			<Partners />
			
			<Footer />
		</article>
	)
};

export default Dormitory;