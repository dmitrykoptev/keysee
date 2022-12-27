import { CSSTransition } from "react-transition-group";
import classes from "./Notification.module.css";

const Notification = (props) => {
  let specialClasses = "";

  if (props.status === "error") {
    specialClasses = classes.error;
  }
  if (props.status === "success") {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <>
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={1000}
        classNames={{
          enter: "",
          enterActive: classes.ModalOpen,
          exit: "",
          exitActive: classes.ModalClosed,
        }}
      >
        <div className={cssClasses}>
          <p>{props.message}</p>
        </div>
      </CSSTransition>
    </>
  );
};

export default Notification;
