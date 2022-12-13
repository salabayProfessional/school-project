import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Partners from '../_commonComponents/Partners/Partners';
import Pattern from '../_commonComponents/Pattern/Pattern';

const Booling = () => {	
	return (
		<article>
			<Header />
			
			<Pattern title="протидія булінгу">
				<br />
				<h4>				
					<a href="https://drive.google.com/file/d/1UXyHIcatLM78dSBjhL1Io0-RYAucIZ4s/view?usp=sharing" target="_blanck">
						План заходів, спрямованих на запобігання та протидію булінгу (цькуванню) в закладі освіти
					</a>
				</h4>
				
				<br />
				<h4>				
					<a href="https://drive.google.com/file/d/1dOBCn7yFrwCj3nyKB_O0TW58uXmAIJNv/view?usp=sharing" target="_blanck">
						Порядок подання та розгляду (з дотриманням конфіденційності) заяв про випадки булінгу у закладі освіти
					</a>
				</h4>
				
				<br />
				<h4>				
					<a href="https://drive.google.com/file/d/1wh8NDxfDEW4_qQDgGs_u7rMRLV0Jy4Up/view?usp=sharing" target="_blanck">
						Порядок реагування на доведені випадки булінгу в закладі освіти та відповідальність осіб, причетних до булінгу
					</a>
				</h4>			
			</Pattern>
			
			<Partners />
			
			<Footer />
		</article>
	)
};

export default Booling;