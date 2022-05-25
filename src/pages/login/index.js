import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
function Login() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeInput, setActiveInput] = useState(1);
  return (
    <div className="login-container">
      <div className="image-container">
        {/* <img src={Bg} alt="背景图" className="bg-image"/> */}
        ARToura
      </div>
      <div className="tab-container">
        <div
          className={`tab ${activeTab === 0 ? "tab-active" : ""}`}
          onClick={() => setActiveTab(0)}
        >
          登录
        </div>
        <div
          className={`tab ${activeTab === 1 ? "tab-active" : ""}`}
          onClick={() => setActiveTab(1)}
        >
          注册
        </div>
      </div>
      <div
        className="tab-content"
        style={{ display: activeTab === 0 ? "inline" : "none" }}
      >
        <div className="form">
          <input
            placeholder="账号"
            type={"text"}
            className={`input ${activeInput === 1 ? "input-active" : ""}`}
            onFocus={() => setActiveInput(1)}
          />
          <input
            placeholder="密码"
            type={"password"}
            className={`input ${activeInput === 2 ? "input-active" : ""}`}
            onFocus={() => setActiveInput(2)}
          />
        </div>
        <div className="buttons-container">
          <div className="button default-button">
            <Link className="link" to="/index">
              登录
            </Link>
          </div>
          <div className="button active-button">
            <Link className="link" to="/index">
              手机号登录
            </Link>
          </div>
        </div>
      </div>
      <div
        className="tab-content"
        style={{ display: activeTab === 1 ? "inline" : "none" }}
      >
        <div className="form">
          <input
            placeholder="账号"
            type={"text"}
            className={`input ${activeInput === 1 ? "input-active" : ""}`}
            onFocus={() => setActiveInput(1)}
          />
          <input
            placeholder="密码"
            type={"password"}
            className={`input ${activeInput === 2 ? "input-active" : ""}`}
            onFocus={() => setActiveInput(2)}
          />
          <input
            placeholder="确认密码"
            type={"password"}
            className={`input ${activeInput === 3 ? "input-active" : ""}`}
            onFocus={() => setActiveInput(3)}
          />
        </div>
        <div className="buttons-container">
          <div className="button active-button">
            <Link className="link" to="/index">
              注册并登录
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
