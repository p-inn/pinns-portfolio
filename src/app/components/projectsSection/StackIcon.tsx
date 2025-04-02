import Image from "next/image";

type Props = { stack: string };
export default function StackIcons({ stack }: Props) {
  return (
    <Image
      key={stack}
      className="rounded-sm mx-1"
      src={`/icons/${stack}.svg`}
      alt={stack}
      priority
      quality={100}
      width={25}
      height={25}
      style={{ width: 30, height: 30 }}
    />
  );
}