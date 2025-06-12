import React from "react";

export default function CallButton() {
  const phoneNumber = "+919350370846"; // <- replace with your number

  return (
    <a href={`tel:${phoneNumber}`}>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
        Call Now
      </button>
    </a>
  );
}
