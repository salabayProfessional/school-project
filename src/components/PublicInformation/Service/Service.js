import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import NavSecond from '../../_commonComponents/NavSecond/NavSecond';
import Partners from '../../_commonComponents/Partners/Partners';
import Pattern from '../../_commonComponents/Pattern/Pattern';

const Service = () => {	
	return (
		<article>
			<Header />
			
			<Pattern title='послуги'>
				<br />
				<h4>				
					<a href="https://drive.google.com/file/d/1CsEskr0nPYLaWAdxjQTHX9zgvorWjjCZ/view?usp=sharing" target="_blanck">
						Інформація про перелік товарів, робіт і послуг, отриманих як благодійна допомога, із зазначенням їх вартості, а також про кошти, отримані з інших джерел, не заборонених законодавством.
					</a>
				</h4>
			</Pattern>
			
			<Partners />
			
			<Footer />
		</article>
	)
};

export default Service;
