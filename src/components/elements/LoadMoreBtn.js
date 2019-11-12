import React from "react";

import {StyledLoadMoreBtn} from '../styles/StyledLoadMoreBtn';

const LoadMoreBtn = ({Text, callback}) => (
  <StyledLoadMoreBtn type="button" onClick={callback}>
    {Text}
  </StyledLoadMoreBtn>

) 

export default LoadMoreBtn;