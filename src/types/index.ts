import { ChangeEvent, RefObject } from "react";

export enum FieldType {
  TEXT = "text",
  TEXT_AREA = "textarea",
  TEL = "tel",
  EMAIL = "email",
  SELECT = "select",
  FILE = "file",
}

type BaseFieldType = {
  id: string;
  required: boolean;
  label?: string;
  name?: string;
  value?: string;
  cols?: number;
  rows?: number;
  pattern?: string;
  placeholder?: string;
  fileType?: string;
  ref?: RefObject<HTMLInputElement>;
};

interface TextFieldType extends BaseFieldType {
  label: string;
  placeholder: string;
  type: FieldType.TEXT | FieldType.TEL | FieldType.EMAIL;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  pattern?: string;
}

interface TextAreaType extends BaseFieldType {
  type: FieldType.TEXT_AREA;
  label: string;
  placeholder: string;
  cols: number;
  rows: number;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

interface SelectFieldType extends BaseFieldType {
  name: string;
  options: { label: string; value: string }[];
  placeholder: string;
  type: FieldType.SELECT;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

interface FileFieldType extends BaseFieldType {
  fileType: string;
  label: string;
  ref: RefObject<HTMLInputElement>;
  type: FieldType.FILE;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export type FormFieldType =
  | TextFieldType
  | TextAreaType
  | SelectFieldType
  | FileFieldType;

export type FormDataType = {
  to: string;
  subject: string;
  text: string;
  file?: File | null;
};
