import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  phone,
  website,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-500">@{username}</p>
      </div>

      <div className="space-y-2 text-gray-700">
        <p>
          <span className="font-medium">Email:</span> {email}
        </p>
        <p>
          <span className="font-medium">Phone:</span> {phone}
        </p>
        <p>
          <span className="font-medium">Website:</span>{' '}
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {website}
          </a>
        </p>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <h3 className="font-semibold">🏠 Address</h3>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <h3 className="font-semibold">🏢 Company</h3>
      </div>

      <div className="mt-4 text-xs text-gray-400">User ID: {id}</div>
    </div>
  );
};

export default UserCard;
