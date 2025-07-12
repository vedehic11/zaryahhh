import { useState } from 'react'

export default function ChatSupportButton() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed z-50 bottom-6 right-6 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg p-4 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
        aria-label="Chat Support"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <span className="hidden md:inline font-semibold">Chat</span>
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-end">
          <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl m-6 p-4 w-full max-w-xs md:max-w-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-primary-700">Support Chat</span>
              <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-700">✕</button>
            </div>
            <div className="text-sm text-gray-600 mb-4">Hi! How can we help you today?</div>
            <input className="w-full border rounded-lg px-3 py-2 text-sm mb-2" placeholder="Type your message..." disabled />
            <button className="w-full bg-primary-600 text-white rounded-lg py-2 font-semibold" disabled>Send</button>
            <div className="text-xs text-gray-400 mt-2">(Demo chat only)</div>
          </div>
        </div>
      )}
    </>
  )
} 