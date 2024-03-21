type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  arrow: (props: IconProps) => (
    <svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
        fill="white"
      />
    </svg>
  ),

  line: (props: IconProps) => (
    <svg
      viewBox="0 0 100 10"
      aria-hidden="true"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        // style="fill: none;stroke-width: 2px;stroke-linecap: round;stroke-dashoffset: 0;stroke-dasharray: none;"
        fill="white"
        strokeWidth="2px"
        strokeLinecap="round"
        strokeDashoffset="0"
        strokeDasharray="none"
        d="M2,2.5027319295252477C16.650259698283016,7.775772638534024,40.803027458453876,2.786536224233977,98,5.944530373733199"
      ></path>
    </svg>
  ),

  arrowDown: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  ),

  arrowRight: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  ),
};
