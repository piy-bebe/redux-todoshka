import React from "react"
import { useSelector } from "react-redux"

const UserList: React.FC = () => {

  const state = useSelector(state => state.users)

  return (<div>
    List
  </div>)
}
export default UserList