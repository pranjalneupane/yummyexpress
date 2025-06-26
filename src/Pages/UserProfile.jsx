import { useAuth0 } from "@auth0/auth0-react";

function UserProfile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);

  console.log(isLoading);
  console.log(isAuthenticated);
  return (
    <div>
      {isAuthenticated ? (
        <div className=" p-5 shadow-2xl shadow-gray-500  flex gap-5 
         h-44 rounded-2xl my-10 w-[500px]  m-auto items-center">
          <div className=" ">
            <img className="  rounded-full " src={user.picture} alt="" />
          </div>

          <div className="text-2xl">
            <h1>Name:{user.name}</h1>
            <h1>Email:{user.email}</h1>
          </div>
        </div>
      ) : (
        <div>User Not Found</div>
      )}
    </div>
  );
}

export default UserProfile;
