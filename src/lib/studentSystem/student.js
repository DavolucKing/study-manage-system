/**
 * @description 学生类
 *
 * @date 2022/7/14 9:51 上午
 * @author 崔孝楠
 * @version 1.0
 */

import Person from "./person"

class Student extends Person {


  /**
   * 学号
   * @private
   */
  _studentMember;

  /**
   * 年级
   * @private
   */
  _grade;

  /**
   * 学院
   * @private
   */
  _college;

  /**
   * 班级
   * @private
   */
  _classes;

  /**
   * 入校日期
   * @private
   */
  _admissionDate;

  constructor() {
    super();
  }

  set studentMember(studentMember) {
    this._studentMember = studentMember;
  }

  get studentMember() {
    return this._studentMember;
  }

  set grade(grade) {
    this._grade = grade;
  }

  get grade() {
    return this._grade;
  }

  set college(college) {
    this._college = college;
  }

  get college() {
    return this._college;
  }

  set classes(classes) {
    this._classes = classes;
  }

  get classes() {
    return this._classes;
  }

  set admissionDate(admissionDate) {
    this._admissionDate = admissionDate;
  }

  get admissionDate() {
    return this._admissionDate;
  }


}

export default Student
