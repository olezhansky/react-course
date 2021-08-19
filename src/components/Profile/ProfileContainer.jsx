import axios from 'axios'
import React from 'react'
import Profile from './Profile'
import {getUserProfile} from '../../redux/profileReducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
// import { usersAPI } from '../../api/api'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
        
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = state => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps , {
    getUserProfile
})(withUrlDataContainerComponent)