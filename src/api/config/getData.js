/**
 *
 * TODO:
 *  1.将element-ui替换成antd
 *
 */

import axios from "axios";
// import {Message} from 'element-ui';
import router from '../../router';
// import {requestConf} from './requestConf';
// axios 配置
axios.defaults.timeout = 6969;
if (process.env.NODE_ENV === 'development') {// 根据不同的环境使用不同的接口
    axios.defaults.baseURL = '/AssetWeb';
} else {
    axios.defaults.baseURL = '/AssetWeb';
}
axios.defaults.headers['Content-Type'] = 'application/json; charset=utf-8';

axios.interceptors.request.use(function (config) {
    if (config.url.endsWith('/ucenter/service/validate/ticket')) {
        config.baseURL = '';
        config.headers['Content-Type'] = 'text/plain;charset=UTF-8';
    }
    return config;
    // return requestConf(config);
}, err => {
    alert({message: '请求超时!', duration: 5 * 1000});
    return Promise.reject(err);
});

axios.interceptors.response.use(function (response) {
    if (response.data.resultCode === '9000') {
        //业务异常
        alert({message: response.data.resultMsg, duration: 5 * 1000});
    } else if (response.data.resultCode === '9999') {
        //系统异常
        alert({message: response.data.resultMsg, duration: 5 * 1000});
    }
    return response;
}, err => {
    if (!err.response) {
        return Promise.reject(err);
    }
    if (err.response.status === 504) {
        alert({message: '服务器未响应', duration: 5 * 1000});
    } else if (err.response.status === 401) {
        router.push({
            path: '/login'
        });
    } else if (err.response.status === 403) {
        alert({message: '您没有权限访问', duration: 5 * 1000});
    } else if (err.response.status === 404) {
        alert({message: '页面找不到', duration: 5 * 1000});
    } else {
        alert({message: '未知错误!', duration: 5 * 1000});
    }
    return Promise.reject(err);
});

export const get = (url, data = {}) => {
    return axios.get(url, {params: data});
}


export const post = (url, data = {}) => {
    return axios.post(url, data);
}
