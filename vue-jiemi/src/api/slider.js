import jsonp from '../common/js/jsonp';
import {commonParams, options} from './config';
// jsonp 获取 QQ音乐推荐 api
export function getSlider() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';

  const data = Object.assign({}, commonParams, {
  });
  return jsonp(url, data, options);
}
// 获取 QQ音乐 新歌巅峰榜
export function getList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg';
  const data = Object.assign({}, commonParams, {
   uin: 0,
   notice: 0,
   platform: 'h5',
    needNewCode: 1,
    tpl: 3,
    page: 'detail',
    type: 'top',
    topid: 27,
    _: 1519963122923
  });
  return jsonp(url, data, options);
}
// 获取豆瓣 最近热映接口
export function getHot() {
  const url = 'https://api.douban.com/v2/movie/in_theaters';
  return jsonp(url, {start: 0, count: 100});
}
// 获取豆瓣 即将上映
export function getComing() {
  const url = 'https://api.douban.com/v2/movie/coming_soon';
  return jsonp(url, {start: 0, count: 100});
}
// 获取豆瓣 评分榜250top
export function getTop() {
  const url = 'https://api.douban.com/v2/movie/top250';
  return jsonp(url, {start: 0, count: 100});
}
