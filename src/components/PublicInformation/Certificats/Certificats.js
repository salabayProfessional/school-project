import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import NavSecond from '../../_commonComponents/NavSecond/NavSecond';
import Partners from '../../_commonComponents/Partners/Partners';
import Pattern from '../../_commonComponents/Pattern/Pattern';

const Certificats = () => {	
	return (
		<article>
			<Header />
			
			<Pattern title='свідоцтва'>
				<br />
				<h4>				
					<a href="docs/certificates-of-certification.pdf" target="_blanck">
						Свідоцтво про атестацію
					</a>
				</h4>
				
				<br />
				<h4>				
					<a href="docs/appendix-attestation-certificate-1.pdf" target="_blanck">
						Додаток до свідоцтва про атестацію 1
					</a>
				</h4>
				
				<br />
				<h4>				
					<a href="docs/appendix-attestation-certificate-2.pdf" target="_blanck">
						Додаток до свідоцтва про атестацію 2
					</a>
				</h4>
			</Pattern>
			
			<Partners />
			
			<Footer />
		</article>
	)
};

export default Certificats;
