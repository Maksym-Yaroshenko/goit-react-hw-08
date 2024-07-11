import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

import css from "./UserMenu.module.css";
import { logout } from "../../redux/auth/operations";
import toast, { Toaster } from "react-hot-toast";

const notify = (text) => toast(text, { position: "center-right" });

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <p className={css.username}>Welcome, {user.name}</p>

      <button
        className={css.btn12}
        type="button"
        onClick={() =>
          dispatch(logout())
            .unwrap()
            .then(() => notify("Congratulations! You are logged out"))
            .catch(() => notify("Oops... An error occurred. Try again"))
        }
      >
        <span>Logout</span>
      </button>
      <Toaster />
    </div>
  );
}
