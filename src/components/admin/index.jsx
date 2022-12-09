import { useDispatch, useSelector } from "react-redux"
import { update } from "../../store/slices/items"

export const Admin = () => {
    const user = useSelector((state) => state.user.value)
    const dispatch = useDispatch()

    function handleInputChange(e) {
        const state = {
              ...user,
              [e.target.name]: e.target.value,
            };
            dispatch(update(state));
    }

    return (
        <>
            <span>{user.username} | {user.email}</span>
            <input
            type="text"
            value={user.username}
            className="mb-3"
            onChange={handleInputChange}
            />
        </>
    )
}
