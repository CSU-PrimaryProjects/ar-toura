import { Link } from "react-router-dom";
import "./index.css";
function Map() {
  return (
    <div className="map-container">
      <div className="map-header">剧情地图</div>
      <Link to="/clue">
        <div className="map-tip map-first">1</div>
      </Link>
      <Link to="/clue">
        <div className="map-tip map-second">1</div>
      </Link>
      <Link to="/progress">
        <div className="map-to-progress">
          查看剧情进度
          <css-icon class="icon-forward"></css-icon>
        </div>
      </Link>
    </div>
  );
}

export default Map;
