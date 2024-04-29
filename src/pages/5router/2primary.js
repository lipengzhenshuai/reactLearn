/**
 * react-router一共有3种组件：
 *  routers, eg: <BrowserRouter> and <HashRouter>
 *  route matchers, eg: <Route> and <Switch>
 *  and navigation, eg: <Link>, <NavLink>, and <Redirect>
 * 
 * Routers
 *   <BrowserRouter> and <HashRouter>
 *    主要区别：
 *      browserRouter虽然看上去更好看，但是需要服务端配合
 *      hashRouter使用hash表示路径，比较方便
 *   这个区别和vue的router区别是一致的。
 *  通常将根组件包裹在Router中使用router
 * 
 * 
 * Router Matchers
 *  <Switch> 和 <Route>
 *   主要区别：
 *      Switch在自己的字Route中查找匹配的第一个Route去渲染，其他的Route都不再渲染
 *      Route是你匹配到了就会去渲染
 *   注意：
 *   <Route path="/"> 总会渲染URL,我们建议把它房子<Switch></Switch>的最后一项，或者
 *      <Route exact path="/">中
 *   支持Router在Switch外面，但是不建议这么使用
 * 
 * Navigator
 *  Link，NavLink，Redirect
 *   区别：
 *    NavLink当前link被匹配中之后可以增加class
 *    Redirect会覆盖当前的history stack,而不是像link产生一个新的跳转
 * 
 */