import Header from '../Header/Header';
import CarouselBig from './Carousel/Carousel';
import Benefits from './Benefits/Benefits';
import Invitation from './Invitation/Invitation';
import Partners from '../_commonComponents/Partners/Partners';
import Footer from '../Footer/Footer';

const Home = () => {
	return (
		<article className="home">
			<Header />
			
			<CarouselBig />
			
			<Benefits />
			
			<Invitation />
			
			<Partners />
			
			<Footer />			
		</article>
	)
};

export default Home;