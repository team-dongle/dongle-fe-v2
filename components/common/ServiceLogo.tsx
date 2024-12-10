import React from "react";
import DongleLogo from "@/assets/icons/service-logo.svg";
import DongleFullLogo from "@/assets/icons/service-logo-full.svg";
import Link from "next/link";

interface Props {
  type: "logo" | "full";
}

const ServiceLogo = ({ type = "full" }: Props) => {
  return (
    <Link href="/">
      {type === "full" && <DongleFullLogo width={150} height={70} />}
      {type === "logo" && <DongleLogo width={50} height={50} />}
    </Link>
  );
};

export default ServiceLogo;
