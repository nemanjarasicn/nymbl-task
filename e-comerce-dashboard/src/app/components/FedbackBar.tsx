import React from "react";
import { createFeedbackData } from "../utils/utils";
import { useAppSelector } from "../hooks";
import { selectUser } from "../core/core.selectors";
import { CustomerFeedback, UserAuth } from "../core/core.models";

// data
import { feedbackData } from "../datas/constants";

const FeedbackBar = ({
  customerFeedback,
}: {
  customerFeedback: CustomerFeedback[];
}) => {
  const user = useAppSelector(selectUser);
  return (
    <div className="justify-start w-full items-start flex-wrap xl:flex-nowrap gap-4 inline-flex">
      {feedbackData.map(
        ({ name, text, icon, iconColor, borderColor }, index) => {
          const feedBackDataValue = createFeedbackData(
            customerFeedback,
            name,
            user as UserAuth
          );
          return (
            <div
              key={index}
              className="min-w-[220px] xl:w-full grow shrink basis-0 rounded-xl drop-shadow justify-start items-start gap-4 flex"
            >
              <div className="grow shrink basis-0 bg-white rounded-xl flex-col justify-start items-start inline-flex">
                <div
                  className={`w-full h-[120px] px-6 pt-6 pb-4 bg-white shadow flex-col  items-center gap-6 border-b-4 ${borderColor} flex`}
                >
                  <div className="flex gap-10 ">
                    <div className={`w-6 h-6 flex items-center ${iconColor}`}>
                      <i className={icon} style={{ fontSize: "48px" }}></i>
                    </div>
                    <div className=" text-zinc-900  text-xl font-bold items-center ">
                      {feedBackDataValue} %
                    </div>
                  </div>
                  <div className="flex gap-3 justify-center mt-2">
                    <div className="grow shrink basis-0 text-zinc-900 text-base font-medium leading-normal">
                      {text}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default FeedbackBar;
