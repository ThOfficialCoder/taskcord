'use client';

import Button from "./ui/buttons";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <>
        <div className="bg-[#E3F2FD] p-6 text-[#343A40] font-mono">
          <header>Taskcord</header>
          <p>Your Intelligent Task & Time Management Assistant</p>
          <Button />
        </div>

        <div className="px-40 py-20 text-center">
          <div className="text-[40px] font-bold text-[#007BFF] bg-[#E3F2FD] p-10 inline-block">TaskCord: Your Intelligent Task & Time Management Assistant</div>
          <div className="text-[28px] font-semibold text-[#343A40] m-10">Streamline your tasks and optimize your schedule with TaskCord</div>

          <div className="m-30">
            <div className="m-15">
              <h2 className="text-[24px] font-bold text-[#343A40]">Smart Task Scheduler</h2>
              <p className="text-[18px] text-[#6C757D] m-5">Automatically prioritize and schedule tasks based on your habits and preferences.</p>
            </div>
            <div className="feature">
              <h2 className="text-[24px] font-bold text-[#343A40]">Automated Reminders</h2>
              <p className="text-[18px] text-[#6C757D] m-5">Stay on track with timely notifications for your tasks and deadlines.</p>
            </div>
            <div className="feature">
              <h2 className="text-[24px] font-bold text-[#343A40]">Task Batching</h2>
              <p className="text-[18px] text-[#6C757D] m-5">Group similar tasks together to minimize context switching and improve productivity.</p>
            </div>
        </div>

        <a href="#" className="bg-[#007BFF] text-[#FFFFFF] px-15 py-30 border-none cursor-pointer text-[16px] m-20 decoration-none inline-block">Get Early Access</a>
      </div>

      
        <div>
          <footer className="bg-[#343A40] text-[#F8F9FA] px-20 py-0 text-center font-size-14 font-mono">
            <p>&copy; 2025 TaskCord. All rights reserved. | <a href="#" className="text-[#007BFF] hover:text-[#0056b3]">Privacy Policy</a> | <a href="#" className="text-[#007BFF] hover:text-[#0056b3]">Terms of Service</a></p>
          </footer>
        </div>
    </>
  );
}
