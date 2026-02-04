import { useState } from "react";

function Account() {

    const userDetails = JSON.parse(localStorage.getItem("UserDetails"))
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b px-4 py-4">
        <h1 className="text-lg font-semibold text-gray-900">
          Account Settings
        </h1>
      </div>

      {/* Profile Section */}
      <div className="px-4 py-6 max-w-sm mx-auto">
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center border-2 border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                className="w-3 h-3"
              >
                <path d="M12 5a3 3 0 100 6 3 3 0 000-6zm-7 14a7 7 0 0114 0H5z" />
              </svg>
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="font-medium text-gray-900">{userDetails?.fullName||"Marry Doe"}</p>
            <p className="text-sm text-gray-500">{userDetails?.email||"Marry@gmail.com"}</p>
          </div>
        </div>

        {/* Bio */}
        <p className="mt-6 text-sm text-gray-600 leading-relaxed">
          Passionate frontend developer experienced in React, with a strong focus on clean UI, usability, and scalable architecture.
        </p>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-dashed mt-10" />
    </div>
  );
}

export default Account;
