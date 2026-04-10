import { useState } from "react";
import aiIcon from "./assets/AI.png";
import Production from "./Production";

export default function App() {
  const [page, setPage] = useState("Dashboard");
  const [selectedDay, setSelectedDay] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <div className="w-60 min-w-[240px] bg-slate-900 text-white p-5">	
        <h2 className="text-xl font-bold">ManufactureOS</h2>

        <div className="mt-6 font-semibold space-y-2">
          {["Dashboard","Production","Finance","Employees","Vendors","History","Alerts","Inventory"].map((item) => (
            <p
              key={item}
              onClick={() => setPage(item)}
              className={`p-2 rounded cursor-pointer ${
                page === item ? "bg-green-500" : "hover:bg-slate-700"
              }`}
            >
              {item}
            </p>
          ))}
        </div>
      </div>

<div className="fixed bottom-6 right-6 z-50">
<button
  onClick={() => alert("AI Clicked")}
  className="bg-white p-3 rounded-full shadow-lg border hover:scale-150 transition"
>
<img src={aiIcon} alt="AI" className="w-10 h-10"/>
  </button>

</div>


      {/* MAIN */}
      <div className="flex-1 p-6">

<div className="flex justify-end items-center gap-4 mb-4">

  {/* BELL */}
  <div className="relative">
    <button
      onClick={() => setShowNotifications(!showNotifications)}
      className="bg-white p-2 rounded-full shadow-sm hover:bg-gray-100"
    >
      🔔
    </button>

    {/* PANEL */}
    {showNotifications && (
      <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-xl p-4 z-50">
        <h3 className="font-semibold mb-2">Notifications</h3>

        <div className="text-sm space-y-2">
          <p>⚠️ ORD-2402 delayed</p>
          <p>💰 Payment pending: Fashion Hub</p>
          <p>📦 Low stock: Thread</p>
        </div>
      </div>
    )}
  </div>

  {/* AUTH BUTTON */}
  <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm">
    Sign Out
  </button>

</div>


        {page === "Dashboard" && (
          <div>
            <h1 className="text-2xl font-bold">Operations Dashboard</h1>

            <div className="mt-6 grid grid-cols-4 gap-6">

              <div className="bg-white p-5 rounded-xl shadow-sm">
                <p className="text-gray-500 text-sm">Total Orders</p>
                <h2 className="text-2xl font-bold mt-1">248</h2>
                <p className="text-green-500 text-sm mt-1">↑ 12%</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm">
                <p className="text-gray-500 text-sm">Revenue</p>
                <h2 className="text-2xl font-bold mt-1">₹4.82L</h2>
                <p className="text-green-500 text-sm mt-1">↑ 8%</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm">
                <p className="text-gray-500 text-sm">Delayed Orders</p>
                <h2 className="text-2xl font-bold mt-1">12</h2>
                <p className="text-green-500 text-sm mt-1">↓ 3%</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm">
                <p className="text-gray-500 text-sm">Pending Payments</p>
                <h2 className="text-2xl font-bold mt-1">₹45K</h2>
                <p className="text-red-500 text-sm mt-1">↑ 2%</p>
              </div>

            </div>

            {/* ROW */}
            <div className="grid grid-cols-2 gap-6 mt-8">

              {/* PRODUCTION */}
<div className="bg-white p-6 rounded-xl shadow-sm">
  <h2 className="mb-4 font-semibold">Production Lineup</h2>

  {/* ORDER 1 */}
  <div className="border p-4 rounded-lg mb-4">
    <p className="font-semibold mb-2">ORD-2401 • Fashion Hub</p>

    <div className="flex flex-wrap items-center gap-2 text-sm">
      <span className="bg-green-200 font-semibold px-3 py-1 rounded">Cutting</span>
      <span>→</span>
      <span className="bg-green-200 font-semibold px-3 py-1 rounded">Stitching</span>
      <span>→</span>
      <span className="bg-blue-500 text-white font-semibold px-3 py-1 rounded">Finishing</span>
      <span>→</span>
      <span className="bg-gray-200 font-semibold px-3 py-1 rounded">QC</span>
      <span>→</span>
      <span className="bg-gray-200 font-semibold px-3 py-1 rounded">Dispatch</span>
    </div>
  </div>

  {/* ORDER 2 */}
  <div className="border p-4 rounded-lg mb-4">
    <p className="font-semibold mb-2">ORD-2402 • StyleCraft</p>

    <div className="flex flex-wrap items-center gap-2 text-sm">
      <span className="bg-green-200 font-semibold px-3 py-1 rounded">Cutting</span>
      <span>→</span>
      <span className="bg-blue-500 text-white font-semibold border-4 border-red-500 px-3 py-1 rounded flex items-center gap-1">
  Stitching ⚠️</span>
      <span>→</span>
      <span className="bg-gray-200 font-semibold px-3 py-1 rounded">Finishing</span>
      <span>→</span>
      <span className="bg-gray-200 font-semibold px-3 py-1 rounded">QC</span>
      <span>→</span>
      <span className="bg-gray-200 font-semibold px-3 py-1 rounded">Dispatch</span>
    </div>
  </div>

  {/* ORDER 3 */}
  <div className="border p-4 rounded-lg">
    <p className="font-semibold mb-2">ORD-2403 • Urban Threads</p>

    <div className="flex flex-wrap items-center gap-2 text-sm">
      <span className="bg-green-200 font-semibold px-3 py-1 rounded">Cutting</span>
      <span>→</span>
      <span className="bg-green-200 font-semibold px-3 py-1 rounded">Stitching</span>
      <span>→</span>
      <span className="bg-green-200 font-semibold px-3 py-1 rounded">Finishing</span>
      <span>→</span>
      <span className="bg-blue-500 text-white font-semibold px-3 py-1 rounded">QC</span>
      <span>→</span>
      <span className="bg-gray-200 font-semibold px-3 py-1 rounded">Dispatch</span>
    </div>
  </div>

</div>

              {/* CHART */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="mb-4 font-semibold">Revenue</h2>

                <div className="h-40 bg-gray-200 flex items-center justify-center">
                  Chart
                </div>
              </div>

            </div>


        

<div className="grid grid-cols-3 gap-6 mt-8">

  {/* CLIENT PAYMENTS */}
<div className="bg-white p-6 rounded-xl shadow-sm">
  <h2 className="text-lg font-semibold mb-4">Pending Client Payments</h2>

  <div className="divide-y">

    <div className="flex justify-between py-3">
      <div>
        <p className="font-medium">Fashion Hub Inc</p>
        <p className="text-xs text-gray-400">Due: Apr 5, 2026</p>
      </div>
      <p className="font-medium">₹18,500</p>
    </div>

    <div className="flex justify-between py-3">
      <div>
        <p className="font-medium">Urban Threads</p>
        <p className="text-xs text-gray-400">Due: Apr 8, 2026</p>
      </div>
      <p className="font-medium">₹12,300</p>
    </div>

    <div className="flex justify-between py-3">
      <div>
        <p className="font-medium">StyleCraft Ltd</p>
        <p className="text-xs text-gray-400">Due: Apr 10, 2026</p>
      </div>
      <p className="font-medium">₹8,900</p>
    </div>

    <div className="flex justify-between py-3">
      <div>
        <p className="font-medium">Textile Masters</p>
        <p className="text-xs text-gray-400">Due: Apr 12, 2026</p>
      </div>
      <p className="font-medium">₹5,300</p>
    </div>

  </div>
</div>
  {/* VENDOR PAYMENTS */}
  <div className="bg-white p-6 rounded-xl shadow-sm">
  <h2 className="text-lg font-semibold mb-4">Vendor Payment Reminder</h2>

  <div className="divide-y">

    <div className="flex justify-between py-3">
      <div>
        <p className="font-medium">Fabric Suppliers Co</p>
        <p className="text-xs text-gray-400">Due: Apr 3, 2026</p>
      </div>
      <p className="font-medium text-red-500">₹8,200</p>
    </div>

    <div className="flex justify-between py-3">
      <div>
        <p className="font-medium">Thread Masters</p>
        <p className="text-xs text-gray-400">Due: Apr 6, 2026</p>
      </div>
      <p className="font-medium text-red-500">₹3,500</p>
    </div>

    <div className="flex justify-between py-3">
      <div>
        <p className="font-medium">Dye Solutions</p>
        <p className="text-xs text-gray-400">Due: Apr 7, 2026</p>
      </div>
      <p className="font-medium text-red-500">₹2,800</p>
    </div>

  </div>
</div>

  {/* ATTENDANCE */}
 <div className="bg-white p-6 rounded-xl shadow-sm">
  <h2 className="text-lg font-semibold mb-4">Attendance Calendar</h2>

  <div className="text-center text-sm mb-3">April 2026</div>

  {/* DAYS HEADER */}
  <div className="grid grid-cols-7 text-xs text-gray-400 mb-2">
    {["S","M","T","W","T","F","S"].map((d) => (
      <div key={d} className="text-center">{d}</div>
    ))}
  </div>

  {/* CALENDAR GRID */}
  <div className="grid grid-cols-7 gap-2 text-sm">

    {[...Array(30)].map((_, i) => {
      const day = i + 1;
      const isSelected = selectedDay === day;

      return (
        <div
          key={day}
          onClick={() => {
            setSelectedDay(day);
            console.log("Selected day:", day);
          }}
          className={`h-10 flex items-center justify-center rounded cursor-pointer
            ${isSelected ? "bg-blue-500 text-white" : "bg-green-100 hover:bg-green-200"}
          `}
        >
          {day}
        </div>
      );
       })}

  </div>
  </div>

</div>

<div className="grid grid-cols-2 gap-6 mt-8">

  {/* INVENTORY */}
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h2 className="text-lg font-semibold mb-4">Inventory Overview</h2>

    <div className="space-y-4">

      {/* ITEM */}
      <div className="border rounded-lg p-4">
        <div className="flex justify-between">
          <p className="font-medium">Fabric</p>
          <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">normal</span>
        </div>
        <p className="text-sm text-gray-500 mt-1">450 meters</p>
      </div>

      <div className="border rounded-lg p-4">
        <div className="flex justify-between">
          <p className="font-medium">Thread</p>
          <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded">low</span>
        </div>
        <p className="text-sm text-gray-500 mt-1">180 spools</p>

        <div className="mt-3 text-xs bg-orange-100 text-orange-600 p-2 rounded">
          AI: Low stock predicted next 7 days
        </div>
      </div>

      <div className="border rounded-lg p-4">
        <div className="flex justify-between">
          <p className="font-medium">Dye</p>
          <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">normal</span>
        </div>
        <p className="text-sm text-gray-500 mt-1">85 liters</p>
      </div>

      <div className="border rounded-lg p-4">
        <div className="flex justify-between">
          <p className="font-medium">Buttons</p>
          <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">normal</span>
        </div>
        <p className="text-sm text-gray-500 mt-1">5000 pieces</p>
      </div>

    </div>
  </div>

  {/* RECENT ACTIVITY */}
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>

    <div className="space-y-4 text-sm">

      <div>
        <p className="text-blue-500">• Order ORD-2408 moved to QC</p>
        <p className="text-gray-400 text-xs">10 min ago</p>
      </div>

      <div>
        <p className="text-green-500">• Payment received from Fashion Hub Inc - ₹18,500</p>
        <p className="text-gray-400 text-xs">25 min ago</p>
      </div>

      <div>
        <p className="text-blue-500">• Order ORD-2407 dispatched</p>
        <p className="text-gray-400 text-xs">1 hour ago</p>
      </div>

      <div>
        <p className="text-blue-500">• New order ORD-2409 created</p>
        <p className="text-gray-400 text-xs">2 hours ago</p>
      </div>

      <div>
        <p className="text-green-500">• Vendor payment completed - ₹8,200</p>
        <p className="text-gray-400 text-xs">3 hours ago</p>
      </div>

    </div>
  </div>


</div>
</div>
)}
{page === "Production" && <Production />}	
      </div>


    </div>
  );
}

