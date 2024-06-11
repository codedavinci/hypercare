import { User } from "../types";
import { Avatar } from "./common";

type UserDetailsProps = {
  user: User;
};

const UserDetails = ({ user }: UserDetailsProps) => {
  const {
    avatar,
    description,
    email,
    firstname,
    join_date,
    role,
    lastname,
    username,
  } = user;

  return (
    <div className="bg-base-100">
      <figure className="flex flex-col justify-center ml-6 p-2">
        <Avatar
          src={avatar}
          altText={`${firstname} ${lastname}' profile photo.`}
        />
        <b className="mt-4 badge badge-primary bold">@{username}</b>
      </figure>
      <div className="card-body">
        <div className="flex items-center">
          <h2 className="card-title text-2xl font-bold">
            {firstname} {lastname}
          </h2>
          <div className="ml-3 badge badge-secondary">{role}</div>
        </div>

        <p className="text-gray-700 mb-4">{description}</p>
        <div className="card-actions justify-end">
          <p className="text-gray-500">
            Starting Date: {new Date(join_date).toLocaleDateString()}
          </p>
          <p className="text-gray-500">Email: {email}</p>
        </div>
      </div>
    </div>
  );
};

UserDetails.displayName = "UserDetails";

export default UserDetails;
