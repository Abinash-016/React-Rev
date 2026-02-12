import { useParams } from "react-router-dom";

function Profile() {
  const { id } = useParams();
  return <h2>Profile ID: {id}</h2>;
}

export default Profile;
