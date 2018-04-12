import { createAction } from 'redux-actions';
import { MockPath } from '../../utils/config';
import { fetchMock } from '../../utils/fetchData';

const fetchHomeListSuccess = createAction('FETCH_HOME_LIST_SUCCESS');
export const fetchHomeList = keyWords => async dispatch => {
  try {
    const url = `${MockPath}/home/list`;
    const response = await fetchMock(url, { keyWords });
    if (response.data.success) {
      dispatch(fetchHomeListSuccess({ result: response.data.result }));
    } else {
      console.log('error1');
      // dispatch(loginFailed());
    }
  } catch (err) {
    console.log('error2');
    // dispatch(backendError('登录失败，请联系管理员'));
  }
};
