/**
 * @description 人员类
 *
 * @date 2022/7/14 9:13 上午
 * @author 崔孝楠
 * @version 1.0
 */

class Person {

  /**
   * 姓名
   * @private
   */
  _personName;

  /**
   * 性别
   * @private
   */
  _sex;

  /**
   * 出生日期
   * @private
   */
  _birth;

  /**
   * 手机号
   * @private
   */
  _phone;

  /**
   * 住址
   * @private
   */
  _address;

  constructor() {
  }

  set personName(personName) {
    this._personName = personName;
  }

  get personName() {
    return this._personName;
  }

  set sex(sex) {
    this._sex = sex;
  }

  get sex() {
    return this._sex;
  }

  set birth(birth) {
    this._birth = birth;
  }

  get birth() {
    return this._birth;
  }

  set phone(phone) {
    this._phone = phone;
  }

  get phone() {
    return this._phone;
  }

  set address(address) {
    this._address = address;
  }

  get address() {
    return this._address;
  }

}

export default Person
