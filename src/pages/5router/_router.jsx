import React, { useEffect, useState } from "react";
import Draggable from 'react-draggable';
import { ShowType } from "./constant";
import './_router.less';

// 引入core文件夹下所有文件
import HelloWorld from "../1core/1helloworld";
import FuncComponent from "../1core/2funcComponent";
import ClassComponent from "../1core/3classComponent";
import FuncComponentTQ from "../1core/4funcComponentTQ";
import Clock from "../1core/5Clock";
import Event from "../1core/6Event";
import Condition from "../1core/7Condition";
import Cycle from "../1core/8cycle";
import Form from "../1core/9form";
import StateUp from "../1core/10StateUp";
import LifeCycle from "../1core/11LifeCycle";

// 引入senior文件夹下所有文件
import CodeSplit from "../2middle/1codeSplit";
import Context from "../2middle/2Context/Parent";
import ErrorSide from "../2middle/3errorSide";
import Refs from "../2middle/4refs";
import Fragments from "../2middle/5fragments";
import HOC from "../2middle/6HOC";
import Reducer from "../2middle/7UseReducer/index.jsx";
import useContextTest from "../2middle/8useContext";
import ReducerContext from "../2middle/10ReducerContext";

import Ref from "../3senior/useRef";

// 引入router文件夹下所有文件
import Basic from "./1basic";

// 引入redux文件夹下所有文件
import Redux1 from "../6redux/0redux";
import Redux1Simple from "../6redux/1_simple";
import Redux2Use from "../6redux/2_use-xx";
import Redux3Middle from "../6redux/3_middle-ware/1";
import Redux4Saga from "../6redux/4_saga";
// import Redux5Dva from "../6redux/5_dva";

// 面试的一些问题
import InterviewBiBao from '../8interview/useEffect闭包问题.jsx'

import PinYin from "../pinyin/index.jsx";
import generatePdf from "../11demo/generatePdf/index.jsx";

// 引入pinyin文件夹下所有文件
import Hooks1 from "../hooks/1";
import RefHooks from "../hooks/customHooks/useRef/useRef";
import CustomHooks from "../hooks/customHooks/index";

import EditContent from "../11demo/EditContent/index";
import IframeFu from "../11demo/iframe/Fu.jsx";
import IframeZi from "../11demo/iframe/Zi.jsx";
import Sort from "../11demo/sort/index.jsx";


// 引入business-compo文件夹下所有文件
// import Business1 from "../business-compo/1";
// import Business2 from "../business-compo/2";
// import Business3 from "../business-compo/3";
// import Business4 from "../business-compo/4";

import Test1 from "../test/1/1.jsx";
import Test2 from "../test/2/1.jsx";

// import Table_Edit from "../antd/table/editTable.tsx";
// import Table_Edit from "../antd/table/editTable3";
import Table_Edit from "../antd/table/滚动加载";
import Message from "../antd/message/index";
import Upload from "../antd/upload/index";

import {
    BrowserRouter as Router,
    Routes,
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
    { path: "/middle/1codeSplit", component: CodeSplit },
    { path: "/middle/2Context", component: Context },
    { path: "/middle/3errorSide", component: ErrorSide },
    { path: "/middle/4refs", component: Refs },
    { path: "/middle/5fragments", component: Fragments },
    { path: "/middle/6HOC", component: HOC },
    { path: "/middle/7Reducer", component: Reducer },
    { path: "/middle/8useContextTest", component: useContextTest },
    { path: "/middle/10ReducerContext", component: ReducerContext },
    { path: "/senior/1Ref", component: Ref },
    { path: "/router/1basic", component: Basic },
    { path: "/redux/1", component: Redux1 },
    { path: "/redux/1_simple/basic", component: Redux1Simple },
    { path: "/redux/2_use-xx/basic", component: Redux2Use },
    { path: "/redux/3_middle-ware/1", component: Redux3Middle },
    { path: "/redux/4_saga/basic", component: Redux4Saga },
    { path: "/interviewer/bibao", component: InterviewBiBao },
    { path: "/hooks/1", component: Hooks1 },
    { path: "/hooks/refHooks", component: RefHooks },
    { path: "/hooks/customHooks/index", component: CustomHooks },
    // { path: "/business-compo/1", component: Business1 },
    // { path: "/business-compo/2", component: Business2 },
    // { path: "/business-compo/3", component: Business3 },
    // { path: "/business-compo/4", component: Business4 },
    { path: "/antd/editTable", component: Table_Edit },
    { path: "/antd/message", component: Message },
    { path: "/antd/upload", component: Upload },
    { path: "/test/1", component: Test1 },
    { path: "/test/2", component: Test2 },
    { path: "/demo/11/editContent", component: EditContent },
    { path: "/demo/11/iframeFu", component: IframeFu },
    { path: "/demo/11/iframeZi", component: IframeZi },
    { path: "/demo/11/Sort", component: Sort },
    { path: "/pinyin", component: PinYin },
    { path: "/generatePdf", component: generatePdf }
];


export default function App() {

    const [showDrag, setShowDrag] = useState(ShowType.false);

    const updateDragShow = (value) => {
        setShowDrag(value)
        window.localStorage.setItem("showDrag", value);
    }

    useEffect(() => {
        window.show = () => {
            updateDragShow(ShowType.true);
        }
        setShowDrag(Number(window.localStorage.getItem("showDrag")));
        console.log('print show() to open Drag Menu');
        return () => {
            window.show = undefined;
        }
    }, [])

    return (
        <Router>
            <div>
                {showDrag ?
                    (
                        <Draggable>
                            <div className="list-touchbar">
                                <div className="list-touchbar-close-icon" onClick={() => updateDragShow(ShowType.false)}>x</div>
                                <ul>
                                    {routes.map((route, index) => (
                                        <li key={index}>
                                            <Link to={route.path}>{route.path}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Draggable>
                    )
                    :
                    ""
                }
                <Routes>
                    {routes.map((route, index) => {
                        const Component = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={<Component />}
                            />
                        )
                    })}
                </Routes>
            </div>
        </Router>
    );
}

