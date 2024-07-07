export interface Palette {
  magenta: string;
  white: string;
  gray: string;
  gray2: string;
  gray3: string;
  gray4: string;
  lightBlue: string;
  darkBlue: string;
  darkBlue2: string;
  darkBlue3: string;
  darkBlue4: string;
  darkBlue5: string;
  darkBlue6: string;
  green: string;
  pink: string;
}

export interface Theme extends Palette {
  primary: string;
  text: string;
  textSecondary: string;
  textTertiary: string;
  buttonPrimary: string;
  buttonSecondary: string;
  buttonTertiary: string;
  background: string;
  icon: string;
  iconSecondary: string;
  activeDot: string;
  inactiveDot: string;
}