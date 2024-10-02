import Image from "next/image";

import WobaLogo from "@/assets/woba-logo.svg"

function Header() {
  return (
    <div className="flex items-center justify-between p-5">
        <Image src={WobaLogo} alt="logo" />
    </div>
  );
}

export { Header }