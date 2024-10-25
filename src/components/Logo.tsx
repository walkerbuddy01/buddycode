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
    <div className="mr-2">
      <Image
        src={
          "https://ik.imagekit.io/bc/Images/company_logo.png?updatedAt=1729839670836"
        }
        alt="Logo"
        width={dimension}
        height={dimension}
        className={className}
        layout="intrinsic"
      />
    </div>
  );
}
