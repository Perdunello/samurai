import Users from "./Users";
import {connect} from "react-redux";
import {
    follow, requestUsers,
    setPageNumber,
    setTotalUsersCount,
    setUsers, unfollow,
} from "../../redux/usersReducer";
import React from "react";
import c from "./Users.module.css";
import {
    getCurrentPageNumber,
    getIsFetching,
    getIsFollowing,
    getPageCount,
    getTotalUsersCount, getUsers
} from "../../redux/usersSelectors";

class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPageNumber, this.props.pageCount)
    }

    showPagination() {
        let pagesCount = 9
        // Math.ceil(this.props.totalUsersCount / this.props.pageCount)
        let pages = []
        for (let i = 0; i < pagesCount; i++) {
            pages.push(i + 1)
        }
        return <div>
            {pages.map(page => {
                return <span key={page}
                             className={this.props.currentPageNumber === page ? c.activePage : ""}
                             onClick={() => this.setActivePage(page)}>{page}</span>
            })}
        </div>
    }

    setActivePage(page) {
        this.props.setPageNumber(page)
        this.props.getUsers(page, this.props.pageCount)
    }

    render() {
        return <Users
            totalCountUsers={this.props.totalUsersCount}
            users={this.props.users}
            currentPageNumber={this.props.currentPageNumber}
            showPagination={this.showPagination.bind(this)}
            isFetching={this.props.isFetching}
            isFollowing={this.props.isFollowing}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        currentPageNumber: getCurrentPageNumber(state),
        totalUsersCount: getTotalUsersCount(state),
        pageCount: getPageCount(state),
        isFetching: getIsFetching(state),
        isFollowing: getIsFollowing(state),
    }
}

let mapDispatchToProps = {
    setUsers,
    setTotalUsersCount,
    setPageNumber,
    getUsers: requestUsers,
    follow,
    unfollow,
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)
export default UsersContainer