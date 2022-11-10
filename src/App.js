import './App.css';

import DataFetch from './Components/Main/DataFetch';
import Recipes from './Components/Main/Recipes/Index';
import RecipeDetailPage from './Components/Main/Recipes/RecipeDetailPage';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Category from './Components/Main/Recipes/Category';

function App() {
  return (

	<div className="App">
		<Routes>
			<Route path="/" element={<DataFetch/> } />
			<Route path="/recipes">
				<Route index element={<Recipes />} />
				<Route path=":recipeID" element={<RecipeDetailPage />} />
			</Route>
			<Route path="/category">
				<Route index element={<Recipes />} />
				<Route path=":categoryID" element={<Category />} />
			</Route>
		</Routes>
	</div>

  );
}

export default App;
