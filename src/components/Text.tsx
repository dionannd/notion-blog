/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "@/styles/post.module.css";

import clsxm from "@/lib/clsxm";
import { RichText } from "@/lib/interface";

interface Props {
  text: any;
  className?: string;
}

export const Text = ({ text, className }: Props) => {
  if (!text) {
    return null;
  }
  return text.map((value: RichText) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        className={clsxm(
          className,
          [
            bold ? styles.bold : "",
            code ? styles.code : "",
            italic ? styles.italic : "",
            strikethrough ? styles.strikethrough : "",
            underline ? styles.underline : "",
          ].join(" ")
        )}
        style={color !== "default" ? { color } : {}}
        key={text.content}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};
