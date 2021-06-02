import React from "react";
import SpinnerComponent from "../../ui/spinner/SpinnerComponent";
import "./LifecycleStyles.css";

const LifecycleTemplate = ({ title, users, users_stored, addUser }) => {
  return (
    <div className="wrapper__lifecycle">
      <div className="wrapper__lifecycle_header">
        <h1 className="text-center">{title}</h1>
      </div>
      <div className="main__content">
        <div className="users__list_area">
          <h3 className="text-center">Lista de Usuarios</h3>

          {users.length === 0 ? (
            <SpinnerComponent />
          ) : (
            <ul className="users__list">
              {users.map((u) => (
                <div key={u.id} className="users__list_item">
                  <li>
                    {u.first_name} {u.last_name}
                  </li>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => addUser(u)}
                  >
                    Agregar
                  </button>
                </div>
              ))}
            </ul>
          )}
        </div>
        <div className="users__selected">
          <h3 className="text-center">Usuarios Seleccionados</h3>
          {users_stored.length === 0 ? (
            <p className="no__users text-center mt-5">
              No has seleccionado ningún Usuario
            </p>
          ) : (
            <div className="users__list_item">
              {users_stored.map((us) => (
                <div key={us.id} className="users__list_item">
                  <li>
                    {us.first_name} {us.last_name}
                  </li>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LifecycleTemplate;
