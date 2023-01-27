import http from '../utils/http';
import { hosttUrl } from './baseUrl';

/**
 * 获取跳转链接
 */
function getLink(query){
  return  http("get",hosttUrl+'/web/common/target/link/'+query.shortUrl);
}
export {
    getLink
}

