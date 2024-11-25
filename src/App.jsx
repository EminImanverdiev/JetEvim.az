import CategoryBox from './components/categoryBox/CategoryBox'
import HeaderNavBox from './components/headerNavBox/HeaderNavBox'
import AboutPage from './page/about/AboutPage'
import Contack from './page/about/Contack'
import Faq from './page/about/Faq'
import Info from './page/about/Info'
import Rules from './page/about/Rules'
import TermCondition from './page/about/TermCondition'
import DetailPage from './page/detailPage/DetailPage'
import LikedPage from './page/liked/LikedPage'
import Main from './page/main/Main'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewProductAdd from './page/newProductAdd/NewProductAdd'
import LogIn from './page/login/Login'
import SignUp from './page/login/SignUp'
import ProfilePage from './page/profile/ProfilePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/info' element={<Info />} />
        <Route path='/rules' element={<Rules />} />
        <Route path='/termcondition' element={<TermCondition />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/contack' element={<Contack />} />
        <Route path='/product-details/:id' element={<DetailPage />} />
        <Route path='/likedPage' element={<LikedPage />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/categoryBox' element={<CategoryBox />} />
        <Route path='/headerBox' element={<HeaderNavBox />} />
        <Route path='/yeniElan' element={<NewProductAdd />} />
        <Route path='/profil' element={<ProfilePage />} />
      </Routes>
    </Router>
  )
}

export default App;
