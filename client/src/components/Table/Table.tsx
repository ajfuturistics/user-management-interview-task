import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { deleteUser } from "../../redux/user/userActions";

interface TableProps {
  headers: {
    title: string;
    isAction: boolean;
  }[];
  data: User[];
  error?: boolean;
}
const Table = ({ headers, data, error }: TableProps) => {
  const dispatch = useDispatch<AppDispatch>();
  if (data.length === 0) {
    return (
      <>
        <h2 className="my-2">No Users Found</h2>
      </>
    );
  }

  if (error) {
    return (
      <>
        <h2 className="my-2">Failed to fetch users</h2>
      </>
    );
  }

  const handleDeleteUser = (id: string) => {
    const isConfirm = confirm("Are you sure want to delete this user");

    if (isConfirm) {
      dispatch(deleteUser(id)).catch((err) => console.log(err));
    }
  };

  return (
    <table className="w-full striped sm:border sm:border-slate-200 sm:dark:border-slate-800 dark:border-slate-700">
      <thead className="hidden border-0 sm:table-header-group">
        <tr>
          {headers.map((val) =>
            val.isAction ? (
              <th
                key={val.title}
                className="bg-slate-100 px-4 py-2 dark:bg-slate-800 border-0 border-b border-slate-100 dark:border-slate-700 uppercase font-medium text-slate-600 dark:text-slate-400 text-left text-xs sm:pr-6"
              >
                <span className="sr-only">{val.title}</span>
              </th>
            ) : (
              <th
                key={val.title}
                className="bg-slate-100 px-4 py-2 dark:bg-slate-800 border-0 border-b border-slate-100 dark:border-slate-700 uppercase font-medium text-slate-600 dark:text-slate-400 text-left text-xs sm:pl-6"
              >
                {val.title}
              </th>
            )
          )}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-200 bg-white dark:divide-slate-800 dark:bg-transparent">
        {data.map((dt) => (
          <tr
            key={dt?.id}
            className="text-sm border border-slate-200 flex flex-col mb-6 py-1 divide-y divide-y-slate-50 dark:border-slate-800 sm:border-0 sm:table-row sm:mb-0 sm:py-0 dark:divide-slate-800 sm:divide-none"
          >
            <td className="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:text-[0.625rem] before:uppercase before:font-medium sm:pl-6">
              {dt.id}
            </td>
            <td className="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:text-[0.625rem] before:uppercase before:font-medium">
              {dt.name}
            </td>
            {headers.some((head) => head.title === "Email") && (
              <td className="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:text-[0.625rem] before:uppercase before:font-medium">
                {dt.email}
              </td>
            )}
            {headers.some((head) => head.title === "Phone") && (
              <td className="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:text-[0.625rem] before:uppercase before:font-medium">
                {dt.phone}
              </td>
            )}
            {headers.some((head) => head.isAction === true) && (
              <td className="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:text-[0.625rem] before:uppercase before:font-medium">
                <Link
                  className="bg-blue-50 dark:bg-blue-900/50 hover:bg-blue-100 sm:hover:bg-transparent sm:bg-transparent py-2.5 px-3.5 sm:py-0 rounded-md sm:rounded-none text-blue-600 shadow-sm sm:shadow-none text-center sm:text-left underline-offset-4 dark:text-blue-500 hover:underline hover:text-blue-800"
                  to={`/user/${dt.id}`}
                >
                  View
                </Link>
                <Link
                  className="bg-blue-50 dark:bg-blue-900/50 hover:bg-blue-100 sm:hover:bg-transparent sm:bg-transparent py-2.5 px-3.5 sm:py-0 rounded-md sm:rounded-none text-blue-600 shadow-sm sm:shadow-none text-center sm:text-left underline-offset-4 dark:text-blue-500 hover:underline hover:text-blue-800"
                  to={`/user-form?userId=${dt.id}`}
                >
                  Edit
                </Link>
                <span
                  onClick={() => handleDeleteUser(dt.id)}
                  className="bg-blue-50 dark:bg-blue-900/50 hover:bg-blue-100 sm:hover:bg-transparent sm:bg-transparent py-2.5 px-3.5 sm:py-0 rounded-md sm:rounded-none text-blue-600 shadow-sm sm:shadow-none text-center sm:text-left underline-offset-4 dark:text-blue-500 hover:underline hover:text-blue-800 cursor-pointer font-medium"
                >
                  Delete
                </span>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
