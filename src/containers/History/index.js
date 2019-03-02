
import { connect } from 'react-redux';
import HistoryView from '../../components/History';
import { updateHistory } from '../../actions/history';
import { toggleHistory } from '../../actions/history';

export const historyItemClickHandler = dispatch => history => {
    dispatch(updateHistory(history));
    dispatch(toggleHistory());
}

const mapDispatchToProps = (dispatch) => ({
    historyItemClickHandler: historyItemClickHandler(dispatch),
    toggleHistory: () => dispatch(toggleHistory())
})

export default connect(null, mapDispatchToProps)(HistoryView);
