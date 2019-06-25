import React from 'react';
import style from './trade.module.scss';

import {Icon, Input, Button, Table} from 'antd';
import {post} from '../../../api/config/getData';

export default class P403 extends React.Component {

    componentDidMount(){
        this.getData(); // 获取展示数据
    }

    async getData() {
        let data = await post('/asset/pages/config/channel/query', {
            channelNo: '',
            channelName: '',
            pageNum: '1',
            pageSize: '10'
        });
        if (data.data.resultCode === '0000') {
            console.log(data);
        }
    }


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        const dataSource = [
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
            },
            {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
            }
        ];

        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
            }
        ];

        return (
            <div>
                <div className={style.top}>
                    <div className={style.title}>
                        筛选条件
                        <Icon type="right" className={style.icon}/>
                    </div>
                    <div className={style.form}>
                        <div className={style['input-area']}>
                            渠道名称：<Input placeholder="请输入渠道名称" style={{width: '200px'}}/>
                        </div>

                        <div className={style['input-area']}>
                            交易类型：<Input placeholder="请输入交易类型" style={{width: '200px'}}/>
                        </div>
                    </div>
                    <div className={style['button-area']}>
                        <Button type="primary">查询</Button>
                        <Button type="primary">重置</Button>
                    </div>
                </div>
                <div className={style['content']}>
                    <div className={style.title}>
                        资产列表
                    </div>
                    <div className={style.table}>
                        <Table
                            dataSource={dataSource}
                            columns={columns}
                            bordered
                        />
                    </div>
                </div>
            </div>
        );
    }
}
