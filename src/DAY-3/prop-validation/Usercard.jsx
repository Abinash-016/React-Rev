import PropTypes from "prop-types";

function UserCard({ name, age, role, user }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
      <p>User ID: {user.id}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}


UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  role: PropTypes.oneOf(["admin", "user", "guest"]).isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired
};

export default UserCard;
