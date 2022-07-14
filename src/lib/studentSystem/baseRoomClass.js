class baseRoomClass{
    /**
     * private 所在楼号
     */
    _buildingNumber;
    /**
     * private 所在房间号
     */
    _roomNumber;
    /**
     * private 容纳人数
     */
    _containNumber;
    /**
     * private 占用班级号
     */
    _occupyClassNumber;

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

export default {baseRoomClass}