import type React from "react"

import { useState } from "react"
import logoUrl from "/minilogo.svg" // Assume the logo is in the assets folder
import { Link } from "react-router-dom"


export default function WaitlistForm() {
  const [address, setAddress] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Submitted address:", address)
  }

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 p-8 text-center rounded-2xl border-2 border-[#191919] bg-zinc-950/90 backdrop-blur-sm">
        <div className="flex flex-col items-center space-y-4">
          <img src={logoUrl || "/placeholder.svg"} alt="CoinHarbour Logo" className="w-16 h-16" />
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-medium text-white">
              Welcome to <span className="text-white">Coin</span>
              <span className="text-zinc-500">Harbour</span>
            </h1>
            <p className="text-zinc-400 text-sm">Join our exclusive waitlist with your email address or address</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter email or ETH or Citrea address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-zinc-800 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-700 transition-all"
          />
          <button
            type="submit"
            className="w-full px-4 py-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 active:bg-zinc-300 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-700"
          >
            Join Waitlist
          </button>
        </form>
        <p className="text-white">Already have an invite code? <Link className="text-blue-300" to={'/login'}>Click here</Link></p>
      </div>
    </div>
  )
}

