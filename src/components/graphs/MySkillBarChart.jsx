import { useState, useEffect, useRef } from "react";
import { select, axisBottom, scaleLinear, axisRight, scaleBand } from "d3";
import "./my-graph.scss";
import AnimatedText from "../animated/AnimatedText";
import Select from "./../select/Select";

/**
 * This is a resize observer hook. When it first renders it return null.
 * @param {Object} ref: It accept reference object.
 * @returns
 */
const useResizeObserver = (ref) => {
  const [dimensions, setDimensions] = useState(null);
  useEffect(() => {
    const observeTarget = ref.current;
    const resizeObserver = new ResizeObserver((entries) =>
      entries.forEach((entry) => setDimensions(entry.contentRect))
    );
    resizeObserver.observe(observeTarget);
    return () => {
      resizeObserver.unobserve(observeTarget);
    };
  }, [ref]);

  return dimensions;
};

/**
 * Here purpose id add interactivity on the graph like Tooltip on the bar:
 * @returns JSX
 */
const MySkillBarChart = ({ data, options, onSelectChange }) => {
  const [myData, setMyData] = useState(data);
  const svgRef = useRef();
  const dimensions = useResizeObserver(svgRef);
  useEffect(() => {
    setMyData(data);
  }, [data]);
  useEffect(() => {
    if (!dimensions) {
      return;
    }
    const { width, height } = dimensions;
    const svg = select(svgRef.current);
    const xScale = scaleBand()
      // .domain(myData.map((val, idx) => idx))
      .domain(myData.map((obj) => obj.label))
      .range([0, width])
      .padding(0.5);

    const yScale = scaleLinear()
      .domain([0, Math.max(...myData.map((obj) => obj.value)) + 0.3])
      .range([height, 0]);

    const xAxis = axisBottom(xScale).ticks(myData.length);
    // .tickFormat((index) => index + 1);

    const yAxis = axisRight(yScale).ticks(myData.length);

    svg.select(".y-axis").call(yAxis);

    svg
      .select(".x-axis")
      .style("transform", `translateY(${height}px)`)
      .call(xAxis);

    svg
      .selectAll(".bar")
      .data(myData)
      .join("rect")
      .attr("class", "bar")
      .style("transform", "scale(1,-1)")
      .attr("x", (obj) => {
        return xScale(obj.label);
      })
      .attr("y", -height)
      .attr("width", xScale.bandwidth())
      .on("click", (event, obj) => {
        const { label, value } = obj;
        svg
          .selectAll(".tooltip")
          .data([value])
          .join("text")
          .attr("class", "tooltip")
          .text(value)
          .attr("x", xScale(label) + xScale.bandwidth() / 2)
          .attr("y", yScale(value))
          .attr("text-anchor", "middle");
      })
      .transition() //Using animation on the height.
      .attr("height", (obj) => height - yScale(obj.value))
      .attr("fill", "cornflowerblue");
  }, [myData, dimensions]);

  return (
    <div className="graph-container">
      <div className="animated-text_dropdown" id="Skills dropdown">
        <AnimatedText text="Skills I am having !" />
        <Select
          onChange={onSelectChange}
          options={options}
          ariaLabelledby="Skills dropdown"
        />
      </div>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </div>
  );
};

export default MySkillBarChart;
