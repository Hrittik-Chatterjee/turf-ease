"use client";

import { useState } from "react";
import Link from "next/link";

const CustomerSignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form data:", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      errors.email = "Invalid email address";
    if (formData.password.length < 8)
      errors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = "Passwords do not match";
    if (formData.phone && !/^\d{10,15}$/.test(formData.phone))
      errors.phone = "Invalid phone number";
    if (!formData.acceptTerms) errors.acceptTerms = "You must accept the terms";
    return errors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <section className="container mx-auto px-4 py-8 md:py-12 max-w-2xl">
      <header className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Create Customer Account
        </h1>
        <p className="text-gray-600 md:text-base">
          Sign up to book futsal courts and manage your reservations
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name *
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-2 border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
              />
            </label>
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name *
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-2 border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
              />
            </label>
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email *
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            />
          </label>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password *
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
              />
            </label>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password *
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-2 border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
              />
            </label>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number (Optional)
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
              placeholder="1234567890"
            />
          </label>
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <div className="mt-4">
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              className={`mt-1 h-4 w-4 text-blue-600 border ${
                errors.acceptTerms ? "border-red-500" : "border-gray-300"
              } rounded focus:ring-blue-500`}
            />
            <span className="text-sm text-gray-700">
              I agree to the{" "}
              <Link href="/terms" className="text-blue-600 hover:underline">
                Terms and Conditions
              </Link>
            </span>
          </label>
          {errors.acceptTerms && (
            <p className="text-red-500 text-sm mt-1">{errors.acceptTerms}</p>
          )}
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Create Account
          </button>
        </div>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Log in here
          </Link>
        </p>
      </form>
    </section>
  );
};

export default CustomerSignUp;
