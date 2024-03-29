import axios from 'axios'
import React from 'react'
import Profile from './Profile'
import {getUserProfile, getStatus, updateStatus} from '../../redux/profileReducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
// import { usersAPI } from '../../api/api'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 17509
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps , {
        getUserProfile,
        getStatus,
        updateStatus
    }),
    withRouter,
)(ProfileContainer);

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)



// let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)

// export default connect(mapStateToProps , {
//     getUserProfile
// })(withUrlDataContainerComponent)