// export async function generateStaticParams() {
//   const clubs: ClubListResponse = await getClubList();
//   return clubs.result.rows.map((club) => ({
//     slug: club._id,
//   }));
// }
export const revalidate = 3;

import Tabs from "@/components/domain/detail/tabs";

export default async function Layout({
  children,
  tabs,
  params,
}: {
  children: React.ReactNode;
  tabs: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return (
    <div className="flex flex-col gap-12">
      {children}
      <div>
        <Tabs id={id} />
        {tabs}
      </div>
    </div>
  );
}
