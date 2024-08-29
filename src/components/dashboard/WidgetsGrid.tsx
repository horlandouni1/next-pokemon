"use client";
import { IoCartOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count);
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        title={count.toString()}
        subtitle="productos agregados"
        label="contador"
        icon={<IoCartOutline size={70} className="text-blue-700" />}
        href="dashborad/counter"
      />
    </div>
  );
};
