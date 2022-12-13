import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Partners from '../../_commonComponents/Partners/Partners';
import Pattern from '../../_commonComponents/Pattern/Pattern';

const AdmissionComitee = () => {	
	return (
		<article>
			<Header />
			
			<Pattern title="Приймальна комісія">
				<br />
				<h4>
					<a href="https://www.facebook.com/profile.php?id=100020080413173" target="_blanck">
						Приймальна комісія
					</a>
				</h4>
			</Pattern>
			
			<Partners />
			
			<Footer />
		</article>
	)
};

export default AdmissionComitee;