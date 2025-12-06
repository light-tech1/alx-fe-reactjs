import React from "react";

const UserProfile = () => {
  return (
    <div
      className="
        bg-white shadow-lg rounded-2xl 
        mx-auto 
        p-4 sm:p-4 md:p-8 
        max-w-xs sm:max-w-xs md:max-w-sm
        text-center
      "
    >
      {/* Profile Image */}
      <img
        src="/profile.jpg"
        alt="Profile"
        className="
          rounded-full mx-auto mb-4 
          w-24 h-24 md:w-36 md:h-36
          object-cover
        "
      />

      {/* Name Heading */}
      <h2
        className="
          font-bold 
          text-lg sm:text-lg md:text-xl
          text-gray-800
        "
      >
        John Doe
      </h2>

      {/* Paragraph / Bio */}
      <p
        className="
          text-gray-600 
          text-sm sm:text-sm md:text-base
          mt-2
        "
      >
       Developer at Example Co. Loves to write code and explore new technologies.      </p>
    </div>
  );
};

export default UserProfile;
