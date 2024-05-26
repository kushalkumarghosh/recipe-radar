import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import PopularItems from "../components/PopularItems";


const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <PopularItems></PopularItems>
            <Contact></Contact>
        </div>
    );
};

export default Home;