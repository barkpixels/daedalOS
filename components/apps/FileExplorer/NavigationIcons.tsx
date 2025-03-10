import { memo, useMemo } from "react";

export const Back = memo(() => (
  <svg viewBox="-8 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 14v4H7.656l7.172 7.172L12 28 0 16 12 4l2.828 2.828L7.656 14H32z" />
  </svg>
));

export const Forward = memo(() => (
  <svg viewBox="8 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="m20 4 12 12-12 12-2.828-2.828L24.344 18H0v-4h24.344l-7.172-7.172L20 4z" />
  </svg>
));

export const Refresh = memo(() => (
  <svg
    className="refresh"
    viewBox="-10 -13 52 52"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.266.594q2.594.703 4.75 2.195t3.711 3.531 2.414 4.516T32 16q0 2.203-.57 4.25t-1.609 3.828-2.5 3.242-3.242 2.5-3.828 1.609-4.25.57-4.25-.57-3.828-1.609-3.242-2.5-2.5-3.242-1.609-3.82T.002 16q0-2.188.578-4.25t1.648-3.883T4.83 4.554t3.453-2.555H4.002v-2h8v8h-2V3.358q-1.828.875-3.305 2.195T4.174 8.522t-1.609 3.555-.563 3.922q0 1.922.5 3.711t1.414 3.344 2.195 2.836 2.836 2.195 3.336 1.414 3.719.5q1.922 0 3.711-.5t3.344-1.414 2.836-2.195 2.195-2.836 1.414-3.336.5-3.719q0-2.344-.758-4.516T27.127 7.53t-3.242-3.086-4.148-1.93l.531-1.922z" />
  </svg>
));

export const GoTo = memo(() => (
  <svg className="go-to" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M31.906 16 17.203 30.703l-1.406-1.406L28.094 17H0v-2h28.094L15.797 2.703l1.406-1.406z" />
  </svg>
));

type DownProps = { flip?: boolean };

export const Down = memo<DownProps>(({ flip }) => {
  const style = useMemo(
    () =>
      flip ? { transform: "scaleY(-1)", transition: "all 0.2s" } : undefined,
    [flip]
  );

  return (
    <svg style={style} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="m28.109 5.453 3.781 3.766L15.999 25.11.108 9.219l3.781-3.766 12.109 12.109L28.107 5.453z" />
    </svg>
  );
});

export const Up = memo(() => {
  const style = useMemo(() => ({ marginTop: "-1px" }), []);

  return (
    <svg style={style} viewBox="0 -7 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="m16 0 12 12-2.828 2.828L18 7.656V32h-4V7.656l-7.172 7.172L4 12 16 0z" />
    </svg>
  );
});

export const Search = memo(() => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 0q1.516 0 2.922.391T26.547 1.5t2.227 1.727 1.727 2.227 1.109 2.625.391 2.922-.391 2.922-1.109 2.625-1.727 2.227-2.227 1.727-2.625 1.109-2.922.391q-1.953 0-3.742-.656t-3.289-1.891L1.703 31.705q-.297.297-.703.297t-.703-.297T0 31.002t.297-.703l12.25-12.266q-1.234-1.5-1.891-3.289T10 11.002q0-1.516.391-2.922T11.5 5.455t1.727-2.227 2.227-1.727T18.079.392t2.922-.391zm0 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T30 11t-.711-3.5-1.93-2.859-2.859-1.93T21 2t-3.5.711-2.859 1.93-1.93 2.859T12 11t.711 3.5 1.93 2.859 2.859 1.93T21 20z" />
  </svg>
));
