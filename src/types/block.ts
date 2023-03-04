/* eslint-disable @typescript-eslint/no-explicit-any */
export interface RootObject {
  object?: string;
  id?: string;
  parent?: Parent;
  created_time?: Date;
  last_edited_time?: Date;
  created_by?: CreatedBy;
  last_edited_by?: LastEditedBy;
  has_children?: boolean;
  archived?: boolean;
  type?: string;
  heading_2?: Heading2;
}

export interface Parent {
  type?: string;
  page_id?: string;
}

export interface CreatedBy {
  object?: string;
  id?: string;
}

export interface LastEditedBy {
  object?: string;
  id?: string;
}

export interface Heading2 {
  rich_text?: RichText[];
  color?: string;
  is_toggleable?: boolean;
}

export interface RichText {
  type?: string;
  text?: Text;
  annotations?: Annotations;
  plain_text?: string;
  href?: any;
}

export interface Text {
  content?: string;
  link?: any;
}

export interface Annotations {
  bold?: boolean;
  italic?: boolean;
  strikethrough?: boolean;
  underline?: boolean;
  code?: boolean;
  color?: string;
}
