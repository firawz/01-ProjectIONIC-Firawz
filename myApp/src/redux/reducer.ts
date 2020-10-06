const initialState = {
     user: {}
}

export const REDUCER_ACTION_MAP = {
   SET_USER_STATE: "SET_USER_STATE"
}

export default function reducer(state = initialState,
     { type, payload }:
          { type: string, payload: any })
     : any {
     switch (type) {
          case REDUCER_ACTION_MAP.SET_USER_STATE':
               return {
                    ...state, user: {
                         email: payload.split('@')[0]
                    }
               }
     }
     return state
}
