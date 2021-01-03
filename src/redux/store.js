import { createStore } from 'redux'
import { reducerKursus } from './reducer'
const storeState = createStore( reducerKursus );
export default storeState;