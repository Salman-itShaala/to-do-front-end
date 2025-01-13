import React, { useEffect, useState } from "react";
import "./Home.css";
import UserInfo from "../../Components/UserInfo/UserInfo";
import { AiFillHome } from "react-icons/ai";
import { FaListCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { LuNotepadText } from "react-icons/lu";
import { FaSignOutAlt } from "react-icons/fa";
import TaskWindow from "../../Components/TaskWindow/TaskWindow";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

function Home() {
  const [tab, setTab] = useState("All Tasks");

  return (
    <>
      <div className="mainContainer">
        <div className="header">
          <div className="userInfo">
            <UserInfo />
          </div>
          <div className="tabs">
            <button
              onClick={() => {
                setTab("All Tasks");
              }}
            >
              {" "}
              <AiFillHome /> All Tasks
            </button>
            <button
              onClick={() => {
                setTab("Important");
              }}
            >
              <FaListCheck />
              Important
            </button>
            <button
              onClick={() => {
                setTab("Completed");
              }}
            >
              <FaCheck />
              Completed
            </button>
            <button onClick={() => toast("Feature is not available yet")}>
              <LuNotepadText />
              Do it Now
            </button>
          </div>
          <div className="userLogout">
            <button>
              {" "}
              <FaSignOutAlt />
              Sign Out
            </button>
          </div>
        </div>
        <div className="taskWindow">
          {/* Add other tabs */}
          {tab === "All Tasks" && <AllTasks />}
          {/* {tab === "Importatnt" && <AllTasks />} */}
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

function AllTasks() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  async function getTodos() {
    try {
      const res = await fetch(
        "https://todo-backend-two-bice.vercel.app/todos",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            contentType: "application/json",
          },
        }
      );

      if (res.status === 200) {
        const resObj = await res.json();
        setTodos(resObj);
      } else if (res.status === 401) {
        alert("You are not login, Please login first");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <h1>All Tasks</h1>
      <div>
        {todos.length === 0 ? (
          <p>Currently no todos</p>
        ) : (
          todos.map((todo) => {
            return <p>{todo.title}</p>;
          })
        )}
      </div>
    </>
  );
}

export default Home;
