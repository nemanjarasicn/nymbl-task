import React from "react";
import { createCardsData, currencyFormat } from "../utils/utils";
import { useAppSelector } from "../hooks";
import { selectUser } from "../core/core.selectors";

// data
import { cards } from "../datas/constants";
import { Customer, Orders, UserAuth } from "../core/core.models";

type cardsProps = {
  orders: Orders[];
  customer: Customer[];
};

const Cards = ({ orders, customer }: cardsProps) => {
  const user = useAppSelector(selectUser);
  return (
    <div className=" justify-start w-full items-start flex-wrap xl:flex-nowrap gap-4 inline-flex">
      {cards.map(({ text, icon, iconColor }, index) => {
        const value = createCardsData(orders, customer, text, user as UserAuth);

        return (
          <div
            key={index}
            className="min-w-[220px] xl:w-full grow shrink basis-0 rounded-xl drop-shadow justify-start items-start gap-4 bg-white flex"
          >
            <div className="grow shrink basis-0 bg-white rounded-xl flex-col justify-start items-start inline-flex">
              <div className="w-full h-[164px] px-6 pt-6 pb-4 bg-white rounded-xl shadow flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch justify-start items-center gap-3 inline-flex">
                  <div className={`w-6 h-6 relative ${iconColor}`}>
                    <i className={icon}></i>
                  </div>
                  <div className="grow shrink basis-0 text-zinc-900 text-base font-medium leading-normal">
                    {text}
                  </div>
                </div>
                <div className="self-stretch h-[72px] flex-col justify-center items-start gap-1 flex">
                  <div className="text-zinc-900 text-[40px] font-semibold leading-[48px]">
                    {text === "Net sales" ? "$" : ""}
                    {value.value}
                  </div>
                  <div className="h-5 relative flex gap-2">
                    <div
                      className={`${
                        value.valuePrev > 0
                          ? "text-orange-600"
                          : "text-lime-500"
                      } flex items-center`}
                    >
                      <div className={` text-sm font-semibold leading-tight`}>
                        <i
                          className={
                            value.valuePrev > 0
                              ? "fa-solid fa-arrow-down"
                              : "fa-solid fa-arrow-up"
                          }
                        ></i>
                      </div>
                      <div className="">
                        <div className="text-sm font-semibold leading-tight">
                          {currencyFormat(value.valuePrev)}
                        </div>
                      </div>
                    </div>
                    <div className=" text-zinc-500 text-xs font-medium leading-[18px]">
                      from last month
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
