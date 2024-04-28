import React from 'react';

const DataSource = {};

DataSource.getComments = () => {
    return {
        comments: [
            {id:1,value:1},
            {id:2,value:2},
            {id:3,value:3},
            {id:4,value:4}
        ]
    }
};

DataSource.removeChangeListener = () => {

}

DataSource.addChangeListener = () => {
    
}

// 此函数接收一个组件...
function withSubscription(WrappedComponent, selectData) {
    // ...并返回另一个组件...
    return class extends React.Component {
        constructor(props) {
            debugger;
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: selectData(DataSource, props)
            };
        }

        componentDidMount() {
            // ...负责订阅相关的操作...
            DataSource.addChangeListener(this.handleChange);
        }

        componentWillUnmount() {
            DataSource.removeChangeListener(this.handleChange);
        }

        handleChange() {
            this.setState({
                data: selectData(DataSource, this.props)
            });
        }

        render() {
            // ... 并使用新数据渲染被包装的组件!
            // 请注意，我们可能还会传递其他属性
            return <WrappedComponent {...this.state.data} {...this.props} />;
        }
    };
}

const CommentList = (props) => {

    return (
        <div>
            {props.comments.map((comment) => (
                <div key={comment.id}>{`comment.value:${comment.value},comment.id:${comment.id}`}</div>
            ))}
        </div>
    );
}

export default withSubscription(
    CommentList,
    (DataSource) => DataSource.getComments()
);