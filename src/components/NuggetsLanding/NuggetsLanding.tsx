import React, { useContext, useEffect, useRef } from "react";
import { NuggetsContext } from "../../context/NuggetsContext";
import AddNuggetHeader from "../addNugget/AddNuggetHeader";
import NuggetInfo from "../NuggetInfo/NuggetInfo";
import XPTimer from "../XP&Timer/XP&Timer";

interface OptionType {
  label:
    | "Video"
    | "SCQ"
    | "MCQ"
    | "Note"
    | "FIB"
    | "IMG"
    | "AUDIOCLIP"
    | "LTI"
    | "TrueFalse"
    | "Audio";
  value: string;
}

function NuggetsLanding() {
  const { nuggetKind, setNuggetKind } = useContext(NuggetsContext);
  const nuggetsRef = useRef("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNuggetKind(event.target.value as OptionType["value"]);
  };

  useEffect(() => {
    setNuggetKind(nuggetKind);
    //console.log(nuggetKind);
  }, [nuggetKind]);

  const options: OptionType[] = [
    { value: "Video", label: "Video" },
    { value: "SCQ", label: "SCQ" },
    { value: "MCQ", label: "MCQ" },
    { value: "Note", label: "Note" },
    { value: "FIB", label: "FIB" },
    { value: "IMG", label: "IMG" },
    { value: "AUDIOCLIP", label: "AUDIOCLIP" },
    { value: "LTI", label: "LTI" },
    { value: "TrueFalse", label: "TrueFalse" },
    { value: "Audio", label: "Audio" },
  ];

  return (
    <div className="nugget">
      <div className="create-nugget">
        <button>Create Nugget</button>
        <div className="cards-parent">
          <AddNuggetHeader />
          <div className="card-header NuggetId">
            <h2 className="text-2xl">Nugget ID</h2>
            <div className="NuggetIdOption">
              {options.map((op) => (
                <label key={op.label} className="label-option">
                  <input
                    type="radio"
                    name="option"
                    value={op.value}
                    checked={nuggetKind === op.label}
                    onChange={handleOptionChange}
                  />
                  {op.label}
                </label>
              ))}
            </div>
          </div>
          <NuggetInfo />
          <XPTimer />
        </div>
      </div>
    </div>
  );
}

export default NuggetsLanding;