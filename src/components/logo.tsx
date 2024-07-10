import * as React from "react";
import { SvgXml } from "react-native-svg";

interface LogoProps {
  width: number;
  height: number;
  color: string;
}
export default function Logo({ width, height, color }: LogoProps) {
  const xml = `
    <svg
      width="${width}"
      height="${height}"
      viewBox="0 0 150 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M77.6581 7.42788C75.7588 6.52821 73.5558 6.52949 71.6576 7.43135L3.93076 39.6086C2.55893 40.2604 0.91849 39.6766 0.266729 38.3048C-0.38503 36.933 0.198699 35.2926 1.57053 34.6408L74.3224 0.0760961L74.3278 0.0735503C74.5339 -0.0243849 74.7732 -0.024523 74.9794 0.0731743L147.959 34.6423C149.331 35.2925 149.917 36.9322 149.267 38.3048C148.617 39.6774 146.977 40.263 145.604 39.6129L77.6581 7.42788ZM73.0738 94.9188C73.088 96.0233 73.9948 96.9072 75.0993 96.893L76.5991 96.8738C77.7036 96.8596 78.5875 95.9528 78.5733 94.8483L77.6118 19.8481C77.5976 18.7437 76.6908 17.8598 75.5863 17.8739L74.0864 17.8932C72.982 17.9073 72.0981 18.8142 72.1123 19.9186L73.0738 94.9188ZM107.087 74.9188C107.087 76.0234 107.982 76.9188 109.087 76.9188H110.587C111.691 76.9188 112.587 76.0234 112.587 74.9188V34.9188C112.587 33.8142 111.691 32.9188 110.587 32.9188H109.087C107.982 32.9188 107.087 33.8142 107.087 34.9188V74.9188ZM36.0866 34.9188C36.0866 33.8142 36.982 32.9188 38.0866 32.9188H39.5866C40.6912 32.9188 41.5866 33.8142 41.5866 34.9188V74.9188C41.5866 76.0234 40.6912 76.9188 39.5866 76.9188H38.0866C36.982 76.9188 36.0866 76.0234 36.0866 74.9188V34.9188Z"
        fill="${color}"
      />
    </svg>`;

  return <SvgXml xml={xml} />;
}
