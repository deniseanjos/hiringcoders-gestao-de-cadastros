import Menu from './componentes/menu/index.js';
import Rodape from './componentes/rodape/index.js';
import Routes from './Routes';

function App() {
  return (
    <>
      <div>
        <Menu />
      </div>
      <div>
        <Routes />
      </div>
      <div>
        <Rodape />
      </div>
    </>
  );
}

export default App;
