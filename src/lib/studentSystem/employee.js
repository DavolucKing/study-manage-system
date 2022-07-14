/**
 * @description 职工类
 *
 * @date 2022/7/14 10:40 上午
 * @author 崔孝楠
 * @version 1.0
 */

import Person from "./person"

class Employee extends Person {

  /**
   * 职工号
   * @private
   */
  _employeeMember;

  /**
   * 职位
   * @private
   */
   _position;

  /**
   * 入职日期
   * @private
   */
  _hireDate;

  constructor() {
    super();
  }

  set employeeMember(employeeMember) {
    this._employeeMember = employeeMember;
  }

  get employeeMember() {
    return this._employeeMember;
  }

  set position(position) {
    this._position = position;
  }

  get position() {
    return this._position;
  }

  set hireDate(hireDate) {
    this._hireDate = hireDate;
  }

  get hireDate() {
    return this._hireDate;
  }

}

export default Employee
