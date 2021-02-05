import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiEdit, FiMapPin, FiTrash2 } from 'react-icons/fi';

import { GlobalContext } from '../../../context/GlobalState';
import { Container, ListData, ListAction } from './styles';

function List() {
  const { employees, editEmployee, removeEmployee } = useContext(GlobalContext);

  return (
    <Fragment>
      {employees.length > 0 ? (
        <Fragment>
          {employees.map(employee => (
            <Container>
              <ListData>
                <strong>{employee.name}</strong>
                <span className="designation">{employee.designation}</span>
                <span className="locate">
                  {employee.location}
                  <FiMapPin />
                </span>
              </ListData>
              <ListAction>
                <Link to={`/edit/${employee.id}`}>
                  <button
                    type="button"
                    onClick={() => editEmployee(employee.id)}
                  >
                    <FiEdit color="blue" />
                  </button>
                </Link>
                <button
                  type="button"
                  onClick={() => removeEmployee(employee.id)}
                >
                  <FiTrash2 color="red" />
                </button>
              </ListAction>
            </Container>
          ))}
        </Fragment>
      ) : (
        <p>Sem registro</p>
      )}
    </Fragment>
  );
}

export default List;
