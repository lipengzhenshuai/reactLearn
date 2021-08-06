# 1 基本概念
#### state是数据结合
#### action就是改变state的指令，有多少操作state的动作就会有多少action
#### reducer 是一个纯函数，根据type执行对应的action执行对应的更新，返回新的state
#### store可以理解为加工机器的总工厂

# 2 升级 react-redux
#### react-redux 把store和react组件🔗起来
1.使用Provider将数据传下去（context）
2.使用connect包裹函数（高阶函数）
    connect主要的任务：
        1.将store的数据作为props传给子组件
        2.注册store变化事件，在数据变化了更新数据
