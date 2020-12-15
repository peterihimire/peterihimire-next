import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

const typeWriter = () => {
  if (typeof window !== "undefined") {
    return (
      <TypeWriterEffect
        textStyle={{
          fontFamily: "Red Hat Display",
          color: "#3F3D56",
          fontWeight: 500,
          fontSize: "1.5em",
        }}
        startDelay={1000}
        cursorColor="black"
        text="This is a single text"
        typeSpeed={100}
        scrollArea={myAppRef}
      />
    );
  }
};

export default typeWriter;
