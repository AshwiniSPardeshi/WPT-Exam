import { useState } from "react";

export default function App() {
  let stud_name = "Ashwini_Pardeshi";
  let stud_id = 210940320029;
  return (
    <div className="container-fluid ">
      <div className="bg-dark text-light p-2" style={{ height: "60px" }}>
        <h2>
          MyChatApp{" "}
          <sub>
            by {stud_name} {stud_id}{" "}
          </sub>
        </h2>
      </div>
      <div className="mt-2">
        <MsgComp />
      </div>
    </div>
  );
}

function MsgComp() {
  const [validation, setValid] = useState(false);
  const [msg, setMsg] = useState("");
  const [list, setList] = useState([]);

  const msgVal = (e) => {
    setMsg(e.target.value);
  };

  const click = () => {
    if (msg == "") {
      setValid(true);
      alert("Could not be empty");
      return;
    }
    setList([...list, msg]);
    setMsg("");
    setValid(false);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          className="border border-3 mb-1 w-50"
          style={{ height: "50px " }}
          value={msg}
          placeholder="Lets chat here..."
          onChange={msgVal}
        />
        <input
          className="bt bt-secondary w-25 ms-2"
          style={{ height: "50px " }}
          type="button"
          value="SEND"
          onClick={click}
        />
      </div>

      {list.map((item, index) => (
        <div key={index}>
          <div className="alert border-secondary " style={{ height: "60px" }}>
            {item}
          </div>
        </div>
      ))}
    </div>
  );
}
