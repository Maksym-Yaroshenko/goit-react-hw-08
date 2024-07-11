import { useSelector } from "react-redux";
import { selectisLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router";

export default function RestrictedRoute({ components }) {
  const isLoggedIn = useSelector(selectisLoggedIn);
  return isLoggedIn ? <Navigate to="/contacts" /> : components;
}
