import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import PopularItems from "../components/PopularItems";


const Home = () => {
    return (
        <div name='home'>
            <Banner />
            <PopularItems></PopularItems>
            <About />
            <Contact></Contact>
        </div>
    );
};

export default Home;