// import {getToken} from '../../utils/auth';
// import store from '../../store';
//
// export const requestConf = function (config) {
//     //设置systemId
//     config.headers['systemId'] = 's000008';
//     //通过cookie获取token并设置token
//     config.headers['ticket'] = getToken();
//
//     config.headers['menuId'] = store.getters.menuId || '';
//     let item = store.getters.btnId;
//     if (item) {
//         config.headers['menuId'] = item || '';
//         store.getters.btnId = '';
//     }
//
//     return config;
// }
