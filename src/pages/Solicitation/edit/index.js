import { useCallback, useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

import { GlobalContext } from '../../../context/GlobalState';
import { Container, Form } from './styles';

function Edit() {
  const history = useHistory();
  const { employees, editEmployee } = useContext(GlobalContext);
  const { id } = useParams();
  const [selectedUser, setSeletedUser] = useState({
    id: null,
    name: '',
    designation: '',
    location: '',
  });

  useEffect(() => {
    const employeeId = id;
    const selectedUser = employees.find(emp => emp.id === parseInt(employeeId));
    setSeletedUser(selectedUser);
  }, [employees, id]);

  const handleEditSubmit = useCallback(
    e => {
      e.preventDefault();
      editEmployee(selectedUser);
      history.push('/');
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Salvo',
        showConfirmButton: false,
        timer: 2000,
      });
    },
    [editEmployee, history, selectedUser],
  );

  const handleOnChange = useCallback(
    (userKey, value) => {
      setSeletedUser({ ...selectedUser, [userKey]: value });
    },
    [selectedUser],
  );

  if (!selectedUser || !selectedUser.id) {
    return <div>Nada consta</div>;
  }
  return (
    <Container>
      <Form onSubmit={handleEditSubmit}>
        <div>
          <label htmlFor="name">Nome do Funcionário</label>
          <input
            value={selectedUser.name}
            onChange={e => handleOnChange('name', e.target.value)}
            type="text"
            placeholder="Digite o Nome"
          />
        </div>

        <div>
          <label htmlFor="location">Localização</label>
          <input
            value={selectedUser.location}
            onChange={e => handleOnChange('location', e.target.value)}
            type="text"
            placeholder="Digite a Localização"
          />
        </div>

        <div>
          <label htmlFor="designation">Cargo</label>
          <input
            value={selectedUser.designation}
            onChange={e => handleOnChange('designation', e.target.value)}
            type="text"
            placeholder="Digite o Cargo"
          />
        </div>
        <button type="submit">Editar Funcionário</button>
        <div>
          <Link to="/">Cancelar</Link>
        </div>
      </Form>
    </Container>
  );
}

export default Edit;
