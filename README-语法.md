# 语法问题

## 在拼音项目中

```jsx
{data.map((item, index) => 
  <RenderComponent
    data={item}
    index={index}
    options={options}
    isPreview={isPreview}
  />
)}
```

是可以的
但是

```jsx
{data.map((item, index) => 
  RenderComponent(item, index, options, isPreview)
)}
```

是不允许的
一个是组件，一个是函数，具体原因未知；
