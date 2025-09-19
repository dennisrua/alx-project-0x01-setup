import { UserProps } from '@/interfaces';

interface UserProps {
  id: string | number;
  name: string;
  email: string;
  phone: string;
  website: string;
}
const UserCard: React.FC<UserProps> = ({ id, name, email, phone, website }) => {
  return (
    <div className="max-w-sm mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-500 text-sm">User ID: {id}</p>
      </div>
      <p className="text-gray-600 mb-2">📧 {email}</p>
      <p className="text-gray-600 mb-2">📞 {phone}</p>
      <p className="text-blue-600 hover:underline cursor-pointer">
        🌐 {website}
      </p>
    </div>
  );
};

export default UserCard;
