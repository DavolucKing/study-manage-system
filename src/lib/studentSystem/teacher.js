/**
 * @description 教师类
 *
 * @date 2022/7/14 10:50 上午
 * @author 崔孝楠
 * @version 1.0
 */

import Employee from "./employee"

class Teacher extends Employee {

    /**
     * 职称
     * @private
     */
    _professionalTitle = '';

    /**
     * 学院
     * @private
     */
    _college = '';

    /**
     * 课程/科目
     * @private
     */
    _course = '';

    constructor(professionalTitle, college, course) {
        super();
        this._professionalTitle = professionalTitle;
        this._college = college;
        this._course = course;
    }

    set professionalTitle(professionalTitle) {
        this._professionalTitle = professionalTitle;
    }

    get professionalTitle() {
        return this._professionalTitle;
    }

    set college(college) {
        this._college = college;
    }

    get college() {
        return this._college;
    }

    set course(course) {
        this._course = course;
    }

    get course() {
        return this._course;
    }

}

export default Teacher
