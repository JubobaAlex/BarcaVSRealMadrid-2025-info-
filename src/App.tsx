import './App.css'
import './Animation.css'
function App() {

  return (
      <div className='osnova'>
        <header>
          <div className='header'>
            <b>Real Madrid vs Barcelona</b>
          </div>
        </header>
        <div className='info'>
          <div className='chet'>
            <div>
              <b>Барселона <img className='ico' src='./public/icoBar.png' /> 4 : 3 Реал Мадрид <img className='ico' src='./public/icoMadr.png' /></b>
            </div>
          </div>
        </div>
      </div>
  )
}

export default App
