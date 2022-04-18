import { makeAutoObservable } from "mobx"

class LoginStore {
    userName = ""

    constructor() {
        makeAutoObservable(this)
    }

    setUserName = (str) => {
        this.userName = str
    }

}

export { LoginStore }
