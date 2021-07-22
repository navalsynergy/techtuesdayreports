import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UploadFile from "./Components/UploadFile";
import Result  from "./Components/Result"

function App() {
  return (
    <Router>
    <>
    <Switch>
    <Route path="/result">
      <Result />
    </Route>
    <Route path="/">
      <UploadFile />
    </Route>
  </Switch>
</>
</Router>
  );
}

export default App;
