import Profile from "@/models/Profile";
import DetailsPage from "@/template/DetailsPage";
import connectDB from "@/utils/connectDB";
import React from "react";

const ProfileDetails = async ({ params: { profileId } }) => {
  const res = await fetch(
    `http://localhost:3000/api/profile/delete/${profileId}`,
    {
      next: { revalidate: 60 },
    }
  );
  if (!res) return <h3>اگهی مورد نظر یافت نشد</h3>;
  const data = await res.json();

  return (
    <div>
      <DetailsPage data={data} />
    </div>
  );
};

export default ProfileDetails;
