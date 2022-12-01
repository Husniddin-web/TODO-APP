import React from "react";
import "./style.scss";
import InputBtn from "../UI/InputBtn";
import OptionSelect from "../UI/OptionSelect";
import ButtonAdd from "../UI/ButtonsAdd/ButtonAdd";
const index = (props) => {
  return (
    <>
      <div {...props}>
        <div className=" md w-50 mx-auto my-60 bg-slate-400 p-5 rounded ">
          <form>
            <InputBtn
              className="form-control my-4 p-2"
              placeholder="Enter update task"
            />
            <InputBtn className="form-control" type="date" />
            <OptionSelect className="d-block w-100 p-2 my-3" />
            <ButtonAdd className="btn bg-success w-100 ">Update</ButtonAdd>
          </form>
        </div>
      </div>
    </>
  );
};

export default index;
