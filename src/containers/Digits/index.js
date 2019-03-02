import { connect } from 'react-redux';
import DigitsView from '../../components/Digits';
import { digitClick } from '../../actions/digit';

export const digitClickHandler = dispatch => (numberClicked) => dispatch(digitClick(
    numberClicked));

const mapDispatchToProps = (dispatch) => ({
    digitClickHandler: digitClickHandler(dispatch)
})

export default connect(null, mapDispatchToProps)(DigitsView);