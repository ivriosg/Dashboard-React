export default function Button({ icon, showIcon, concept }) {
  return (
    <button className="blue">
      {showIcon && icon}
      {concept}
    </button>
  );
}
