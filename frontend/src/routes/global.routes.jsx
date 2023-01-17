import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "components/pages/home.components.jsx";

function BaseRoute()
{
    return(
        <Router>
            <Route path="/" exact component={Index} />
            <Route path="/home" exact component={Index} />
        </Router>
    );
}

export default BaseRoute;
