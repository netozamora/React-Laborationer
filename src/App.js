import './App.css';
import {useState} from 'react'
import Boklist from './components/Boklist';
import Navbar from './components/Navbar';


  const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [posts] = useState([
      {
        id:1,
        title: 'Cien anos de soledad',
        author: 'Gabriel garcia Marquez',
      },
      {
        id:2,
        title: 'Milleniun',
        author: 'Stig Larsson',
      },
      {
        id:3,
        title: 'Caballo de fuego',
        author: 'Florencia Bonelli',
      }
    ])
    
    const toggleLogin = () => {
      setIsLoggedIn(state => !state)
    }
   return (
    <div >
      
    <Navbar/>
    
      <div className='container mt-2 navbar'>
        <button onClick = {toggleLogin}>{isLoggedIn ? <h1 className='text-right mb-2'>Ernesto</h1> : <h1 className='text-right mb-2'>Loga in</h1>}</button>
      </div>
      
       <div className='container'>
        { posts.map (post => (
            isLoggedIn ? <Boklist key={post.id} title={post.title} author={post.author}/> : ''

        ))}
          
        
        
        
      </div>

    </div>
    
  );
}

export default App;
