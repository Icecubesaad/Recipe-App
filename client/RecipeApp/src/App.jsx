import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import RecipeState from './Functions/RecipeState';
import Menu from './components/Menu';
import Categories from './components/Categories';
import Recipe from './components/Recipe';
import Signup from './components/Authentication/Signup';
import Signin from './components/Authentication/Signin';
import SavedRecipes from './components/SavedRecipes';
function App() {
  return (
    <>
    <RecipeState>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/Menu' element={<Menu/>}/>
      <Route path='/Menu/:category' element={<Categories/>}/>
      <Route path='/Menu/:category/:Name/:id' element={<Recipe/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='signin' element={<Signin/>}/>
      <Route path='/saved' element={<SavedRecipes/>}/>

    </Routes>
    </Router>
    </RecipeState>
    </>
  )
}

export default App
