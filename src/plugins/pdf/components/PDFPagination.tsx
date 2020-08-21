import {
  faStepBackward,
  faStepForward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useContext } from "react";
import styled from "styled-components";
import Button from "../../../components/common/Button";
import { IStyledProps } from "../../../types";
import { PDFContext } from "../state";
import { setCurrentPage } from "../state/actions";

const PDFPagination: FC<{}> = () => {
  const {
    state: { currentPage, numPages },
    dispatch,
  } = useContext(PDFContext);

  return (
    <Container>
      <PageNavButtonLeft
        onClick={() => dispatch(setCurrentPage(currentPage - 1))}
        disabled={currentPage === 1}
      >
        <FontAwesomeIcon icon={faStepBackward} />
      </PageNavButtonLeft>

      <PageTag>
        Page {currentPage}/{numPages}
      </PageTag>

      <PageNavButtonRight
        onClick={() => dispatch(setCurrentPage(currentPage + 1))}
        disabled={currentPage >= numPages}
      >
        <FontAwesomeIcon icon={faStepForward} />
      </PageNavButtonRight>
    </Container>
  );
};

export default PDFPagination;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const PageNavButtonLeft = styled(Button)`
  margin: 0 5px;
`;
const PageNavButtonRight = styled(Button)`
  margin: 0 20px 0 5px;
`;

const PageTag = styled.div`
  color: ${(props: IStyledProps) => props.theme.text_primary};
  font-size: 14px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
