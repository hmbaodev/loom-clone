import Header from "@/components/header";
import React from "react";

const Profile = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;

  return (
    <div className="wrapper page">
      <Header
        subHeader="webdesing.minhbao@gmail.com"
        title="Hua Minh Bao"
        userImg="/assets/images/dummy.jpg"
      />
    </div>
  );
};

export default Profile;
