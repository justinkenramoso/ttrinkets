import React from "react";

interface FeatureProps {
  icon: any;
  head: string;
  body: string;
}

function feature(props: FeatureProps) {
  return (
    <div className="bg-light2 text-dark2 p-5 rounded text-center flex flex-col items-center drop-shadow hover:drop-shadow-xl transition hover:cursor-pointer">
      {props.icon}
      <h4 className="text-2xl font-semibold">{props.head}</h4>
      <br />
      <p>{props.body}</p>
    </div>
  );
}

export default feature;
