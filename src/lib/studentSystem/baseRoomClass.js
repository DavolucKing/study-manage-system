/**
 * @description 房间类
 *
 * @date 2022/7/14 10:40 上午
 * @author 赵常畅
 * @version 1.0
 */
class baseRoomClass{
    /**
     * 教学楼号
     * @private
     */
    _buildingNumber = 0;
    /**
     * 房间号
     * @private
     */
    _roomNumber = 0;
    /**
     * 可容纳人数
     * @private
     */
     _containNumber = 0;
    /**
     * 使用班级
     * @private
     */
    _occupyClassNumber = 0;

    constructor(buildingNumber,roomNumber,containNumber,occupyClassNumber) {
        this._buildingNumber =buildingNumber;
        this._roomNumber = roomNumber;
        this._containNumber = containNumber;
        this._occupyClassNumber = occupyClassNumber;
    }

    get buildingNumber() {
        return this._buildingNumber;
    }
    set buildingNumber(buildingNumber) {
        this._buildingNumber = buildingNumber;
    }
    get roomNumber() {
        return this._roomNumber;
    }
    set roomNumber(roomNumber) {
        this._roomNumber = roomNumber;
    }
    get containNumber() {
        return this._containNumber;
    }
    set containNumber(containNumber) {
        this._containNumber = containNumber;
    }
    get occupyClassNumber() {
        return this._occupyClassNumber;
    }
    set occupyClassNumber(occupyClassNumber) {
        this._occupyClassNumber = occupyClassNumber;
    }
}

export default baseRoomClass
