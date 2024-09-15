import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams,
// } from "react-router-dom";

/**
 * Router   https://reacttraining.com/react-router/web/api/Router
 *  router组件的公共低级接口,通常我们使用它的高级子类型，例如：
 *    <BrowserRouter>
 *    <HashRouter>
 *    <MemoryRouter>
 *    <MemoryRouter>
 *    <NativeRouter>
 *    <StaticRouter>
 *  大概率不需要使用高级接口，除非要深度集成
 *
 *  Link   https://reacttraining.com/react-router/web/api/Link
 *    为你的应用程序提供一个声明式的，可以访问的导航，在你的应用之用
 *
 *  Route   https://reacttraining.com/react-router/web/api/Route
 *    当路径匹配当前url的时候会渲染该组件
 *
 *  Switch   https://reacttraining.com/react-router/web/api/Switch
 *    switch可以保证只渲染子节点中匹配到的第一个Route或者Redirect
 *
 *  使用/:id
 *
 *
 */

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>

//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/topics">
//             <Topics />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Topics() {
//   let match = useRouteMatch();

//   return (
//     <div>
//       <h2>Topics</h2>

//       <ul>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>
//             Props v. State
//           </Link>
//         </li>
//       </ul>

//       {/* The Topics page has its own <Switch> with more routes
//           that build on the /topics URL path. You can think of the
//           2nd <Route> here as an "index" page for all topics, or
//           the page that is shown when no topic is selected */}
//       <Switch>
//         <Route path={`${match.path}/:topicId`}>
//           <Topic />
//         </Route>
//         <Route path={match.path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topic() {
//   let { topicId } = useParams();
//   return <h3>Requested topic ID: {topicId}</h3>;
// }

export default function App() {
  return (
    <div>1111</div>
  );
}
