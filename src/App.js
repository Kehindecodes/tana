import './App.css';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<HeroSection />
			<FeaturesSection />
			<Footer />
		</div>
	);
}

export default App;
