import { Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

export default function App() {
  return (
    //  Link 사용시 재로딩하지 않고 앱내에서 리랜더링만
    <div>
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/about"> About </Link>
        </li>
        <li>
          <Link to="/profiles"> Profiles </Link>
        </li>
        <li>
          <Link to="/history"> History </Link>
        </li>
      </ul>
      <hr />

      {/* exact={true} 주소가 명확할경우만 표기 */}
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
      <Route path="/profiles" component={Profiles} />
      <Route path="/history" component={HistorySample} />
    </div>
  );
}

// export default App;
