import SectionTitle from "./SectionTitle";


const About = () => {
    return (
        <div>
            <SectionTitle
                heading="About Us"
            ></SectionTitle>
            <div className="text-center px-8 ">
                At Recipe Radar, our mission is to bring together food enthusiasts from all walks of life. We aim to inspire creativity in the kitchen, simplify meal planning, and foster a community where everyone can share their passion for cooking.Recipe Radar was born out of a love for cooking and a desire to make recipe discovery more accessible.
                <br />
                <p className="font-bold">
                    Happy cooking,
                    The Recipe Radar Team
                </p>
            </div>
        </div>
    );
};

export default About;