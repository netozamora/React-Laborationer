import {useState} from 'react'
const Boklist = ({title, author}) => {

  const [isDark, setIsDark] = useState(false)

  const setTheme = () => {
    setIsDark (state => !state )
  }
  return (

    <div className={`post card mb-2 ${isDark && 'dark'}`}>
      <h2>{title}</h2>
      <p>{author}</p>
      <button onClick={setTheme}>Ändra utseende</button>
    </div>
  )
}

export default Boklist