import getConfig from "./config.js";
import {CAREERS_FORM, CONTACT_FORM} from "./constants.js";

export const constructFormData = ({ to, subject, text, ...rest }) => {
  const formData = new FormData();
  formData.append("to", to);
  formData.append("subject", subject);
  formData.append("text", text);

  Object.entries(rest).forEach(([key, value]) => {
    formData.append(key, value);
  });
  return formData;
};

export const scrollToElement = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.scrollY + 50;
    const middle =
      absoluteElementTop - (window.innerHeight / 100) * 14;
    window.scrollTo({ top: middle, behavior: "smooth" });
  }
};

export const scrollToElementWithTimeout = (elementId, milliseconds) => {
  const timeoutId = setTimeout(() => {
    scrollToElement(elementId);
  }, milliseconds || 1);

  return () => clearTimeout(timeoutId);
}

export const isCurrentPage = (currentPagePath) =>
  window.location.pathname === currentPagePath;

export const navigateAndScrollToElement = ({navigate, path, elementId, milliseconds}) => {
  if (isCurrentPage(path)) {
    scrollToElement(elementId);
  } else {
    navigate(path);
    scrollToElementWithTimeout(elementId, milliseconds);
  }
};

export const getFormReceiverEmail = (formName) => {
  const config = getConfig();
  switch (formName) {
    case CONTACT_FORM:
      return config.contactFormEmailReceiver;
    case CAREERS_FORM:
      return config.careersFormEmailReceiver;
  }
}

export const navigateAndScrollToTop = (navigate, path) => {
  navigate(path);
  window.scrollTo(0, 0);
}
