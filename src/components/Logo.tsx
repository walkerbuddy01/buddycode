import Image from "next/image";

type sizeType = "sm" | "md" | "lg" | "xl";

export default function Logo({
  size,
  className,
}: {
  size: sizeType;
  className?: string;
}) {
  const dimension =
    size === "sm" ? 50 : size === "md" ? 70 : size === "lg" ? 90 : 120;
  return (
    <div>
      <Image
        src={
          "https://ik.imagekit.io/bc/Images/companyLogo.png?updatedAt=1728707389731"
        }
        alt="Logo"
        width={dimension}
        height={dimension}
        className={className}
      />
    </div>
  );
}
