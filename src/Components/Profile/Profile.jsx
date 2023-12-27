import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Stats from "../Stats/Stats";


const Profile = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className="flex justify-center items-center mt-12 ">
            <div className="flex flex-col items-center space-y-4">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img className="" src={user.photoURL} />
                    </div>
                </div>
                <h4 className="text-xl font-bold text-blue-600">{user.displayName}</h4>
                <p>{user.email}</p>
                <Stats></Stats>
            </div>
        </div>
    );
};

export default Profile;