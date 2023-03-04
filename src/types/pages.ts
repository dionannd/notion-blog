/* eslint-disable @typescript-eslint/no-explicit-any */
export interface RootObject {
  object?: string;
  id?: string;
  created_time?: Date;
  last_edited_time?: Date;
  created_by?: CreatedBy;
  last_edited_by?: LastEditedBy;
  cover?: Cover;
  icon?: Icon;
  parent?: Parent;
  archived?: boolean;
  properties?: Properties;
  url?: string;
}

export interface CreatedBy {
  object?: string;
  id?: string;
}

export interface LastEditedBy {
  object?: string;
  id?: string;
}

export interface Cover {
  type?: string;
  external?: External;
}

export interface External {
  url?: string;
}

export interface Icon {
  type?: string;
  emoji?: string;
}

export interface Parent {
  type?: string;
  database_id?: string;
}

export interface Properties {
  Name?: Name;
  Slug?: Slug;
  Description?: Description;
  Public?: Public;
  Featured?: Featured;
  Tags?: Tags;
  Author?: Author;
  Created?: Created;
  Published?: Published;
  LastUpdated?: LastUpdated;
  Tweet?: Tweet;
}

export interface Name {
  id?: string;
  type?: string;
  title?: Title[];
}

export interface Title {
  type?: string;
  text?: Text;
  annotations?: Annotations;
  plain_text?: string;
  href?: any;
}

export interface Slug {
  id?: string;
  type?: string;
  rich_text?: RichText[];
}

export interface Description {
  id?: string;
  type?: string;
  rich_text?: RichText[];
}

export interface Public {
  id?: string;
  type?: string;
  checkbox?: boolean;
}

export interface Featured {
  id?: string;
  type?: string;
  checkbox?: boolean;
}

export interface Tags {
  id?: string;
  type?: string;
  multi_select?: MultiSelect[];
}

export interface MultiSelect {
  id?: string;
  name?: string;
  color?: string;
}

export interface Author {
  id?: string;
  type?: string;
  rich_text?: RichText[];
}

export interface Created {
  id?: string;
  type?: string;
  created_time?: Date;
}

export interface Published {
  id?: string;
  type?: string;
  date?: Date;
}

export interface LastUpdated {
  id?: string;
  type?: string;
  last_edited_time?: Date;
}

export interface Tweet {
  id?: string;
  type?: string;
  rich_text?: any[];
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

export interface Date {
  start?: Date;
  end?: any;
  time_zone?: any;
}
