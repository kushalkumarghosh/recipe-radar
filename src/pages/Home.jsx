import About from "../components/About";
import Banner from "../components/Banner";
import PopularItems from "../components/PopularItems";


const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <PopularItems></PopularItems>
        </div>
    );
};

export default Home;