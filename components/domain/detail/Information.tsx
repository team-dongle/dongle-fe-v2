import Image from "next/image";
import Link from "next/link";
import ApplyIcon from "@/assets/icons/apply-icon.svg";
import { clubInformationTitle } from "@/constants/club";

export default function Information({
  logo,
  name,
  category,
  applyUrl,
  informationList,
}: {
  logo: string | undefined;
  name: string;
  category: string;
  applyUrl: string;
  informationList: string[];
}) {
  return (
    <>
      <section className="flex w-full flex-row items-center justify-between gap-2">
        <div className="flex flex-row items-center justify-between gap-4">
          <div className="h-32 w-32 overflow-hidden rounded-full bg-zinc-200">
            {logo && <Image alt="" src={logo} width={128} height={128} />}
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-left text-3xl font-bold md:text-2xl">{name}</h1>
            <h2 className="text-left text-xl text-zinc-400">{category}</h2>
          </div>
        </div>
        <Link
          href={applyUrl}
          className="flex h-16 w-52 flex-row items-center justify-center gap-2 rounded-xl bg-primary-400 text-white"
        >
          <ApplyIcon />
          지원하기
        </Link>
      </section>
      <div className="flex flex-row gap-9 rounded-xl bg-zinc-50 p-9">
        <ul className="flex flex-col gap-4 text-xl text-zinc-400">
          {clubInformationTitle.map((title) => {
            return <li key={title}>{title}</li>;
          })}
        </ul>
        <ul className="flex flex-col gap-4 text-xl font-semibold text-zinc-600">
          {informationList.map((info) => {
            return <li key={info}>{info}</li>;
          })}
        </ul>
      </div>
    </>
  );
}