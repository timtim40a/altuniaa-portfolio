import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const secret = req.nextUrl.searchParams.get("secret");

    if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
        return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    revalidatePath("/gallery");
    revalidatePath("/works");
    revalidatePath("/blog");
    return NextResponse.json({ revalidated: true });
}
