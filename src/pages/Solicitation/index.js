import { Link } from 'react-router-dom';
import { FiPlusCircle } from 'react-icons/fi';

import List from './list';
import { Container, AreaAction } from './styles';

function Solicitation() {
  return (
    <Container>
      <h1>CRUD com React context api e Hooks</h1>
      <AreaAction>
        <h3>Lista de Funcionários</h3>
        <Link to="/add">
          <button type="button">
            <FiPlusCircle />
            Add Funcionário
          </button>
        </Link>
      </AreaAction>
      <List />
    </Container>
  );
}

export default Solicitation;
