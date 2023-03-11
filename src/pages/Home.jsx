import Header from "../components/Header";
import { signOut } from "firebase/auth"; //for log out process
import { useCallback } from "react";
import { auth } from "../firebase/Firebase";
import { useAuthState } from "react-firebase-hooks/auth"; //yetkili bilgileri icin
import Posts from "../components/Posts";
import AddPost from "../components/AddPost";
const Home = () => {
  const [user, isLoading] = useAuthState(auth);
  //isLoading yuklenirken mesaj gondermek icin

  const handleSignOut = useCallback(
    () => {
      signOut(auth);
    },
    [
      /* alinacak degerler e, id, silinecek oge vs  */
    ]
  );

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="max-w-md py-12 mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <p className="bg-gray-400 p-1 rounded-2xl text-2xl font-semibold">
            {user.displayName}
          </p>
          <p className="bg-gray-400 p-1 rounded-2xl text-2xl">{user.email}</p>
        </div>
        <button
          className="bg-red-500 p-3 text-2xl rounded-md text-white"
          onClick={handleSignOut}
        >
          Sign out
        </button>
      </div>
      <AddPost />
      <Posts />
    </div>
  );
};

export default Home;
