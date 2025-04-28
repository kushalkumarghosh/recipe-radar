import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import axios from "axios";

const appId = import.meta.env.VITE_APP_ID;
const appKey = import.meta.env.VITE_APP_KEY;

const PopularItems = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPopularItems = async () => {
            try {
                const query = 'chicken'; 
                const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}`;

                const response = await axios.get(url);
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
            <SectionTitle heading="Popular Items" />
            <div className="flex justify-center">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.slice(0, 6).map((item, index) => (
                        <div key={index} className="border rounded-lg p-4">
                            <img src={item.recipe.image} alt="recipe image" className="w-full h-auto rounded" />
                            <h2 className="my-3 text-center">{item.recipe.label}</h2>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PopularItems;
