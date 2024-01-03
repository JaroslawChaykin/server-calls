import { v4 as uuid} from "uuid"

const STATUSES = {
    1: 'новый',
    2: 'в обработке',
    3: 'обработан успешно',
}

/**
 *
 * @param {number} id - uuid
 * @param {string} number = caller's telephone number
 * @param {string} status = STATUSES
 * @param {string} name = caller's name
 * @param {string} email = caller's email
 */
const calls = [
    {id: 1, number: '+79255779723', status: 1, name: 'Ярослав', email: 'sobaka@gmail.com'}
]

class CallsService {
    constructor(data) {
        this.data = data
    }

    getCalls() {
        return this.data
    }

    addCalls(call) {
        const newCall = {
            ...call,
            id: uuid()
        }

        this.data.push(newCall)

        return newCall;
    }

    getTotalLength() {
        return this.data.length
    }
}

export const callsService = new CallsService(calls)