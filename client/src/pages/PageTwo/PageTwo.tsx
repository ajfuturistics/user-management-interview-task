import { useNavigate, useSearchParams } from "react-router-dom";
import Form from "../../components/Form/Form";
import { FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, getUser, updateUser } from "../../redux/user/userActions";
import { AppDispatch, RootState } from "../../redux/store";

interface IState {
  name: string;
  email: string;
  phone: string;
}

const PageTwo = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const userId = searchParams.get("userId");

  const { user, loading } = useSelector((state: RootState) => state.users);

  const handleAddUser = (e: FormEvent, data: User | IState) => {
    e.preventDefault();
    if (
      data?.name.trim() === "" ||
      data?.email?.trim() === "" ||
      data?.phone === ""
    ) {
      alert("Fill all fields");
      return;
    }
    const updatedData: IState = {
      name: data.name,
      email: data.email || "",
      phone: data.phone || "",
    };
    if (userId) {
      dispatch(updateUser({ userId, updatedData }))
        .then(() => navigate("/"))
        .catch((err) => console.log(err));
    } else {
      dispatch(addUser(updatedData))
        .then(() => navigate("/"))
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    if (userId) {
      dispatch(getUser(userId)).catch(() => console.log("error"));
    }
  }, [userId, dispatch]);

  return (
    <div className="mt-2 w-full max-w-2xl ">
      <h2 className="font-semibold text-xl my-4 text-center">Add User</h2>
      <Form
        key={user?.id || "form"}
        Type={userId ? "Update" : "Add"}
        user={user}
        handlerFunc={handleAddUser}
        loading={loading}
      />
    </div>
  );
};

export default PageTwo;
