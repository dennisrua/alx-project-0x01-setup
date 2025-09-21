import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

const Users: React.FC<{ users: UserProps[] }> = ({ users }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Users List</h1>
        <div className="grid grid-cols-3 gap-4">
          {users?.map((user: UserProps) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
    </div>
  );
};

// (const Home: React.FC = () => {
// return (
// <div className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
// <div className="text-center">
// <h1 className="text-5xl font-bold text-white">
// Welcome to our Application!
// </h1>
// <p className="mt-4 text-xl text-white">
// We&#39;re glad you&#39;re here. Explore and enjoy your experience.
// </p>
// <button className="mt-6 px-6 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition">
// Get Started
// </button>
// </div>
// </div>
// );
// };

// Fetch users from the API
export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
