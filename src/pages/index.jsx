import { useState } from "react";
export default function Home() {
  //first daalgavar
  // const friuts = ["apple", "banana", "strawberry", "blueberry", "orange"];
  // const [val, setVal] = useState("");
  // const change = (event) => {
  //   setVal(event.target.value);
  // };
  // const filterredArray = friuts.filter((friut) => friut === val);

  //////// Second daalgavar
  const objectList = [
    { title: "HTML Article 6", tag: "html" },
    { title: "CSS Basics 6", tag: "css" },
    { title: "HTML Article 2", tag: "html" },
    { title: "CSS Basics 3", tag: "css" },
    { title: "HTML Article 3", tag: "html" },
    { title: "JavaScript Guide 3", tag: "javascript" },
    { title: "CSS Basics 4", tag: "css" },
    { title: "JavaScript Guide 1", tag: "javascript" },
    { title: "HTML Article 4", tag: "html" },
    { title: "CSS Basics 1", tag: "css" },
    { title: "JavaScript Guide 4", tag: "javascript" },
    { title: "HTML Article 1", tag: "html" },
    { title: "CSS Basics 2", tag: "css" },
    { title: "HTML Article 5", tag: "html" },
    { title: "JavaScript Guide 2", tag: "javascript" },
    { title: "CSS Basics 5", tag: "css" },
    { title: "JavaScript Guide 6", tag: "javascript" },
    { title: "HTML Article 7", tag: "html" },
    { title: "CSS Basics 7", tag: "css" },
    { title: "JavaScript Guide 5", tag: "javascript" },
  ];
  const [value, setValue] = useState("");
  const changeHandle = (event) => {
    setValue(event.target.value);
  };

  const filterredArray = objectList.filter((object) => object.tag === value);

  return (
    <div className=" flex flex-col justify-center items-center mt-[100px]">
      {/* first daalgavar */}
      {/* <input
        className="border-[2px] placeholder: "
        value={val}
        onChange={change}
      />
      <div>
        this is
        {filterredArray.map((friut) => {
          return <div>{friut}</div>;
        })}
      </div> */}
      {/* second daalgavar */}
      {/* <input
        type="text"
        value={tag}
        onChange={changeHandle}
        className="border-[20px]"
      /> */}
      <div className="flex flex-col gap-[20px]">
        <select name="" id="tag" onChange={changeHandle}>
          <option value="html">html</option>
          <option value="css">css</option>
          <option value="javascript">js</option>
        </select>
        <div>
          {filterredArray.map((html) => {
            return (
              <div className="flex gap-[100px] text-red-400">
                <p>{html.title}</p>
                <p>{html.tag}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
