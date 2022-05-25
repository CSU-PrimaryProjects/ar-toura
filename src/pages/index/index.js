import { Link } from "react-router-dom";
import "./index.css";

function Index() {
  return (
    <div className="index-container">
      <div className="header">
        <div className="location">
          <css-icon class="icon-location"></css-icon>长沙市
        </div>
        <div className="tips">
          <css-icon class="icon-message"></css-icon>
        </div>
      </div>
      <div className="content">
        <div className="search-container">
          <div className="search-input-div">
            <input className="search-input" />
          </div>
          <div className="search-icon">
            <css-icon class="icon-search"></css-icon>
          </div>
        </div>
        <div className="type-container">
          {["悬疑", "情感", "古风", "阵营"].map((item, index) => (
            <div className="type-div">
              <div className={`type-icon color${index}`}></div>
              <div className="type-text">{item}</div>
            </div>
          ))}
          <div className="type-div">
            <div className="type-all-icon">
              {[3, 2, 1, 0].map((item) => (
                <div className={`type-icon-item color${item}`}></div>
              ))}
            </div>
            <div className="type-text">全部题材</div>
          </div>
        </div>
        <div className="scene-container">
          {[
            "烈士公园",
            "岳麓山",
            "橘子洲",
            "湖南大学",
            "第一师范",
            "马王堆",
          ].map((item, index) => (
            <div className="scene-div">
              <div
                className={`scene-image color${index >= 4 ? index % 4 : index}`}
              ></div>
              <div className="scene-text">
                <div className="title">
                  <div className="title-goup">
                    <div className="title-item bold">{item}</div>
                    <div className="title-item orange">
                      {4 + 0.1 * (index % 4)}分
                    </div>
                  </div>
                  <div className="title-item grey">
                    距离{100 + 100 * (index % 2) + (index % 4) * 10}m
                  </div>
                </div>
                <div className="label">
                  <div className="label-item">剧本数量{2 + (index % 2)}</div>
                  <div className="label-group">
                    <div className="label-item span">悬疑</div>
                    <div className="label-item span">推理</div>
                  </div>
                </div>
                <div className="label">
                  <div className="label-item red bold">
                    门票¥{10 + (index % 2) * 10}起
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
        <div className={`footer-logo`}></div>
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

export default Index;
