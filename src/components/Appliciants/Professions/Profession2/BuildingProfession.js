import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';
import Partners from '../../../_commonComponents/Partners/Partners';
import Pattern from '../../../_commonComponents/Pattern/Pattern';

const BuildingProfession = () => {	
	return (
		<article>
			<Header />
			
			<Pattern title="Будівельний напрям">
				<br />
				<h4>				
					<a href="https://drive.google.com/file/d/1bFsJi7BtDOTddo9ghNUNle5iV00jiJoH/view?usp=sharing" target="_blanck">
						Натисніть, щоб відкрити документ
					</a>
				</h4>
				
				<br />
				<h4>				
					<a href="docs/building-prof.pdf" target="_blanck">
						Натисніть, щоб відкрити документ PDF
					</a>
				</h4>
			</Pattern>
			
			<Partners />
			
			<Footer />
		</article>
	)
};

export default BuildingProfession;
