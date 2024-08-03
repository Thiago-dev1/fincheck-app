import { Text, TextProps } from "react-native";

interface TextComponent extends TextProps {
  weight?: '400' | '600' | '700';
  color?: string;
  size?: number;
  opacity?: number;
  children: string;
}


export function TextComponent({ weight, color, size, opacity, children, style, ...props }: Readonly<TextComponent>) {
  return (
    <Text style={[{
      fontFamily: weight ? `DMSans-${weight}` : 'DMSans-400',
      color: color ?? '#000',
      fontSize: size ?? 16,
      opacity: opacity ?? 1,
    },
      style
    ]}
      {...props}
    >{children}</Text>
  );
} 
