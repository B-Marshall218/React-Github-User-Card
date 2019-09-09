import React from "react"


const UserCard = (props) => {
    return (
        <div>
            <div className="header">
                {props.userData.name}
                {props.userData.login}
            </div>
            <div className="userInfo">
                <img src={props.userData.avatar_url} className="avatar"></img>
                followers: {props.userData.followers}
            </div>
        </div>
    )
}

export default UserCard 