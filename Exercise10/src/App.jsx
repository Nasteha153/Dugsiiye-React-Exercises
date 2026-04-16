import UserList from "./UserList";

function App() {
  const users = [
    { id: 1, name: "Ali", email: "ali@example.com" },
    { id: 2, name: "Amina", email: "amina@example.com" },
    { id: 3, name: "Hassan", email: "hassan@example.com" },
  ];

  return (
    <div>
      <h1>Users</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;