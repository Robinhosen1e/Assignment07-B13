"use client";

import { useContext } from "react";
// import { TimeLineContext } from "../../context/TimelineContext";
import { Phone, MessageCircle, Video } from "lucide-react";
import { toast } from "react-toastify";
import { TimeLineContext } from "@/context/TimelineContext";

const SendDataTimeline = ({ friendName }) => {
  const { addTimeline } = useContext(TimeLineContext);

  const handleCheckIn = (type, label) => {
    addTimeline(`${label} with ${friendName}`, type);

    toast.success(`${label} with ${friendName}`, {
      position: "top-center",
      autoClose: 2000,
    });
  };

  const data = [
    {
      id: 1,
      name: "Call",
      type: "call",
      icon: <Phone size={25} className="text-gray-700" />,
    },
    {
      id: 2,
      name: "Text",
      type: "text",
      icon: <MessageCircle size={25} className="text-gray-700" />,
    },
    {
      id: 3,
      name: "Video",
      type: "video",
      icon: <Video size={25} className="text-gray-700" />,
    },
  ];

  return (
    <div className="mt-5">

      <div className="grid grid-cols-3 gap-4">
        {data.map((card) => (
          <button
            key={card.id}
            onClick={() => handleCheckIn(card.type, card.name)}
            className="flex flex-col items-center justify-center gap-1 py-4 border border-gray-200 rounded-xl hover:bg-gray-50 hover:shadow-md "
          >
            {card.icon}
            <span className="text-lg text-gray-600">{card.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SendDataTimeline;