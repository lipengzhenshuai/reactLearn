import React, { Suspense }from 'react';

const FuncCom = React.lazy(() => import('../core/2funcComponent'));

export default class codeSplit extends React.Component {

    constructor(props) {
        super(props);
        import('../../utils/util').then(util => console.log(util.add(1,2)))
    }
    
    render() {
        return ( <div>
            {/* 必须增加Suspense标签，必须设置fallback */}
             <Suspense fallback={null}>
                <FuncCom></FuncCom>
             </Suspense>
        </div>)
    }
}