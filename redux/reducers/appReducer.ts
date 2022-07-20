import axios from 'axios'
import { Dispatch } from 'redux'
import { dataType } from './types'

const initialState = [] as dataType[]

export const appReducer = (
	state: dataType[] = initialState,
	action: fetchDataType
) => {
	switch (action.type) {
		case 'FETCH-DATA':
			return action.payload.data.map(el => el)
		default:
			return state
	}
}

export type fetchDataType = ReturnType<typeof fetchData>
export const fetchData = (data: dataType[]) => ({
	type: 'FETCH-DATA',
	payload: {
		data,
	},
})

//thunk
const url =
	'https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9'
export const getData = () => (dispatch: Dispatch) => {
	axios.get(url).then(res => {
		dispatch(fetchData(res.data))
	})
}
