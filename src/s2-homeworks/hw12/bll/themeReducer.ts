
type initStateType = {
    themeId: number
}

type ChangeThemeIdACType = {
    type: 'SET_THEME_ID'
    id: number
}

const initState: initStateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeIdACType): initStateType => {
    switch (action.type) {
        case 'SET_THEME_ID': {
            return { ...state, themeId: action.id }
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number):any  => ({ type: 'SET_THEME_ID', id })
