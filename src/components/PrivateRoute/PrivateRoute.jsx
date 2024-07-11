import { useSelector } from "react-redux";
import { selectisLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router";

export default function PrivateRoute({ components }) {
  const isLoggedIn = useSelector(selectisLoggedIn);
  return isLoggedIn ? components : <Navigate to="/login" />;
}
