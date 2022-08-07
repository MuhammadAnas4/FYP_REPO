import { LOG_IN, LOG_OUT, VERIFY_USER } from './Type';

const LogIn = (cnic, token, expiry) => {
    return {
        type: LOG_IN,
        payload: {
            token: token,
            expiry: expiry,
        }
    }
}

const LogOut = () => {
    return {
        type: LOG_OUT
    }
}

export { LogIn, LogOut };