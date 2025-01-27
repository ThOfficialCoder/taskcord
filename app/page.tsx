'use client';

import Button from "./ui/buttons";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <>
        <div className="bg-[#E3F2FD] p-6 text-[#343A40] font-mono">
          <header>Taskcord</header>
          <p>Your Intelligent Task & Time Management Assistant</p>
          <Button />
        </div>

      
      <div>
        <footer className="bg-[#343A40] text-[#F8F9FA]  p-6 text-center font-size-14 absolute bottom-0 right-0 left-0 font-mono">
          <p>&copy; 2025 TaskCord. All rights reserved. | <a href="#" className="text-[#007BFF] hover:text-[#0056b3]">Privacy Policy</a> | <a href="#" className="text-[#007BFF] hover:text-[#0056b3]">Terms of Service</a></p>
        </footer>
      </div>
    </>
  );
}
