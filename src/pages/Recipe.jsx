import { useState, useEffect } from 'react';
import axios from 'axios';

const appId = import.meta.env.VITE_APP_ID;
const appKey = import.meta.env.VITE_APP_KEY;

const Recipe = () => {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('');

    const fetchRecipes = async (searchQuery = 'chicken') => {
        try {
            const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=${appId}&app_key=${appKey}`;
            const response = await axios.get(url);
            setRecipes(response.data.hits);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    useEffect(() => {
        fetchRecipes();  
    }, []);

    const handleSearch = () => {
        if (query.trim() !== '') {
            fetchRecipes(query);
            setQuery('');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-center mb-8">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="border border-gray-300 p-2 rounded-l-md"
                    placeholder="Search for recipes..."
                />
                <button
                    onClick={handleSearch}
                    className="bg-slate-400 hover:bg-slate-500 text-white p-2 rounded-r-md"
                >
                    Search
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.slice(0, 9).map((recipe, index) => (
                    <div key={index} className="bg-white shadow-md rounded-md overflow-hidden">
                        <img src={recipe.recipe.image} alt={recipe.recipe.label} className="w-full h-48 object-cover" />
                        <div className="p-2">
                            <h2 className="text-xl font-bold mb-2">{recipe.recipe.label}</h2>
                            <p className="text-gray-700">Calories: {Math.round(recipe.recipe.calories)}</p>
                            <p className="text-gray-700">Cuisine Type: {recipe.recipe.cuisineType?.join(', ') || 'Unknown'}</p>
                            <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:underline">View Recipe</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recipe;
