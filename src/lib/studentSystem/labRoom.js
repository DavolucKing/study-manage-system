/**
 * @description 实验室类
 *
 * @date 2022/7/14
 * @author 赵常畅
 * @version 1.0
 */

import baseRoomClass from "./baseRoomClass";

class labRoom extends baseRoomClass {
    /**
     * 用途（化学实验室、机房等）
     * @private
     */
    _usePurpose;
    /**
     * 管理员
     * @private
     */
    _labManager;
    constructor() {
        super();
    }

    get usePurpose() {
        return this._usePurpose;
    }
    set usePurpose(usePurpose) {
        this._usePurpose = usePurpose;
    }
    get labManager() {
        return this._labManager;
    }
    set labManager(labManager) {
        this._labManager = labManager;
    }
}

export default labRoom
