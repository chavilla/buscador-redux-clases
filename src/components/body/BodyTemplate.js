import React from "react";

const BodyTemplate = ({ title, users, loading, addUser }) => {

  return (
    <>
      <h1 className="text-center">{title}</h1>
      {loading ? (
        <p>Cargando</p>
      ) : (
        <ul>
          {users.map((u) => (
			  <li onClick={ addUser } key={ u.id }> { u.first_name } </li>
          ))}
        </ul>
      )}

    </>
  );
};

export default BodyTemplate;
