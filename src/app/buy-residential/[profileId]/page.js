import Profile from "@/models/Profile";
import DetailsPage from "@/template/DetailsPage";
import connectDB from "@/utils/connectDB";
import React from "react";

const ProfileDetails = async ({ params: { profileId } }) => {
  const res = await fetch(
    `https://real-state-gh.vercel.app/api/profile/delete/${profileId}`,
    {
      next: { revalidate: 60 },
    }
  );
  if (!res) return <h3>اگهی مورد نظر یافت نشد</h3>;
  const data = await res.json();

  return (
    <div>
      <DetailsPage data={data} link={profileId} />
    </div>
  );
};

export default ProfileDetails;

export const generateMetadata = async ({ params: profileId }) => {
  await connectDB();
  const profile = await Profile.findeOne({ _id: profileId });

  return {
    title: profile.title,
    description: profile.description,
  };
};
