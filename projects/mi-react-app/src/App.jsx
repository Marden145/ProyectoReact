import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';
const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'JorgeABCT',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]
export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            formatUserName={(userName) => `@${userName}`}
            name={name}
            initialIsFollowing={isFollowing}
          >
            
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}