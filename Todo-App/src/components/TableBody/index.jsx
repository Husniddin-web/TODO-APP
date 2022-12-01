import React from "react";
import { useState } from "react";
import ButtonAdd from "../UI/ButtonsAdd/ButtonAdd";

function index(props) {
  const { id, title, deadline, important, handleDelete, handleEdit } = props;
  let dt = new Date();
  let yr = dt.getFullYear();
  let month = dt.getMonth();
  let day = dt.getDate() < 10 ? "0" + dt.getDate() : dt.getDate();
  let all = `${yr}-${month}-${day}`;
  const [year, setYear] = useState(all);
  return (
    <>
      <tbody className="align-center">
        <tr>
          <td>{id}</td>
          <td>{title}</td>
          <td>{year}</td>
          <td>{deadline}</td>
          <td>{important}</td>
          <td>
            <ButtonAdd
              className="btn btn-warning"
              onClick={() => {
                handleDelete(id);
              }}
            >
              Remove
            </ButtonAdd>
          </td>
          <td>
            <ButtonAdd
              className="btn btn-danger"
              onClick={() => handleEdit(id)}
            >
              Edit
            </ButtonAdd>
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default index;
