import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import axios from "axios";

const PopularItems = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPopularItems = async () => {
            try {
                const response = await axios.get(
                    'https://api.edamam.com/search?q=popular&app_id=1984166e&app_key=57a522f78440a1575e8800817529b5ba'
                );
                setItems(response.data.hits);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchPopularItems();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading items: {error.message}</p>;

    return (
        <div>
            <SectionTitle
                heading="Popular Items"
            ></SectionTitle>
            <div className="flex justify-center">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.slice(0, 6).map((item, index) => (
                        <div key={index} className="border rounded-lg p-4">
                            <img src={item.recipe.image} className="w-full h-auto rounded" />
                            <h2 className="my-3 text-center">{item.recipe.label}</h2>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PopularItems;