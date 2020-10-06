import { REDUCER_ACTION_MAP } from "./reducer.ts";

export const setUserState = (payload : any) => {
    return { type: REDUCER_ACTION_MAP.SET_USER_STATE, payload}
}
