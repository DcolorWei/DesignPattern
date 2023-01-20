export default class Singleton {
    // 无实例化
    private static _instance: Singleton;
    private constructor(num: number, str: string) {
        this.token = num;
    }
    public static instance(num = 0, str = 'init'): Singleton {
        //若实例不存在，则新建一个
        if (!this._instance) {
            this._instance = new Singleton(num, str);
        }
        return this._instance
    }

    // 访问控制
    private token: number;
    public static getToken() {
        return this._instance.token;
    }
}