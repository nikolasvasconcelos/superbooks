import {connect} from 'react-redux';
import {requestBooks} from '../../Redux/Actions';
import {bindActionCreators} from 'redux';

import AppContainer from '../../App/AppContainer';

const mapDispatchToProps = dispatch =>
  bindActionCreators({requestBooks}, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(AppContainer);
