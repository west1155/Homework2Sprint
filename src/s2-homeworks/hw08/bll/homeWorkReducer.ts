import {UserType} from '../HW8'

export type StateType = {
    people: UserType[]
}

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'sort': { // by name

            return{
                ...state,
                people: state.people.sort((a: UserType, b: UserType) => {
                    if (a.name > b.name) {
                        return action.payload === 'up' ? 1 : -1
                    } else {
                        return action.payload === 'up' ? -1 : 1
                    }
                })
            }
        }
        case 'check': {

            return {
                ...state,
                people: state.people.filter((p: UserType) => p.age >= action.payload)
            }
        }
        default:
            return state
    }
}
