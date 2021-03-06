import React, { useState } from "react";

function App() {
  //this is a component. A component is the basic unit in React,
  //so React component is a javascript function that return something to be rendered on the screen
  return (
    <div>
      <Folder name="Desktop">
        <Folder name="Music">
          <File name="all_star.mp4" />
          <File name="cat_meow.mp4" />
        </Folder>
        <File name="cat_photo.jpg" />
        <File name="tokyo.png" />
      </Folder>
      <Folder name="Applications" />
    </div>
  );
}

const Folder = (props) => {
  //This is an arrow function
  useState(false); //useState is a function
  const [isOpen, setIsOpen] = useState(true);
  const direction = isOpen ? "down" : "right";
  const { name, children } = props;

  const handleClick = () => setIsOpen(!isOpen);
  return (
    <div>
      <span onClick={handleClick}>
        <i className="blue folder icon"></i>
        <i className={`caret ${direction} icon`}></i>
      </span>
      {name}
      <div style={{ marginLeft: "18px" }}>{isOpen ? children : null}</div>
    </div>
  );
};

const File = (props) => {
  const { name } = props;
  const fileExtension = name.split(".")[1];
  const fileIcons = {
    mp4: "headphones",
    jpg: "file image",
    png: "file image outline",
  };
  return (
    <div>
      <i className={`${fileIcons[fileExtension]} icon`}></i>
      {name}
    </div>
  );
};

export default App;
