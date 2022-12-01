import "./style.scss";
import ButtonAdd from "../UI/ButtonsAdd/ButtonAdd";
import InputBtn from "../UI/InputBtn";
import OptionSelect from "../UI/OptionSelect";
import TableHead from "../TableHead";
import TableBody from "../TableBody";
import { useState, useRef } from "react";
import Time from "../Time";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../Modal";

function TodoHead() {
  const [data, setData] = useState([]);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [imprt, setImport] = useState("");
  const [update, setUpdate] = useState("");

  const editBtn = (id) => {
    data.filter((e) => {
      if (e.id == id) {
      }
    });
  };

  const deleteF = (dt) => {
    let filtered = data.filter((e) => {
      e.id !== dt.id;
    });
    setTask([filtered]);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (task.length > 0 && date.length > 0 && imprt.length > 0) {
      toast.success("Muaffaqiyatli qo'shildi", {
        positione: "top-right",
        autoClose: 1400,
      });
      const tasks = {
        id: Math.round(Math.random() * 10),
        title: task,
        deadline: date,
        important: imprt,
        data: data,
      };
      setTask("");
      setDate("");
      setImport("");
      setData([...data, tasks]);
    } else {
      toast.error("Iltimos maydonlarni to'ldiring", {
        position: "top-right",
        autoClose: 1000,
        theme: "light",
      });
    }
  };
  const handleDelete = (id) => {
    toast.info("Muaffaqiyatli qo'shildi", {
      positione: "top-right",
      autoClose: 1400,
    });
    let filtered = data.filter((dt) => dt.id !== id);
    setData(filtered);
  };

  return (
    <>
      <ToastContainer />
      <Modal className="modal-wrapper modal  top-0   bg position-fixed w-100 h-full z-50 backdrop-opacity-10" />
      <section className="container">
        <div className="card shadow p-3 mx-auto mt-4 w-75">
          <h1 className="text-center head text-red-500 mb-3">
            Hi My name is Husniddin
          </h1>
          <Time />
          <hr />
          <form>
            <InputBtn
              type="text"
              placeholder="Enter task name"
              className="form-control mt-4   w-75 mx-auto  p-3"
              required
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <InputBtn
              type="date"
              required
              value={date}
              className="form-control   w-75 mx-auto  p-2   mt-3"
              onChange={(e) => setDate(e.target.value)}
            />
            <OptionSelect
              className="w-75 mt-3 p-2 d-block mx-auto"
              value={imprt}
              onChange={(e) => {
                setImport(e.target.value);
              }}
            />
          </form>
          <ButtonAdd
            className="btn btn-success w-75 mx-auto mt-2 d-block p-2"
            onClick={addTask}
          >
            Add Task
          </ButtonAdd>
        </div>

        <table className="table table-stripped  table-hover table-bordered w-75 mx-auto mt-5">
          <TableHead />
          {data.length > 0 ? (
            data.map((item, i) => (
              <TableBody
                {...item}
                handleDelete={handleDelete}
                handleEdit={editBtn}
                key={i}
              />
            ))
          ) : (
            <tbody>
              <tr>
                <td colSpan={7} className="text-center">
                  <h3 className="text-danger">NOT FOUND</h3>
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </section>
    </>
  );
}

export default TodoHead;
