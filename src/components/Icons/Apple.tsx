import * as React from "react";
import { SvgXml } from "react-native-svg";

interface LogoProps {
  width: number;
  height: number;
  color: string;
  border: string;
  logo: string;
}
export default function Apple({
  width,
  height,
  color,
  border,
  logo,
}: LogoProps) {
  const xml = `
  <svg width="${width}" height="${height}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.17963" y="1.5" width="45.3593" height="45.3593" rx="11" fill="${color}" stroke="${border}" stroke-width="2"/>
<path d="M30.8102 24.8519C30.8328 27.2128 32.2053 28.5568 33.1851 29.2171C33.7062 29.5683 34.0184 30.188 33.7756 30.7564C33.4996 31.4025 33.0628 32.2832 32.4307 33.1789C31.3917 34.6511 30.3135 36.1179 28.6149 36.1482C26.9459 36.178 26.4092 35.1887 24.501 35.1887C22.5934 35.1887 21.9971 36.1179 20.4172 36.1781C18.7776 36.2383 17.5291 34.5862 16.4815 33.1193C14.341 30.1189 12.7051 24.6409 14.9017 20.9432C15.9928 19.1069 17.9429 17.944 20.0594 17.9142C21.6694 17.8845 23.1891 18.9644 24.1733 18.9644C25.157 18.9644 27.0036 17.6657 28.945 17.8564C29.6123 17.8833 31.2696 18.0806 32.6521 19.3009C33.1772 19.7643 32.9902 20.5519 32.4838 21.0345C31.7136 21.7684 30.7933 23.0275 30.8102 24.8519ZM27.6735 15.8714C28.312 15.122 28.7974 14.157 28.9476 13.1375C29.0403 12.5088 28.4535 12.0265 27.8313 12.2248C26.8856 12.5263 25.9365 13.1201 25.2981 13.8444C24.6802 14.537 24.1211 15.5483 23.9791 16.6071C23.9032 17.1727 24.4035 17.6322 24.9787 17.5123C26.0272 17.2937 27.0117 16.6485 27.6735 15.8714Z" fill="${logo}"/>
</svg>
    `;

  return <SvgXml xml={xml} />;
}
