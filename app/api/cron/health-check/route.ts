import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://unisocial-user-service.onrender.com/health",
    );
    const data = await response.json();
    // console.log('Health check response:', data);

    if (data.status === "healthy") {
      return NextResponse.json({ ok: true, data });
    } else {
      console.warn("Health check returned unhealthy status:", data);
      return NextResponse.json({ ok: false, data }, { status: 502 });
    }
  } catch (error) {
    console.error("Health check failed:", error);
    return NextResponse.json(
      { ok: false, error: "Health check failed" },
      { status: 500 },
    );
  }
}
