import { useEffect } from "react";
import Table from "../../components/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { getUser } from "../../redux/user/userActions";
import { useParams } from "react-router-dom";
const headers = [
  {
    title: "ID",
    isAction: false,
  },
  {
    title: "Name",
    isAction: false,
  },
  {
    title: "Email",
    isAction: false,
  },
  {
    title: "Phone",
    isAction: false,
  },
];
const PageThree = () => {
  const { userId } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const { user, loading } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    if (userId) {
      dispatch(getUser(userId)).catch((err) => console.log(err));
    }
  }, [userId, dispatch]);

  return (
    <div className="mt-2 w-full max-w-2xl ">
      <h2 className="font-semibold text-xl my-4 text-center">View User</h2>
      {loading ? (
        <h2 className="my-2">Loading....</h2>
      ) : (
        <Table headers={headers} data={user ? [{ ...user }] : []} />
      )}
    </div>
  );
};

export default PageThree;
