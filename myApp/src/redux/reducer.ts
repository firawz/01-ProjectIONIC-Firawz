const initialState = {
     user: {}
}

export default function reducer(state = initialState,
     { type, payload }:
          { type: string, payload: any })
     : any {
     switch (type) {
          case 'SET_USER_STATE':
               return {
                    ...state, user: {
                         email: payload.split('@')[0]
                    }
               }
     }
     return state
}