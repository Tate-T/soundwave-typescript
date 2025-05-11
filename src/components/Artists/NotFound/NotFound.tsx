import css from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={css.notfound}>
      <span className={css.notfoundEmoji}>:/</span>
      <p className={css.notfoundText}>No data available for this query</p>
    </div>
  );
};

export default NotFound;
