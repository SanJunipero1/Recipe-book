import React from 'react';
import DataFetch from './Main/DataFetch'
import Recipes from './Main/Recipes/Index';
import RecipeDetailPage from './Main/Recipes/RecipeDetailPage';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Category from './Main/Recipes/Category';
import Layout from './Layout';

export default function Routing(){
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
   
}