import React from 'react';
import ReactDOM from 'react-dom';
import HillChaser from "./components/HillChaser"
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';


ReactDOM.render(
    <Router>
        <HillChaser />
    </Router>, document.getElementById('root'));