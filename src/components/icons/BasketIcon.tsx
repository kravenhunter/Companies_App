interface IProps {
  color?: string;
  size?: string;
}
export const BasketIcon = ({ color = '#ff3044', size = '2rem' }: IProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'>
      <g
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'>
        <path d='M5.47 6.015v12.514a2.72 2.72 0 0 0 2.721 2.721h7.618a2.72 2.72 0 0 0 2.72-2.72V6.014m-15.235.001h17.412' />
        <path d='M8.735 6.015V4.382a1.632 1.632 0 0 1 1.633-1.632h3.264a1.632 1.632 0 0 1 1.633 1.632v1.633M9.824 16.992v-5.439m4.353 5.439v-5.439' />
      </g>
    </svg>
  );
};
