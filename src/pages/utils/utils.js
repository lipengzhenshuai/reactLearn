function transformRoutes(routes) {
    const transformedRoutes = {};
  
    routes.forEach((route) => {
      const pathParts = route.path.split('/').filter(Boolean); // 去除空字符串
      if (pathParts.length >= 2) {
        const [first, second, ...rest] = pathParts;
        if (!transformedRoutes[first]) {
          transformedRoutes[first] = {};
        }
        transformedRoutes[first][second] = rest.length > 0 ? rest.join('/') : route.component;
      }
    });
  
    return transformedRoutes;
  }
  
  const routes = [
    { path: "/core/1helloworld", component: "HelloWorld" },
    { path: "/core/2funcComponent", component: "FuncComponent" },
    { path: "/core/3classComponent", component: "ClassComponent" },
    { path: "/core/4funcComponentTQ", component: "FuncComponentTQ" },
    { path: "/core/5Clock", component: "Clock" },
    { path: "/core/6Event", component: "Event" },
    { path: "/core/7Condition", component: "Condition" },
    { path: "/core/8cycle", component: "Cycle" },
    { path: "/core/9form", component: "Form" },
    { path: "/core/10StateUp", component: "StateUp" },
    { path: "/core/11LifeCycle", component: "LifeCycle" },
    { path: "/middle/1codeSplit", component: "CodeSplit" },
    { path: "/middle/2Context", component: "Context" },
    { path: "/middle/3errorSide", component: "ErrorSide" },
    { path: "/middle/4refs", component: "Refs" },
    { path: "/middle/5fragments", component: "Fragments" },
    { path: "/middle/6HOC", component: "HOC" },
    { path: "/middle/7Reducer", component: "Reducer" },
    { path: "/middle/8useContextTest", component: "useContextTest" },
    { path: "/middle/10ReducerContext", component: "ReducerContext" },
    { path: "/router/1basic", component: "Basic" },
    { path: "/redux/1", component: "Redux1" },
    { path: "/redux/1_simple/basic", component: "Redux1Simple" },
    { path: "/redux/2_use-xx/basic", component: "Redux2Use" },
    { path: "/redux/3_middle-ware/1", component: "Redux3Middle" },
    { path: "/redux/4_saga/basic", component: "Redux4Saga" },
    { path: "/redux/5_dva/basic", component: "Redux5Dva" },
    { path: "/pinyin/src/index", component: "Pinyin" },
    { path: "/hooks/1", component: "Hooks1" },
    { path: "/hooks/refHooks", component: "RefHooks" },
    { path: "/hooks/customHooks/index", component: "CustomHooks" },
    // { path: "/business-compo/1", component: "Business1" },
    // { path: "/business-compo/2", component: "Business2" },
    // { path: "/business-compo/3", component: "Business3" },
    // { path: "/business-compo/4", component: "Business4" },
  ];
  
  // 使用示例
  const transformedRoutes = transformRoutes(routes);
  console.log(transformedRoutes);
  