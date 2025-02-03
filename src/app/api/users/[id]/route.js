// app/api/users/[id]/route.js

import dbConnect from "@/app/lib/dbConnect";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

// GET: Retrieve a single user by ID (excluding the password)
export async function GET(request, { params }) {
  try {
    await dbConnect();
    const { id } = params;
    const user = await User.findById(id).select("-password");
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}

// PATCH: Update an existing user by ID
export async function PATCH(request, { params }) {
  try {
    await dbConnect();
    const { id } = params;
    const body = await request.json();

    // Update the user document and return the updated document.
    const updatedUser = await User.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    }).select("-password");

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}

// DELETE: Remove a user by ID
export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    const { id } = params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
