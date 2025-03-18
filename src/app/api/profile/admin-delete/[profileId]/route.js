import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "لطفاً وارد شوید" }, { status: 401 });
    }

    const user = await User.findOne({ email: session.user.email });
    if (user.role !== "ADMIN") {
      return NextResponse.json({ error: "شما ادمین نیستید" }, { status: 403 });
    }

    const { profileId } = params;

    const profile = await Profile.findByIdAndDelete(profileId);
    if (!profile) {
      return NextResponse.json({ error: "پروفایل پیدا نشد" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "پروفایل با موفقیت حذف شد" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "خطای سرور" }, { status: 500 });
  }
}
