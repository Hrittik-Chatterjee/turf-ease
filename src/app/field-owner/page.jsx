"use client";
import { useState } from "react";
import Link from "next/link";

const FieldOwnerRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    facilityName: "",
    facilityAddress: "",
    taxId: "",
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
    if (!formData.firstName) errors.firstName = "First name is required";
    if (!formData.lastName) errors.lastName = "Last name is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      errors.email = "Invalid email address";
    if (formData.password.length < 8)
      errors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = "Passwords do not match";
    if (!/^\d{10,15}$/.test(formData.phone))
      errors.phone = "Invalid phone number";
    if (!formData.facilityName)
      errors.facilityName = "Facility name is required";
    if (!formData.taxId) errors.taxId = "Tax ID is required";
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <section className="container mx-auto px-4 py-8 md:py-12 max-w-2xl">
      <header className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Field Owner Registration
        </h1>
        <p className="text-gray-600 md:text-base">
          Register your futsal facility to start accepting bookings
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
            Phone Number *
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

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Facility Name *
            <input
              type="text"
              name="facilityName"
              value={formData.facilityName}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.facilityName ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            />
          </label>
          {errors.facilityName && (
            <p className="text-red-500 text-sm mt-1">{errors.facilityName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tax ID/Business Number *
            <input
              type="text"
              name="taxId"
              value={formData.taxId}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.taxId ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            />
          </label>
          {errors.taxId && (
            <p className="text-red-500 text-sm mt-1">{errors.taxId}</p>
          )}
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Register Facility
          </button>
        </div>

        <p className="text-center text-sm text-gray-600">
          By registering, you agree to our{" "}
          <Link href="/terms" className="text-blue-600 hover:underline">
            Terms and Conditions
          </Link>
        </p>
      </form>
    </section>
  );
};

export default FieldOwnerRegistration;
