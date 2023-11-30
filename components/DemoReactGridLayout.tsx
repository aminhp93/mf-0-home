import React, { useState, useEffect, useCallback } from "react";
import _ from "lodash";
import RGL, { WidthProvider, Layout } from "react-grid-layout";
import Edit from "@/features/edit/Edit";

const ReactGridLayout = WidthProvider(RGL);

interface BasicLayoutProps {
  className?: string;
  items?: number;
  rowHeight?: number;
  onLayoutChange?: (layout: Layout[]) => void;
  cols?: number;
}

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const [layout, setLayout] = useState<Layout[]>([]);

  useEffect(() => {
    const newLayout = generateLayout();
    setLayout(newLayout);
  }, [props.items]);

  const generateDOM = () => {
    return _.map(_.range(props.items || 0), (i) => (
      <div
        key={i}
        style={{
          backgroundColor: "lightgray",
        }}
      >
        <span className="text">{i}</span>
      </div>
    ));
  };

  const generateLayout = useCallback((): Layout[] => {
    return _.map(new Array(props.items || 0), (item, i) => {
      const y: any = _.result(props, "y") || Math.ceil(Math.random() * 4) + 1;
      return {
        x: (i * 2) % (props.cols || 12),
        y: Math.floor(i / 6) * y,
        w: 2,
        h: y,
        i: i.toString(),
      };
    }) as Layout[];
  }, [props.items, props.cols]);

  const onLayoutChange = useCallback(
    (newLayout: Layout[]) => {
      props.onLayoutChange && props.onLayoutChange(newLayout);
    },
    [props.onLayoutChange]
  );

  return (
    <ReactGridLayout layout={layout} onLayoutChange={onLayoutChange} {...props}>
      {generateDOM()}
    </ReactGridLayout>
  );
};

BasicLayout.defaultProps = {
  className: "layout",
  items: 4,
  rowHeight: 30,
  onLayoutChange: function () {},
  cols: 12,
};

export default BasicLayout;
