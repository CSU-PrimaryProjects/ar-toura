import { Link } from "react-router-dom";
import "./index.css";
function Clue() {
  return (
    <div className="clue-container">
      <div className="clue-header">线索查看</div>
      <div className="clue-header-bg"></div>
      <div className="clue-img"></div>
      <div className="clue-content">
        <div className="clue-title">线索02</div>
        <div className="clue-text">应该是最后几张笔记，快去看看吧~~~</div>
        <div className="clue-tip">你已搜集所有线索，一起揭开那段神秘往事吧</div>
      </div>
      <div className="footer">
        <Link to="/index">
          <div className={`footer-logo`}></div>
        </Link>
        {[
          { key: "eye", value: "社交圈" },
          { key: "share", value: "成就积分" },
          { key: "person", value: "我的" },
        ].map((item, index) => (
          <div className="footer-item">
            <div className={`footer-${item.key}`}>
              <css-icon class={`icon-${item.key}`}></css-icon>
            </div>
            <div>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clue;
