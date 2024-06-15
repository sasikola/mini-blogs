import { FaUserEdit, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";

const Profile = () => {
  const [avatar, setAvatar] = useState(null);
  const [isCheckVisible, setIsCheckVisible] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const fileInputRef = useRef(null);

  const handleAvatarChange = (file) => {
    setAvatar(URL.createObjectURL(file));
    setIsCheckVisible(true);
    console.log(file);
  };

  const handleIconClick = () => {
    if (isCheckVisible) {
      // Perform the action when FaCheck is clicked
      setIsCheckVisible(false);
    } else {
      // Trigger the file input click when FaUserEdit is clicked
      fileInputRef.current.click();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ fullname, email, password });
  };
  const handleFullNameChange = (e) => {
    setFullname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <section className="container mx-auto max-w-md mt-8 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="container mx-auto grid place-items-center  py-8">
        <Link
          to={`/myposts/sdfsd`}
          className="btn bg-blue-500 text-white py-2 px-4 rounded mb-4"
        >
          My Posts
        </Link>
        <div className="profile-details w-full">
          <div className="avatar-wrapper relative w-60 aspect-w-1 aspect-h-1 mx-auto mt-4">
            <div className="profile-avatar h-full rounded-full border-4 border-yellow-300 overflow-hidden relative">
              <img
                src={
                  avatar ||
                  "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                }
                alt="Profile Avatar"
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  accept="image/png, image/jpeg"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={(e) => handleAvatarChange(e.target.files[0])}
                />
                <button
                  className={`text-white text-2xl p-2 rounded-full cursor-pointer flex items-center justify-center ${
                    isCheckVisible ? "bg-green-500" : "bg-gray-500"
                  }`}
                  onClick={handleIconClick}
                >
                  {isCheckVisible ? <FaCheck /> : <FaUserEdit />}
                </button>
              </div>
            </div>
          </div>
          <h1 className="text-2xl font-bold mt-4 text-center">Sasi Kiran</h1>
          <form
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="fullname"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={fullname}
                onChange={handleFullNameChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="********"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Update Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
