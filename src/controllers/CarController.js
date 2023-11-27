import BaseController from "./BaseController.js";

export default class CarController extends BaseController{
    #CREATE_CAR_PATH = '/cars'
    #GET_USER_CARS_PATH = '/cars'
    #DELETE_USER_CARS_PATH = '/cars/#'

    constructor(options) {
        super(options)
    }

    async getUserCars(){
        return this._client.get(this.#GET_USER_CARS_PATH)
    }

    async deleteCar(id){
        return this._client.delete(this.#DELETE_USER_CARS_PATH.replace('#', id))
    }
}