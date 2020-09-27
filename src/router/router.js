import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import { routerMode } from "../config/env.js";

const home = () => import(/* webpackChunkName: "home" */ "src/page/home/home");
const city = () =>
  import(/* webpackChunkName: "city" */ "src/page/city/city.vue");
const msite = () =>
  import(/* webpackChunkName: "msite" */ "src/page/msite/msite.vue");
const search = () =>
  import(/* webpackChunkName: "search" */ "src/page/search/search.vue");
const shop = () =>
  import(/* webpackChunkName: "shop" */ "src/page/shop/shop.vue");
const login = () =>
  import(/* webpackChunkName: "login" */ "src/page/login/login.vue");
const profile = () =>
  import(/* webpackChunkName: "profile" */ "src/page/profile/profile.vue");
const forget = () =>
  import(/* webpackChunkName: "forget" */ "src/page/forget/forget.vue");
const order = () =>
  import(/* webpackChunkName: "order" */ "src/page/order/order.vue");
const orderDetail = () =>
  import(
    /* webpackChunkName: "orderDetail" */ "src/page/order/children/orderDetail.vue"
  );
const vipcard = () =>
  import(/* webpackChunkName: "vipcard" */ "src/page/vipcard/vipcard.vue");
const invoiceRecord = () =>
  import(
    /* webpackChunkName: "invoiceRecord" */ "src/page/vipcard/children/invoiceRecord.vue"
  );
const useCart = () =>
  import(
    /* webpackChunkName: "useCart" */ "src/page/vipcard/children/useCart.vue"
  );
const vipDescription = () =>
  import(
    /* webpackChunkName: "vipDescription" */ "src/page/vipcard/children/vipDescription.vue"
  );
const food = () =>
  import(/* webpackChunkName: "food" */ "src/page/food/food.vue");
const confirmOrder = () =>
  import(
    /* webpackChunkName: "confirmOrder" */ "src/page/confirmOrder/confirmOrder.vue"
  );
const remark = () =>
  import(
    /* webpackChunkName: "remark" */ "src/page/confirmOrder/children/remark.vue"
  );
const payment = () =>
  import(
    /* webpackChunkName: "payment" */ "src/page/confirmOrder/children/payment.vue"
  );
const userValidation = () =>
  import(
    /* webpackChunkName: "userValidation" */ "src/page/confirmOrder/children/userValidation.vue"
  );
const invoice = () =>
  import(
    /* webpackChunkName: "invoice" */ "src/page/confirmOrder/children/invoice.vue"
  );
const chooseAddress = () =>
  import(
    /* webpackChunkName: "chooseAddress" */ "src/page/confirmOrder/children/chooseAddress.vue"
  );
const addAddress = () =>
  import(
    /* webpackChunkName: "addAddress" */ "src/page/confirmOrder/children/children/addAddress.vue"
  );
const searchAddress = () =>
  import(
    /* webpackChunkName: "searchAddress" */ "src/page/confirmOrder/children/children/children/searchAddress.vue"
  );
const foodDetail = () =>
  import(
    /* webpackChunkName: "foodDetail" */ "src/page/shop/children/foodDetail.vue"
  );
const shopDetail = () =>
  import(
    /* webpackChunkName: "shopDetail" */ "src/page/shop/children/shopDetail.vue"
  );
const shopSafe = () =>
  import(
    /* webpackChunkName: "shopSafe" */ "src/page/shop/children/children/shopSafe.vue"
  );
const info = () =>
  import(/* webpackChunkName: "info" */ "src/page/profile/children/info.vue");
const setusername = () =>
  import(
    /* webpackChunkName: "setusername" */ "src/page/profile/children/children/setusername.vue"
  );
const address = () =>
  import(
    /* webpackChunkName: "address" */ "src/page/profile/children/children/address.vue"
  );
const add = () =>
  import(
    /* webpackChunkName: "add" */ "src/page/profile/children/children/children/add.vue"
  );
const addDetail = () =>
  import(
    /* webpackChunkName: "addDetail" */ "src/page/profile/children/children/children/children/addDetail.vue"
  );
const balance = () =>
  import(/* webpackChunkName: "balance" */ "src/page/balance/balance.vue");
const balanceDetail = () =>
  import(
    /* webpackChunkName: "balanceDetail" */ "src/page/balance/children/detail.vue"
  );
const benefit = () =>
  import(/* webpackChunkName: "benefit" */ "src/page/benefit/benefit.vue");
const coupon = () =>
  import(
    /* webpackChunkName: "coupon" */ "src/page/benefit/children/coupon.vue"
  );
const hbDescription = () =>
  import(
    /* webpackChunkName: "hbDescription" */ "src/page/benefit/children/hbDescription.vue"
  );
const hbHistory = () =>
  import(
    /* webpackChunkName: "hbHistory" */ "src/page/benefit/children/hbHistory.vue"
  );
const exchange = () =>
  import(
    /* webpackChunkName: "exchange" */ "src/page/benefit/children/exchange.vue"
  );
