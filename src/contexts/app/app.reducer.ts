export const initialState = {
    searchTerm: "",
    isSticky: false,
    isSidebarSticky: true,
    isDrawerOpen: false,
    isModalOpen: false,
    category: "",
    tabMobile: "01"
};

type ActionType =
    | { type: "SET_SEARCH_TERM"; payload: string }
    | { type: "SET_CATEGORY"; payload: string }
    | { type: "SET_STICKY" }
    | { type: "REMOVE_STICKY" }
    | { type: "SET_SIDEBAR_STICKY" }
    | { type: "REMOVE_SIDEBAR_STICKY" }
    | { type: "TOGGLE_DRAWER" }
    | { type: "TOGGLE_MODAL" }
    | { type: "SWITCT_TAB_MOBILE_MENU"; payload: string };

type StateType = typeof initialState;

export function appReducer(state: StateType, action: ActionType): StateType {
    console.log('====================================');
    console.log('action : ', action);
    console.log('====================================');
    switch (action.type) {
        case "SET_SEARCH_TERM":
            return {
                ...state,
                searchTerm: action.payload,
            };
        case "SET_CATEGORY":
            return {
                ...state,
                category: action.payload,
            };
        case "SET_STICKY":
            return {
                ...state,
                isSticky: true,
            };
        case "REMOVE_STICKY":
            return {
                ...state,
                isSticky: false,
            };
        case "SET_SIDEBAR_STICKY":
            return {
                ...state,
                isSidebarSticky: true,
            };
        case "REMOVE_SIDEBAR_STICKY":
            return {
                ...state,
                isSidebarSticky: false,
            };
        case "TOGGLE_DRAWER":
            return {
                ...state,
                isDrawerOpen: !state.isDrawerOpen,
            };
        case "TOGGLE_MODAL":
            return {
                ...state,
                isModalOpen: !state.isModalOpen,
            };
        case "SWITCT_TAB_MOBILE_MENU":
            return {
                ...state,
                tabMobile: action.payload
            }
        default: {
            throw new Error(`Unsupported action type at App Reducer`);
        }
    }
}
