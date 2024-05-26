import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../assets/Banner/recipe1.png";
import img2 from "../assets/Banner/recipe2.png";
import img3 from "../assets/Banner/recipe3.png";
import img4 from "../assets/Banner/recipe4.png";

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
        </Carousel>
    );
};

export default Banner;
