import {
  getUser,
  getAddressList
} from '../service/getData'
import {
  GET_USERINFO,
  SAVE_ADDRESS
} from './mutation-types.js'

export default {

  async getUserInfo (context) {
    let res = await getUser();
    context.commit(GET_USERINFO, res)
  },
  async saveAddress (context) {

    if (context.state.removeAddress.length > 0) return;

    let addres = await getAddressList(context.state.userInfo.user_id);
    context.commit(SAVE_ADDRESS, addres);
  },
}