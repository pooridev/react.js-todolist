import GithubCTA from '../components/CTA/GithubCTA';
import Header from '../components/Header/Header';
import Tasks from '../components/Tasks/Tasks';
import './App.css';

const App = () => {
  return (
    <main className='to-do'>
      <Header />
      <section className='to-do__body'>
        <Tasks />
      </section>
      <button onClick={Function.bind()} className='newTaskModalTrigger'>
        <i className='bx bx-plus-circle'></i>
      </button>

      <GithubCTA />
    </main>
  );
};

export default App;
