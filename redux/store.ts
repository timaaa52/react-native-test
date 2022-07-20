import { useDispatch } from 'react-redux'
import {
	applyMiddleware,
	combineReducers,
	legacy_createStore as createStore,
} from 'redux'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { appReducer, fetchDataType } from './reducers/appReducer'

const rootReducer = combineReducers({
	app: appReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

export const useAppDispatch = useDispatch<ThunkDispatch<AppRootStateType, unknown, fetchDataType>>
