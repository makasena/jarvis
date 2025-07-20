import { type NextRequest, NextResponse } from "next/server"

const XAI_ENDPOINT = "https://api.x.ai/v1/chat/completions"
const API_KEY = process.env.XAI_API_KEY //  ✅  add this in your Vercel project settings

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json<{ message: string }>()

    if (!message?.trim()) {
      return NextResponse.json({ error: "Message cannot be empty." }, { status: 400 })
    }

    if (!API_KEY) {
      return NextResponse.json(
        { error: "XAI_API_KEY is not set.  Add it in Project → Settings → Environment Variables." },
        { status: 500 },
      )
    }

    const res = await fetch(XAI_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "grok-beta",
        messages: [
          {
            role: "system",
            content: "You are Baby Grok, a friendly, helpful AI assistant. Answer clearly and conversationally.",
          },
          { role: "user", content: message },
        ],
      }),
    })

    // ----------  Handle xAI errors  ---------- //
    if (!res.ok) {
      const { error } = (await res.json().catch(() => ({}))) as { error?: string }

      // xAI returns 401 for bad keys + the “Incorrect API key” string
      if (res.status === 401 || error?.toLowerCase().includes("incorrect api key")) {
        return NextResponse.json(
          { error: "API key invalid or expired. Generate a new key at https://console.x.ai and set XAI_API_KEY." },
          { status: 401 },
        )
      }

      // Any other error bubble up
      return NextResponse.json({ error: error ?? `xAI error (${res.status})` }, { status: res.status })
    }

    const data = await res.json()
    const aiReply = data.choices?.[0]?.message?.content ?? "No response from Grok."

    return NextResponse.json({ message: aiReply })
  } catch (e) {
    console.error("xAI route error:", e)
    return NextResponse.json({ error: "Server error. Try again later." }, { status: 500 })
  }
}
