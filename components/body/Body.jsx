"use client";
import Image from "next/image";
import React, { useEffect, Suspense } from "react";
import { WiHumidity } from "react-icons/wi";
import { PiWindLight } from "react-icons/pi";
import img from "@/public/images/sun.png";
import getdate from "@/utils/time";

function Body({ data }) {
  const { location, current, forecast } = data;
  const { dayOfWeek, month, dayOfMonth } = getdate(current.last_updated_epoch);
  // useEffect(() => {}, [data]);
  return (
    <div className="w-full p-4 rounded text-white bg-gradient-to-b from-sky-600 to-sky-900">
      <div className="flex gap-3 justify-center flex-col items-center">
        <h1 className="font-semibold tracking-widest uppercase">
          {location.name}
        </h1>
        <div>
          {dayOfWeek} | {month} {dayOfMonth}
        </div>
        <div className="">
          <Image
            src={img}
            alt="Picture of the author"
            width={150}
            height={150}
          />
        </div>
        <div className="font-extralight">{current.condition.text}</div>
        <div className="text-7xl font-extralight">{current.temp_c}°</div>
        <div className="font-extralight">
          Max : {forecast.forecastday[0].day.maxtemp_c}° / Min :{" "}
          {forecast.forecastday[0].day.mintemp_c}°
        </div>
        <hr className="w-full" />
        <div className="flex justify-between content-center gap-6">
          <div className="flex justify-between content-center gap-3">
            <div className="text-5xl">
              <PiWindLight />
            </div>
            <div>
              <p className="text-2xl">{current.wind_kph} Km/h</p>
              <p className="font-extralight">Wind</p>
            </div>
          </div>
          <div className="flex justify-between content-center gap-1">
            <div className="text-5xl">
              <WiHumidity />
            </div>
            <div>
              <p className="text-2xl">{current.humidity}%</p>
              <p className="font-extralight">Humatidy</p>
            </div>
          </div>
        </div>
        <hr className="w-full" />
        <Suspense fallback={<div>Loading...</div>}>
          <div className="flex justify-between content-center	">
            {forecast.forecastday.slice(1).map((item, i) => (
              <div
                key={i}
                className="flex flex-col justify-center content-center text-center gap-2 font-extralight"
              >
                <div className="">
                  <Image
                    src={`https:${item.day.condition.icon}`}
                    alt="day"
                    width={64}
                    height={64}
                  />
                </div>
                <p>
                  {(() => {
                    let { dayOfWeek } = getdate(item.date_epoch);
                    return dayOfWeek.slice(0, 3);
                  })()}
                </p>
                <p>{item.day.maxtemp_c}°</p>
                <p>{item.day.mintemp_c}°</p>
              </div>
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
}

export default Body;
