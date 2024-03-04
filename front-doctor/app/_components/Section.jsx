import { Button } from "@/components/ui/button";
import React from "react";

function Section() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src="/Pic/Doctor1.jpg"
              width={800}
              height={800}
              className="absolute rounded-3xl inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl  font-bold sm:text-4xl">
              قرار ملاقات با
             
                <span className="text-primary"> پزشک </span>
              مورد علاقه خود را پیدا و
              <span className="text-primary"> رزرو </span>
               کنید
            </h2>

            <p className="mt-4 text-gray-600">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد.
            </p>

            <Button className="mt-10">کاوش کنید </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
