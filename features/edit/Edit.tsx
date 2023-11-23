import { DEFAULT_VIEW } from "@/features/view/View.constants";
// @ts-ignore
import RemoteItems from "items/index";

import React, { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { createUseGesture, dragAction, pinchAction } from "@use-gesture/react";

import styles from "@/components/Gesture.module.css";

let remoteListItems: any;

// @ts-ignore
import("items/listItems").then((res) => {
  remoteListItems = res.default;
});

const mapView = (view: any) => {
  return Object.values(view);
};

const useGesture = createUseGesture([dragAction, pinchAction]);

const Edit = () => {
  const mappedView = mapView(DEFAULT_VIEW);
  useEffect(() => {
    const handler = (e: Event) => e.preventDefault();
    document.addEventListener("gesturestart", handler);
    document.addEventListener("gesturechange", handler);
    document.addEventListener("gestureend", handler);
    return () => {
      document.removeEventListener("gesturestart", handler);
      document.removeEventListener("gesturechange", handler);
      document.removeEventListener("gestureend", handler);
    };
  }, []);

  const [style, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    rotateZ: 0,
  }));
  const ref = React.useRef<HTMLDivElement>(null);

  useGesture(
    {
      // onHover: ({ active, event }) => console.log('hover', event, active),
      // onMove: ({ event }) => console.log('move', event),
      onDrag: ({ pinching, cancel, offset: [x, y], ...rest }) => {
        if (pinching) return cancel();
        api.start({ x, y });
      },
      onPinch: ({
        origin: [ox, oy],
        first,
        movement: [ms],
        offset: [s, a],
        memo,
      }) => {
        if (first) {
          const { width, height, x, y } = ref.current!.getBoundingClientRect();
          const tx = ox - (x + width / 2);
          const ty = oy - (y + height / 2);
          memo = [style.x.get(), style.y.get(), tx, ty];
        }

        const x = memo[0] - (ms - 1) * memo[2];
        const y = memo[1] - (ms - 1) * memo[3];
        api.start({ scale: s, rotateZ: a, x, y });
        return memo;
      },
    },
    {
      target: ref,
      drag: { from: () => [style.x.get(), style.y.get()] },
      pinch: { scaleBounds: { min: 0.5, max: 2 }, rubberband: true },
    }
  );

  return (
    <div className={`flex fill center ${styles.container}`}>
      <animated.div className={styles.card} ref={ref} style={style}>
        {mappedView.map((i: any) => {
          let content;
          if (i.type === "legacy-item") {
            const ItemComponent = remoteListItems.getItem(
              i.legacy.itemType
            ).component;

            content = <ItemComponent {...i.legacy.itemProperties} />;
          }

          return <div key={i.id}>{content}</div>;
        })}
      </animated.div>
    </div>
  );
};

export default Edit;
