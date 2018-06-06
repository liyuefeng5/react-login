import axios from 'axios'
// axios 配置
axios.defaults.timeout = 10000;
axios.defaults.baseURL = 'http://192.168.100.202:8039/wx';
// 拦截器
axios.interceptors.request.use(
  config => {
	  console.log(config)
    if (window.localStorage.getItem('token')) {
          config.headers = {
              'X-Token':window.localStorage.getItem('token'),
              'Content-Type':"application/json;charset=UTF-8"
          }
      }
    return config;
  },
  err => {
	  console.log(err)
 
    return Promise.reject(err);
  });
// code状态码200判断
axios.interceptors.response.use((res) => {
  console.log(res)
  var code = res.data.code || res.data.CODE;
  if(code === 401){
      window.swal({
          title: "确认",
          text: '会话过期，请重新登录',
          type: "info",
          showCancelButton: false,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "确认",
          cancelButtonText: "取消",
          closeOnConfirm: false,
          closeOnCancel: true
      });
    return Promise.reject(res);
  }
  return res;
}, (error) => {
  console.log(error)
  return Promise.reject(error);
});
export default axios;
