import React from "react";
import Draggable from 'react-draggable';
import './_router.less';

// 引入core文件夹下所有文件
import HelloWorld from "../core/1helloworld";
import FuncComponent from "../core/2funcComponent";
import ClassComponent from "../core/3classComponent";
import FuncComponentTQ from "../core/4funcComponentTQ";
import Clock from "../core/5Clock";
import Event from "../core/6Event";
import Condition from "../core/7Condition";
import Cycle from "../core/8cycle";
import Form from "../core/9form";
import StateUp from "../core/10StateUp";
import LifeCycle from "../core/11LifeCycle";

// 引入senior文件夹下所有文件
import CodeSplit from "../senior/1codeSplit";
import Context from "../senior/2Context/Parent";
import ErrorSide from "../senior/3errorSide";
import Refs from "../senior/4refs";
import Fragments from "../senior/5fragments";
import HOC from "../senior/6HOC";

// 引入router文件夹下所有文件
import Basic from "../router/1basic";

// 引入redux文件夹下所有文件
import Redux1 from "../redux/1";
import Redux1Simple from "../redux/1_simple/basic";
import Redux2Use from "../redux/2_use-xx/basic";
import Redux3Middle from "../redux/3_middle-ware/1";
import Redux4Saga from "../redux/4_saga/basic";
import Redux5Dva from "../redux/5_dva/basic";

// 引入pinyin文件夹下所有文件
import Pinyin from "../pinyin/src/index";
import Hooks1 from "../hooks/1";
import RefHooks from "../hooks/refHooks";
import CustomHooks from "../hooks/customHooks/index";

// 引入business-compo文件夹下所有文件
// import Business1 from "../business-compo/1";
// import Business2 from "../business-compo/2";
// import Business3 from "../business-compo/3";
// import Business4 from "../business-compo/4";

// 引入css文件夹下所有文件
import Center from "../css/center/center";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

const routes = [
    { path: "/core/1helloworld", component: HelloWorld },
    { path: "/core/2funcComponent", component: FuncComponent },
    { path: "/core/3classComponent", component: ClassComponent },
    { path: "/core/4funcComponentTQ", component: FuncComponentTQ },
    { path: "/core/5Clock", component: Clock },
    { path: "/core/6Event", component: Event },
    { path: "/core/7Condition", component: Condition },
    { path: "/core/8cycle", component: Cycle },
    { path: "/core/9form", component: Form },
    { path: "/core/10StateUp", component: StateUp },
    { path: "/core/11LifeCycle", component: LifeCycle },
    { path: "/senior/1codeSplit", component: CodeSplit },
    { path: "/senior/2Context", component: Context },
    { path: "/senior/3errorSide", component: ErrorSide },
    { path: "/senior/4refs", component: Refs },
    { path: "/senior/5fragments", component: Fragments },
    { path: "/senior/6HOC", component: HOC },
    { path: "/router/1basic", component: Basic },
    { path: "/redux/1", component: Redux1 },
    { path: "/redux/1_simple/basic", component: Redux1Simple },
    { path: "/redux/2_use-xx/basic", component: Redux2Use },
    { path: "/redux/3_middle-ware/1", component: Redux3Middle },
    { path: "/redux/4_saga/basic", component: Redux4Saga },
    { path: "/redux/5_dva/basic", component: Redux5Dva },
    { path: "/pinyin/src/index", component: Pinyin },
    { path: "/hooks/1", component: Hooks1 },
    { path: "/hooks/refHooks", component: RefHooks },
    { path: "/hooks/customHooks/index", component: CustomHooks },
    // { path: "/business-compo/1", component: Business1 },
    // { path: "/business-compo/2", component: Business2 },
    // { path: "/business-compo/3", component: Business3 },
    // { path: "/business-compo/4", component: Business4 },
    { path: "/css/center/center", component: Center },
];


export default function App() {
    return (
        <Router>
            <div>
                <Draggable>
                    <div className="list-touchbar">
                        <ul>
                            {routes.map((route, index) => (
                                <li key={index}>
                                    <Link to={route.path}>{route.path}</Link>
                                </li>
                            ))}

                        </ul>
                    </div>
                </Draggable>
                <Switch>
                    {routes.map((route, index) => (
                        <Route key={index} path={route.path}>
                            <route.component />
                        </Route>
                    ))}
                </Switch>
            </div>
        </Router>
    );
}

