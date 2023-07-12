const usersDummyArr = [
  {
    id: "1",
    name: "test name",
    email: "test@gmail.com",
    phone: "1234567890",
  },
];

const getAllUsers = (req, res) => {
  res.status(200).json({ users: usersDummyArr });
};

const getUser = (req, res) => {
  const userId = req.params.id;
  if (!userId) {
    return res.status(400).json({ message: "userId Required" });
  }

  const user = usersDummyArr.find((user) => userId === user.id);

  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }

  res.status(200).json({ user });
};

const addUser = (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ message: "Check all fields" });
  }
  usersDummyArr.push({
    id: Date.now().toString(),
    name: name,
    email: email,
    phone: phone,
  });
  res.status(201).json({ users: usersDummyArr });
};

const updateUser = (req, res) => {
  const userId = req.params.id;
  const { name, email, phone } = req.body;

  if (!userId) {
    return res.status(400).json({ message: "userId Required" });
  }

  if (!name || !email || !phone) {
    return res.status(400).json({ message: "Check all fields" });
  }

  const userIndex = usersDummyArr.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "user not found" });
  }

  usersDummyArr[userIndex].name = name;
  usersDummyArr[userIndex].email = email;
  usersDummyArr[userIndex].phone = phone;

  newArr = res.status(200).json({ users: usersDummyArr });
};
const deleteUser = (req, res) => {
  const userId = req.params.id;

  if (!userId) {
    return res.status(400).json({ message: "userId Required" });
  }
  const userIndex = usersDummyArr.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "user not found" });
  }

  usersDummyArr.splice(userIndex, 1);

  res.status(200).json({ users: usersDummyArr });
};

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
