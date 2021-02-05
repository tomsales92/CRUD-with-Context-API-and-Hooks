import { useCallback, useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { GlobalContext } from '../../../context/GlobalState';
import { Container, Form } from './styles';

function Add() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [designation, setDesignation] = useState('');
  const { addEmployee, employees } = useContext(GlobalContext);
  const history = useHistory();

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      const newEmployee = {
        id: employees.length + 1,
        name,
        location,
        designation,
      };
      addEmployee(newEmployee);
      history.push('/');
    },
    [name, location, designation, addEmployee, employees, history],
  );
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome do Funcionário</label>

          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Digite o nome"
          />
        </div>

        <div>
          <label htmlFor="location">Localização</label>
          <input
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder="Digite a Localização"
          />
        </div>

        <div>
          <label htmlFor="designation">Cargo</label>
          <input
            type="text"
            value={designation}
            onChange={e => setDesignation(e.target.value)}
            placeholder="Digite o cargo"
          />
        </div>

        <button type="submit">Adicionar Funcionário</button>
        <div>
          <Link to="/">Cancelar</Link>
        </div>
      </Form>
    </Container>
  );
}

export default Add;
