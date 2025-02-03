// app/api/users/route.js

import dbConnect from "@/app/lib/dbConnect";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

// GET: Retrieve all users (excluding passwords)
export async function GET() {
  try {
    await dbConnect();
    const users = await User.find().select("-password"); // Exclude passwords
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

// POST: Create a new user
export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();

    // Input validation
    const { name, email, password } = body;
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    // Optionally, check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already in use" },
        { status: 400 }
      );
    }

    // Create the user (consider hashing the password here)
    const newUser = await User.create(body);

    // Remove the password field from the response.
    newUser.password = undefined;

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    // Check for duplicate key error (MongoDB error code 11000)
    if (error.code === 11000) {
      return NextResponse.json(
        { error: "Email already in use" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
