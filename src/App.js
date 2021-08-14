import { Route, Link, Switch } from "react-router-dom";
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
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        {/* 위 부터 switch 문으로 경로 찾아 들어감, 
            아래 경로표시없이 작성 시 예외 처리*/}
        <Route
          render={({ location }) => (
            <div>
              <h2> This page dose not exist </h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

// export default App;
