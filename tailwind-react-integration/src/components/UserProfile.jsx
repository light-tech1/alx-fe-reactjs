import React from "react";

const UserProfile = () => {
  return (
    <div
      className="
        bg-gray-100           
        p-4 sm:p-4 md:p-8
        max-w-xs sm:max-w-xs md:max-w-sm
        mx-auto
        my-20                 
        rounded-lg          
        shadow-lg
        text-center
        transition-shadow duration-300 ease-in-out
        hover:shadow-xl
      "
    >
      {/* Profile Image */}
      <img
        src="/profile.jpg"
        alt="Profile"
        className="
          rounded-full mx-auto mb-4
          sm:w-24 sm:h-24      
          md:w-36 md:h-36
          object-cover
          transition-transform duration-300 ease-in-out
          hover:scale-110
        "
      />

      {/* Name Heading */}
      <h2
        className="
          font-bold
          text-lg sm:text-lg md:text-xl
          text-blue-800
          my-4 
          text-center
          transition-colors duration-300 ease-in-out
          hover:text-blue-500
        "
      >
        John Doe
      </h2>

      {/* Bio */}
      <p
        className="
          text-gray-600
          text-sm sm:text-sm md:text-base
          mt-2
        "
      >
        Developer at Example Co. Loves to write code and explore new technologies.      
      </p>
    </div>
  );
};

export default UserProfile;
