import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastContainerWrapper: React.FC = () => {
  return <ToastContainer position="top-right" autoClose={3000} />;
};

export default ToastContainerWrapper;