import { createPortal } from 'react-dom';
import './GithubCTA.css';

const GithubCTA = () =>
  createPortal(
    <a
      href='https://github.com/Pooria-Faramarzian'
      className='git-hub__cta m-4'>
      <i className='bx bxl-github'></i>
    </a>,
    document.getElementById('root')
  );

export default GithubCTA;
