import { useState } from 'react'
import { useLocation } from '../contexts/LocationContext'

export default function LocationDetectButton() {
  const { userCity, requestLocation, isLocationLoading, locationError } = useLocation()
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed z-50 bottom-6 left-6 bg-primary-100 hover:bg-primary-200 text-primary-700 rounded-full shadow-lg p-4 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
        aria-label="Detect Location"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><path d="M12 2v2m0 16v2m10-10h-2M4 12H2"/></svg>
        <span className="hidden md:inline font-semibold">Location</span>
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-start">
          <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl m-6 p-4 w-full max-w-xs md:max-w-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-primary-700">Your Location</span>
              <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-700">✕</button>
            </div>
            {isLocationLoading ? (
              <div className="text-sm text-gray-600 mb-2">Detecting location...</div>
            ) : userCity ? (
              <div className="text-sm text-primary-700 mb-2">Detected city: <b>{userCity}</b></div>
            ) : (
              <div className="text-sm text-gray-600 mb-2">Location not detected.</div>
            )}
            {locationError && <div className="text-xs text-red-500 mb-2">{locationError}</div>}
            <button
              className="w-full bg-primary-600 text-white rounded-lg py-2 font-semibold mt-2"
              onClick={requestLocation}
              disabled={isLocationLoading}
            >
              {isLocationLoading ? 'Detecting...' : 'Detect Location'}
            </button>
          </div>
        </div>
      )}
    </>
  )
} 