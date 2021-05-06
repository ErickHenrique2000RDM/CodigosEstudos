import {combineReducers} from 'redux'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCyclesReducer from '../billingCycle/billingCycleReducer'
import {reducer as toastrReducer} from 'react-redux-toastr'

import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCyclesReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer