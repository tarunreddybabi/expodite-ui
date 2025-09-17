import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left side */}
          <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#312e81] text-white p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),transparent_70%)]" />

            <div className="relative flex items-center gap-3">
              <Image
                src="/expodite.png"
                alt="Expodite Logo"
                width={42}
                height={42}
                className="drop-shadow-md"
              />
              <h1 className="text-2xl font-bold tracking-wide">Expodite</h1>
            </div>

            <div className="relative flex flex-col text-center items-center px-4">
              <h2 className="text-3xl font-extrabold leading-snug">
                Streamline Your Exports.  
                <span className="block text-blue-200">Accelerate Your Growth.</span>
              </h2>
              <p className="mt-4 text-base text-blue-100 max-w-md">
                Expodite brings everything you need to manage, track, and optimize
                your export process into one seamless platform. Built for modern
                businesses that move fast.
              </p>

              <div className="mt-6 grid gap-3 text-left max-w-sm">
                {[
                  "Manage shipments effortlessly",
                  "Real-time tracking & insights",
                  "Secure and scalable platform",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-300" />
                    <span className="text-sm text-blue-100">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="relative text-xs text-blue-200 text-center">
              © {new Date().getFullYear()} Expodite. All rights reserved.
            </p>
          </div>

          {/* <div className="flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-900"> */}
            {/* <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8"> */}
              {children}
            {/* </div>
          </div> */}
        </div>
      </body>
    </html>
  );
};

export default AuthLayout;
