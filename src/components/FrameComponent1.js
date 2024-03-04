import { useMemo } from "react";
import "./FrameComponent1.css";

const FrameComponent1 = ({
  frameWebDevelopment,
  iSRO,
  propBorder,
  propBorder1,
}) => {
  const frameDiv7Style = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const rectangleDiv3Style = useMemo(() => {
    return {
      border: propBorder1,
    };
  }, [propBorder1]);

  return (
    <div className="rectangle-parent123" style={frameDiv7Style}>
      <div className="frame-child162" style={rectangleDiv3Style}/>
      <img
        className="frame-web-development"
        loading="eager"
        alt=""
        src={frameWebDevelopment}
      />
      <div className="isro1">{iSRO}</div>
      <div className="rectangle-parent124">
        <div className="frame-child163" />
        <div className="follow3">Follow</div>
      </div>
    </div>
  );
};
export default FrameComponent1;
