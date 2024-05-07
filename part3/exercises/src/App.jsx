import HobbyIntroduction from './components/Introduction'
import FavoriteHeroes from './components/FavoriteHeroes'
import './App.css'

function App() {

  return (
    <div className='App'>
      <h1>My Hobby: Overwatch</h1>
      <HobbyIntroduction/>
      <h2>My Favorite Heroes to Play</h2>
      <FavoriteHeroes/>
    </div>
  )
}

export default App
