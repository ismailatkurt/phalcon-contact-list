import {connect} from "react-redux";
import ContentHeader from "./ContentHeader";

const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {}
};

const ContentHeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContentHeader);

export default ContentHeaderContainer