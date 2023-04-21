import classes from "./KeysList.module.scss";
import Key from "./Key";
import { keysListSelector } from "../../store/Keys/keysSelectors";
import { useAppSelector } from "../../hooks/ts-hooks";

const KeysList = () => {
  const keys = useAppSelector(keysListSelector);

  return (
    <>
      <ul className={classes.keysList}>
        {keys.map((keyItem) => (
          <li key={keyItem.id}>
            <Key id={keyItem.id} keyContent={keyItem.key} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default KeysList;
