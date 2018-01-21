import { injectGlobal } from "styled-components";
import { normalize } from "polished";

injectGlobal`
  ${normalize()}

  body {
    background-color: #f8f8f8;
  }
`;
