import { User } from "../types";
import Avatar from "./common/Avatar";
import Button from "./common/Button";
import Ellipsis from "./common/Ellipsis";

type UserCardProps = {
  id: User["id"];
  firstname: User["firstname"];
  lastname: User["lastname"];
  avatar: User["avatar"];
  description: User["description"];
  role: User["role"];
  onViewMore: (userId: string) => void;
};

export default function UserCard({
  id,
  avatar,
  firstname,
  lastname,
  description,
  role,
  onViewMore,
}: UserCardProps) {
  return (
    <div className="card bg-base-100 shadow-xl items-center">
      <div className="pt-6">
        <Avatar
          src={avatar}
          altText={`${firstname} ${lastname}'s profile photo`}
        />
      </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title">
          {firstname} {lastname}
        </h2>
        <div data-theme="light" className="badge badge-primary">
          {role}
        </div>
        <Ellipsis text={description} />
        <div className="card-actions">
          <Button onClick={() => onViewMore(id)} id="view-more">
            View More
          </Button>
        </div>
      </div>
    </div>
  );
}

UserCard.displayName = "UserCard";
