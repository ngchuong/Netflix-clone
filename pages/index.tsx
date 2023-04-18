import type { NextPage } from "next";
import { NextPageContext } from "next";
import { signOut } from "next-auth/react";
import { getSession } from "next-auth/react";
import useCurrentUser from "../hooks/useCurrentUser";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const Home: NextPage = () => {
  const { data: user } = useCurrentUser();
  
  return (
    <>
      <h1 className="text-2xl text-green-500">Netflix Clone</h1>
      <p className="text-white">Logged with username: {user?.name}</p>
      <button className="text-white" onClick={() => signOut()}>
        Logout
      </button>
    </>
  );
};

export default Home;
