import { FormEvent, useState } from "react";

interface FormProps {
  Type: string;
  handlerFunc: (e: FormEvent, data: User | IState) => void;
  user: User | null;
  loading: boolean;
}

interface IState {
  name: string;
  email: string;
  phone: string;
}

const Form = ({ Type, handlerFunc, user, loading }: FormProps) => {
  const [data, setData] = useState<IState | User>(
    user || {
      name: "",
      email: "",
      phone: "",
    }
  );
  return (
    <form
      onSubmit={(e) => handlerFunc(e, data)}
      className="flex justify-center items-center flex-col shadow-md rounded-md p-4"
    >
      <div className="mb-5 w-full">
        <label htmlFor="name" className="block mb-2 font-bold text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Put in your name."
          className="border border-gray-300 shadow p-3 w-full rounded"
          value={data?.name}
          onChange={(e) =>
            setData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </div>
      <div className="mb-5 w-full">
        <label htmlFor="email" className="block mb-2 font-bold text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Put in your email."
          className="border border-gray-300 shadow p-3 w-full rounded"
          value={data?.email}
          onChange={(e) =>
            setData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </div>
      <div className="mb-5 w-full">
        <label htmlFor="email" className="block mb-2 font-bold text-gray-600">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Put in your phone number."
          className="border border-gray-300 shadow p-3 w-full rounded"
          value={data?.phone}
          onChange={(e) =>
            setData((prev) => ({ ...prev, phone: e.target.value }))
          }
        />
      </div>

      <button
        disabled={loading}
        type="submit"
        className="bg-blue-700 text-white"
      >
        {loading ? "Loading..." : `${Type} User`}
      </button>
    </form>
  );
};

export default Form;
