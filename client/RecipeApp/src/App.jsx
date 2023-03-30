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
import Home from './components/Home';
import FirstPage from './components/FirstPage'
function App() {
  return (
    <>
    <RecipeState>
    <Router>
    <Routes>
      <Route path='/' element={<Home><FirstPage/></Home>}/>
      <Route path='/Menu' element={<Home><Menu/></Home>}/>
      <Route path='/Menu/:category' element={<Home><Categories/></Home>}/>
      <Route path='/Menu/:category/:Name/:id' element={<Home><Recipe/></Home>}/>
      <Route path='/saved/Menu/:category/:Name/:id' element={<Home><Recipe/></Home>}/>
      <Route path='/signup' element={<Home><Signup/></Home>}/>
      <Route path='/signin' element={<Home><Signin/></Home>}/>
      <Route path='/saved' element={<Home><SavedRecipes/></Home>}/>
    </Routes>
    </Router>
    </RecipeState>
    </>
  )
}

export default App
