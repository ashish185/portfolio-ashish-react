import React, { useState, useEffect, useRef } from "react";
import { select, axisBottom, scaleLinear, axisRight, scaleBand } from "d3";
import "./my-graph.scss";

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
const MySkillBarChart = ({ data }) => {
  const [myData, setMyData] = useState(data);
  const svgRef = useRef();
  const dimensions = useResizeObserver(svgRef);
  useEffect(() => {
    if(!dimensions){
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
      .domain([0, Math.max(...myData.map((obj) => obj.value))])
      .range([height, 0]); //Because the height of svg is 150 px.

    const xAxis = axisBottom(xScale)
      .ticks(myData.length)
      // .tickFormat((index) => index + 1);

    const yAxis = axisRight(yScale).ticks(myData.length);

    svg.select(".y-axis").call(yAxis);

    svg
      .select(".x-axis")
      .style("transform", `translateY(${height}px)`)
      .call(xAxis);

    // const colorScale = scaleLinear()
    //   .domain([25, 100, 150])
    //   .range(["rebeccapurple"])
    //   .clamp(true); // if do not clamp then less<=25 will be green

    svg
      .selectAll(".bar")
      .data(myData)
      .join("rect")
      .attr("class", "bar")
      .style("transform", "scale(1,-1)")
      .attr("x", (obj,) => {
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
          .attr("text-anchor", "middle")
      })
      .transition() //Using animation on the height.
      .attr("height", (obj) => height - yScale(obj.value))
      .attr("fill", 'white')
  }, [myData, dimensions]);

  /**
   * When ever the button is clicked, It will add five to every element of myData.
   * Thus change data cause useEffect hook to call which will invoke update callback of join method.
   * Which will replace the class name of the circle to "updated".
   */
  const changeDataClick = () => {
    const newData = myData.map((val) => val + 5);
    setMyData(() => newData);
  };

  const removeElements = () => {
    const newData = myData.filter((val) => val > 45);
    setMyData(() => newData);
  };
  return (
    <>
      <div className="graph-container">
      <h1>Skill I am having!</h1>
        <svg ref={svgRef}>
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>
    </>
  );
};

export default MySkillBarChart;
