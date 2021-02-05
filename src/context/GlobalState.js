import React, { createContext, useCallback, useReducer } from 'react';
import Swal from 'sweetalert2';
import AppReducer from './AppReducer';

const initialState = {
  employees: [
    {
      id: 1,
      name: 'Everton Sales',
      location: 'Brazil',
      designation: 'Frontend Dev',
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const removeEmployee = useCallback(id => {
    Swal.fire({
      title: 'Tem certeza que deseja deletar?',
      text: 'Uma vez deletado, não é possível recuperar!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, pode deletar!',
    }).then(result => {
      if (result.isConfirmed) {
        dispatch({
          type: 'REMOVE_EMPLOYEE',
          payload: id,
        });
        Swal.fire('Deletado!', 'Arquivo deletado com sucesso.', 'success');
      }
    });
  }, []);

  const addEmployee = useCallback(async employees => {
    dispatch({
      type: 'ADD_EMPLOYEES',
      payload: employees,
    });

    await Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Salvo',
      showConfirmButton: false,
      timer: 2000,
    });
  }, []);

  const editEmployee = useCallback(async employees => {
    dispatch({
      type: 'EDIT_EMPLOYEE',
      payload: employees,
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        employees: state.employees,
        removeEmployee,
        addEmployee,
        editEmployee,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
