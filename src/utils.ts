import { NavigateFunction } from "react-router-dom";
import getConfig from "./config.js";
import { FormDataType } from "./types";
import { CAREERS_FORM, CONTACT_FORM } from "./constants.js";

export const constructFormData = ({
  to,
  subject,
  text,
  file,
}: FormDataType) => {
  const formData = new FormData();
  formData.append("to", to);
  formData.append("subject", subject);
  formData.append("text", text);
  if (file) {
    formData.append("file", file);
  }

  return formData;
};

export const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.scrollY + 50;
    const middle = absoluteElementTop - (window.innerHeight / 100) * 14;
    window.scrollTo({ top: middle, behavior: "smooth" });
  }
};

export const scrollToElementWithTimeout = (
  elementId: string,
  milliseconds?: number,
) => {
  const timeoutId = setTimeout(() => {
    scrollToElement(elementId);
  }, milliseconds || 1);

  return () => clearTimeout(timeoutId);
};

export const isCurrentPage = (currentPagePath: string) =>
  window.location.pathname === currentPagePath;

export const navigateAndScrollToElement = ({
  navigate,
  path,
  elementId,
  milliseconds,
}: {
  navigate: NavigateFunction;
  path: string;
  elementId: string;
  milliseconds?: number;
}) => {
  if (isCurrentPage(path)) {
    scrollToElement(elementId);
  } else {
    navigate(path);
    scrollToElementWithTimeout(elementId, milliseconds);
  }
};

export const getFormReceiverEmail = (formName: string) => {
  const config = getConfig();
  switch (formName) {
    case CONTACT_FORM:
      return config.contactFormEmailReceiver;
    case CAREERS_FORM:
      return config.careersFormEmailReceiver;
  }
};

export const navigateAndScrollToTop = (
  navigate: NavigateFunction,
  path: string,
) => {
  navigate(path);
  window.scrollTo(0, 0);
};
