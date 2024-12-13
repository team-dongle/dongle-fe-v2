"use client";

import { ClubType } from "@/types/club";
import React, { useEffect, useState } from "react";
import SearchIcon from "@/assets/icons/search-icon.svg";
import ClubCard from "./club/ClubCard";
import { useFilter } from "@/hooks/useFilter";
import Filter from "@/components/domain/main/filter/Filter";

interface Props {
  count: number;
  clubs: ClubType[];
}
const ClubList = ({ count, clubs }: Props) => {
  const { filterOptions, setCategory, setIsRecruiting } = useFilter();
  const [inputValue, setInputValue] = useState("");
  const [filteredClubList, setFilteredClubList] = useState(clubs);

  useEffect(() => {
    const updatedList = clubs.filter(
      (e) =>
        ((filterOptions.category?.length == 0 ||
          filterOptions.category?.includes(e.category.name)) &&
          //카테고리가 null 일 때 전체 출력
          (filterOptions.isRecruiting == null ||
            filterOptions.isRecruiting == e.isRecruiting) &&
          //모집 여부가 null 일 때 전체 출력
          e.name.toLowerCase().includes(inputValue.toLowerCase())) ||
        inputValue.toLowerCase().includes(e.category.name.toLowerCase()),
      //이름은 한 글자라도 일치하면 출력, 분과는 완전 일치 시 출력
    );
    setFilteredClubList(updatedList);
  }, [filterOptions.category, filterOptions.isRecruiting, inputValue]);

  return (
    <div className="flex h-auto w-full flex-col gap-12 pb-32">
      <section className="flex flex-row items-center justify-between">
        <span className="text-zinc-400">{`총 ${count}개의 동아리가 있습니다.`}</span>
        <div className="flex flex-row gap-4">
          <div className="flex w-96 flex-row rounded-xl border border-zinc-300 px-4 py-3">
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputValue(e.target.value)
              }
              type="search"
              spellCheck="false"
              autoComplete="off"
              placeholder="검색어를 입력하세요."
              className="w-full appearance-none outline-none"
            />
            <SearchIcon />
          </div>
          <Filter
            filterOptions={filterOptions}
            setCategory={setCategory}
            setIsRecruiting={setIsRecruiting}
          />
        </div>
      </section>
      <ul className="grid grid-cols-3">
        {filteredClubList.map((club) => {
          return (
            <ClubCard
              key={club._id}
              name={club.name}
              category={club.category.name}
              isRecruiting={club.isRecruiting}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ClubList;