const commend = () =>
  import(
    /* webpackChunkName: "commend" */ "src/page/benefit/children/commend.vue"
  );
const points = () =>
  import(/* webpackChunkName: "points" */ "src/page/points/points.vue");
const pointsDetail = () =>
  import(
    /* webpackChunkName: "pointsDetail" */ "src/page/points/children/detail.vue"
  );
const service = () =>
  import(/* webpackChunkName: "service" */ "src/page/service/service.vue");
const questionDetail = () =>
  import(
    /* webpackChunkName: "questionDetail" */ "src/page/service/children/questionDetail.vue"
  );
const find = () =>
  import(/* webpackChunkName: "find" */ "src/page/find/find.vue");
const download = () =>
  import(/* webpackChunkName: "download" */ "src/page/download/download.vue");

const routes = [
  //地址为空时跳转home页面
  {
    path: "",
    redirect: "/home",
  },
  //首页城市列表页
  {
    path: "/home",
    component: home,
  },
  //当前选择城市页
  {
    path: "/city/:cityid",
    component: city,
  },
  //所有商铺列表页
  {
    path: "/msite",
    component: msite,
    meta: { keepAlive: true },
  },
  //特色商铺列表页
  {
    path: "/food",
    component: food,
  },
  //搜索页
  {
    path: "/search/:geohash",
    component: search,
  },
  //商铺详情页
  {
    path: "/shop",
    component: shop,
    children: [
      {
        path: "foodDetail", //食品详情页
        component: foodDetail,
      },
      {
        path: "shopDetail", //商铺详情页
        component: shopDetail,
        children: [
          {
            path: "shopSafe", //商铺安全认证页
            component: shopSafe,
          },
        ],
      },
    ],
  },
  //确认订单页
  {
    path: "/confirmOrder",
    component: confirmOrder,
    children: [
      {
        path: "remark", //订单备注
        component: remark,
      },
      {
        path: "invoice", //发票抬头
        component: invoice,
      },
      {
        path: "payment", //付款页面
        component: payment,
      },
      {
        path: "userValidation", //用户验证
        component: userValidation,
      },
      {
        path: "chooseAddress", //选择地址
        component: chooseAddress,
        children: [
          {
            path: "addAddress", //添加地址
            component: addAddress,
            children: [
              {
                path: "searchAddress", //搜索地址
                component: searchAddress,
              },
            ],
          },
        ],
      },
    ],
  },
  //登录注册页
  {
    path: "/login",
    component: login,
  },
  //个人信息页
  {
    path: "/profile",
    component: profile,
    children: [
      {
        path: "info", //个人信息详情页
        component: info,
        children: [
          {
            path: "setusername",
            component: setusername,
          },
          {
            path: "address",
            component: address, //编辑地址
            children: [
              {
                path: "add",
                component: add,
                children: [
                  {
                    path: "addDetail",
                    component: addDetail,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "service", //服务中心
        component: service,
      },
    ],
  },
  //修改密码页
  {
    path: "/forget",
    component: forget,
  },
  //订单列表页
  {
    path: "/order",
    component: order,
    children: [
      {
        path: "orderDetail", //订单详情页
        component: orderDetail,
      },
    ],
  },
  //vip卡页
  {
    path: "/vipcard",
    component: vipcard,
    children: [
      {
        path: "invoiceRecord", //开发票
        component: invoiceRecord,
      },
      {
        path: "useCart", //购买会员卡
        component: useCart,
      },
      {
        path: "vipDescription", //会员说明
        component: vipDescription,
      },
    ],
  },
  //发现页
  {
    path: "/find",
    component: find,
  },
  //下载页
  {
    path: "/download",
    component: download,
  },
  //服务中心
  {
    path: "/service",
    component: service,
    children: [
      {
        path: "questionDetail", //订单详情页
        component: questionDetail,
      },
    ],
  },
  //余额
  {
    path: "balance",
    component: balance,
    children: [
      {
        path: "detail", //余额说明
        component: balanceDetail,
      },
    ],
  },
  //我的优惠页
  {
    path: "benefit",
    component: benefit,
    children: [
      {
        path: "coupon", //代金券说明
        component: coupon,
      },
      {
        path: "hbDescription", //红包说明
        component: hbDescription,
      },
      {
        path: "hbHistory", //历史红包
        component: hbHistory,
      },
      {
        path: "exchange", //兑换红包
        component: exchange,
      },
      {
        path: "commend", //推荐有奖
        component: commend,
      },
    ],
  },
  //我的积分页
  {
    path: "points",
    component: points,
    children: [
      {
        path: "detail", //积分说明
        component: pointsDetail,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: routerMode,
  strict: process.env.NODE_ENV !== "production",
  // 这个东西其实没啥用，只有你点击前进后退按钮时才有保留滚动位置的效果
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return { x: 0, y: to.meta.savedPosition || 0 };
    }
  },
});

export default router;
