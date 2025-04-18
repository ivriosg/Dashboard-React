export default function Button({ clas, icon, showIcon, concept }) {
  return (
    <button className={clas}>
      {showIcon && icon}
      {concept}
    </button>
  );
}
