import React from "react";
import { hardhat } from "viem/chains";
import { SwitchTheme } from "~~/components/SwitchTheme";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";

/**
 * Site footer
 */
export const Footer = () => {
  const { targetNetwork } = useTargetNetwork();
  const isLocalNetwork = targetNetwork.id === hardhat.id;

  return (
    <div className="min-h-0 py-5 px-1 mb-11 lg:mb-0">
      <div>
        <div className="fixed flex justify-between items-center w-full z-10 p-4 bottom-0 left-0 pointer-events-none">
          <div className="flex flex-col md:flex-row gap-2 pointer-events-auto">
            {/* Social media links */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/poap.ademy5/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Instagram
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61574989048352"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Facebook
              </a>
              <a
                href="https://x.com/poapademy16618"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                X (Formerly Twitter)
              </a>
              <a
                href="https://www.linkedin.com/in/poapademy-company-69427a35a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <SwitchTheme className={`pointer-events-auto ${isLocalNetwork ? "self-end md:self-auto" : ""}`} />
        </div>
      </div>
      <div className="w-full">
        <ul className="menu menu-horizontal w-full">
          <div className="flex justify-center items-center gap-2 text-sm w-full"></div>
        </ul>
      </div>
    </div>
  );
};
