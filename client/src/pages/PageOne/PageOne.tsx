import { Link } from "react-router-dom";
import Table from "../../components/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { getUsers } from "../../redux/user/userActions";

const headers = [
  {
    title: "ID",
    isAction: false,
  },
  {
    title: "Name",
    isAction: false,
  },
  //   {
  //     title: "Email",
  //     isAction: false,
  //   },
  //   {
  //     title: "Phone",
  //     isAction: false,
  //   },
  {
    title: "Action",
    isAction: true,
  },
];
const PageOne = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(getUsers()).catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <div className="mt-2 w-full max-w-2xl ">
      <div className="my-4 flex justify-between flex-wrap">
        <h1 className="text-3xl font-bold">All Users</h1>
        <Link
          to="/user-form"
          className="bg-blue-700 text-white py-2 px-6 rounded-md"
        >
          Add User
        </Link>
      </div>
      {loading ? (
        <h2 className="my-2">Loading....</h2>
      ) : (
        <Table headers={headers} data={users} error={error} />
      )}
    </div>
  );
};

export default PageOne;
