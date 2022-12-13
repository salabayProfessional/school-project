import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';
import Partners from '../../../_commonComponents/Partners/Partners';
import Pattern from '../../../_commonComponents/Pattern/Pattern';

const ComputerProfession = () => {	
	return (
		<article className="computer-profession">
			<Header />
			
			<Pattern title="Комп'ютерний напрям">
				<br />
				<h4>				
					<a href="https://drive.google.com/file/d/1Hbo9aiPMuaLNcugjpCfmxk9FMdVKKJ_Z/view?usp=sharing" target="_blanck">
						Натисніть, щоб відкрити документ
					</a>
				</h4>
				
				<br />
				<h4>				
					<a href="https://drive.google.com/file/d/1Hbo9aiPMuaLNcugjpCfmxk9FMdVKKJ_Z/view?usp=sharing" target="_blanck">
						Натисніть, щоб відкрити документ
					</a>
				</h4>
				
				<br />
				<h4>				
					<a href="docs/computer-prof.pdf" target="_blanck">
						Натисніть, щоб відкрити документ PDF
					</a>
				</h4>
			</Pattern>
			
			<Partners />
			
			<Footer />
		</article>
	)
};

export default ComputerProfession;
