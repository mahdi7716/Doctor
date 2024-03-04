import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

function CategorySearch() {
  return (
    <div className="mb-10 items-center flex flex-col gap-2">
      <h2 className="font-bold text-4xl tracking-wide">
        جستجوی <span className="text-primary"> پزشک </span>{" "}
      </h2>
      <h2 className="text-gray-500 text-xl">
        لطفا برای پیدا کردن پزشک مورد نظر برروی یکی از تخصص ها کلیک کنید{" "}
      </h2>
      <div className="flex w-full max-w-sm items-center space-x-2 ">
      <Input type="email" placeholder="جستجو ..." />
      <Button type="submit">
       <Search className="h-4 w-4 mr-2 "/>
        جستجو </Button>
    </div>
    </div>
  );
}

export default CategorySearch;
