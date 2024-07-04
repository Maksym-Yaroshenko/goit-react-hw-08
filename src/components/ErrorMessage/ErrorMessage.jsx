import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <>
      <p className={css.text}>Alas, something happened, refresh the page.</p>
    </>
  );
}
