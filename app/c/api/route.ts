import { NextResponse } from "next/server"

export async function GET() {
    const res = await fetch('https://api.publicapis.org/entries', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    console.log("data in api", data)
   
    return  NextResponse.json({data})
  }