import List from './componets/list/List';
import Chat from './componets/chat/Chat';
import Detail from './componets/detail/Detail';

const App = () => {
  return (
    <div className='container'>
      <List />
      <Chat />
      <Detail />
    </div>
  )
}

export default App