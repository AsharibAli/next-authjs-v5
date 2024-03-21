import { ExtendedUser } from "@/next-auth";
import { Card, CardHeader } from "./ui/card";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

export const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card>
      <CardHeader>
        <p className="text-2xl font-semibold font-bold">{label}</p>
      </CardHeader>
    </Card>
  );
};
