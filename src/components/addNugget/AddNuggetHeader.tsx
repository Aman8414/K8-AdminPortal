import { useState, useContext, useEffect } from "react";
import Select from "react-select";
import { NuggetsContext } from "../../context/NuggetsContext";
interface OptionType {
  value: string;
  label: string;
}
export default function AddNuggetHeader() {
  const { updateCategoryObject } = useContext(NuggetsContext);
  const Subject: OptionType[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const Category: OptionType[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const Topic: OptionType[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const Chapter: OptionType[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const [categoryValue, setcategoryValue] = useState<OptionType>(Category[0]);
  const [ChapterValue, setChapterValue] = useState<OptionType>(Chapter[0]);
  const [SubjectValue, setSubjectValue] = useState<OptionType>(Subject[0]);
  const [TopicValue, setTopicValue] = useState<OptionType | null>(null);

  const TopicChange = (selectedOption: OptionType | null) => {
    setTopicValue(selectedOption);
  };

  const SubjectChange = (selectedOption: OptionType) => {
    setSubjectValue(selectedOption);
  };

  const CategoryChange = (selectedOption: OptionType) => {
    setcategoryValue(selectedOption);
  };

  const ChapterChange = (selectedOption: OptionType) => {
    setChapterValue(selectedOption);
  };
  useEffect(() => {
    updateCategoryObject({
      Category: categoryValue.value,
      Chapter: ChapterValue.value,
      Subject: SubjectValue.value,
      Topic: TopicValue?.value,
    });
  }, [
    categoryValue.value,
    ChapterValue.value,
    SubjectValue.value,
    TopicValue?.value,
  ]);
  return (
    <>
      <div className="card-header AddNugget">
        <h2>Add Nugget To</h2>
        <div className="select-dropdown">
          {/* <Category/> */}
          <Select
            className="AddNuggetCategory"
            value={categoryValue}
            onChange={CategoryChange}
            options={Category}
            placeholder="Category"
          />
          {/* <Subject /> */}
          <Select
            className="AddNuggetCategory"
            value={SubjectValue}
            onChange={SubjectChange}
            options={Subject}
            placeholder="Subject"
          />
          {/* <Chapter /> */}
          <Select
            className="AddNuggetCategory"
            value={ChapterValue}
            onChange={ChapterChange}
            options={Chapter}
            placeholder="Chapter"
          />
          {/* <Topic /> */}
          <Select
            className="AddNuggetCategory"
            value={TopicValue || null}
            onChange={TopicChange}
            options={Topic}
            placeholder="Topic"
          />
        </div>
      </div>
    </>
  );
}