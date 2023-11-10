import Profile from './components/Profile'
import avatar from './assets/avatar.jpg'

export default function App() {
  return (
    <div className='app'>
      <Profile 
        avatar={avatar}
        nome='Everson Sousa'
        bio='Vite + React developer'
        email='evs.link@hotmail.com'
        fone='+5585991003326'
        githubUrl='https://github.com/evssousa'
        linkedinUrl='https://linkedin/in/evssousa'
        twitterUrl='#'
      />
    </div>
  )
}