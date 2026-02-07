import UserCard from "./Usercard";

function Prop_validation() {
  return (
    <div>
      <h1>prop_validation</h1>

      <UserCard
        name="Abinash"
        age={20}
        role="admin"
        user={{ id:100 ,email: "abinash@gmail.com" }}
        />
    </div>
  );
}

export default Prop_validation;