import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./index.css";
function Progress() {
  const [activeProgress, setActiveProgress] = useState(0);
  const onSetActiveProgress = () => {
    setActiveProgress(activeProgress ? 0 : 1);
  };
  return (
    <div className="progress-container">
      <div className="progress-header">剧情进度</div>
      <div className="progress-header-bg"></div>
      <div className="progress-img" onClick={() => onSetActiveProgress()}></div>
      <div
        className="progress-content"
        style={{ display: activeProgress === 0 ? "inherit" : "none" }}
      >
        <div className="progress-title">
          <div className="progress-point"></div>烈士公园正门
          <div className="progress-lock">进度33%</div>
        </div>
        <div className="progress-text">
          长沙烈士公园是长沙市最大的公园，分纪念区、游览区和娱乐区三大部分。纪念区以1958年建成的烈士塔为中心，竖碑铭：“近百年来特别近三十年来为中国人民解放事业而光荣牺牲的湖南人民英雄烈士们永垂不朽。“
        </div>
        <div className="progress-text">
          相传，当年日军来犯，抗日将领英勇抗敌，留下了不少光辉事迹。据说，在烈士公园里藏有一本先烈遗留下的日记本，为我们讲述了那段艰苦的时光...
        </div>
        <div className="progress-title">
          <div className="progress-point progress-grey-point"></div>一级广场
          <div className="progress-lock">待解锁</div>
        </div>
      </div>
      <div
        className="progress-content"
        style={{ display: activeProgress === 1 ? "inherit" : "none" }}
      >
        <div className="progress-title">
          <div className="progress-point"></div>烈士公园正门
        </div>
        <div className="progress-text">
          长沙烈士公园是长沙市最大的公园，分纪念区、游览区和娱乐区三大部分。纪念区以1958年建成的烈士塔为中心，竖碑铭：“近百年来特别近三十年来为中国人民解放事业而光荣牺牲的湖南人民英雄烈士们永垂不朽。“
        </div>
        <div className="progress-text">
          相传，当年日军来犯，抗日将领英勇抗敌，留下了不少光辉事迹。据说，在烈士公园里藏有一本先烈遗留下的日记本，为我们讲述了那段艰苦的时光...
        </div>
        <div className="progress-title">
          <div className="progress-point"></div>一级广场
        </div>
        <div className="progress-text"> </div>
        <div className="progress-title">
          <div className="progress-point"></div>纪念塔
          <div className="progress-lock">进度100%</div>
        </div>
        <div className="progress-text">
          湖南烈士纪念塔1958年建于今东风路湖南烈士公园内，高58．7米，由2932块白玉石和花岗石砌成，雕栏刻柱，翠绿琉璃瓦塔顶，威武雄伟。整个建筑由纪念碑和奠堂两大部分组成。
        </div>
        <div className="progress-text">
          恭喜你找到了这里，请快去寻找最后几张缺损的笔记本来揭开那段抗战岁月的神秘面纱。
        </div>
        <div className="progress-text"> </div>
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
      <div className="progress-footer-bg"></div>
    </div>
  );
}

export default Progress;
