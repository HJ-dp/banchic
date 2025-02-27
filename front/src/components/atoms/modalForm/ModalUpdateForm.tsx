import styled from "styled-components";
import { SSubTitle } from "../../../styles/Font";
import ButtonComponent from "../auth/Button";
import { useState } from "react";
import { motion } from "framer-motion";
import theme from "../../../styles/Theme";
import { StarRating } from "./StarRating";
import { toast } from "react-toastify";

interface Reviews {
  perfumeId: string;
  reviewId: number;
  rate: number;
  content: string;
}

interface Props {
  title?: string;
  closeModal: () => void;
  actionModal?: ({ perfumeId, reviewId, rate, content }: Reviews) => void;
  initialRate: number;
  initialContent: string;
  initReview: ReviewModi | undefined;
}

interface ReviewModi {
  reviewmodi: {
    initialRate: number;
    initialContent: string;
    perfumeId: number;
    reviewId: number;
    rate: number;
    content: string;
  };
}

const ModalUpdateForm = ({
  title,
  closeModal,
  actionModal,
  perfumeId,
  reviewId,
  initialRate,
  initialContent,
  initReview = {
    reviewmodi: {
      initialRate: 1,
      initialContent: "",
      perfumeId: 1,
      reviewId: 1,
      rate: 1,
      content: "",
    },
  },
}: Props & Reviews) => {
  const [rate, setRate] = useState<number>(initialRate);
  const [content, setContent] = useState<string>(initialContent);

  const ChangeBtn = () => {
    if (
      rate >= 1 &&
      rate <= 5 &&
      content.length >= 2 &&
      content.length <= 500 &&
      /^[ㄱ-ㅎ가-힣a-z0-9-_ .%+=()*&^%$#@!~`,<>/?;:'"{}[]|]+$/i.test(content) &&
      actionModal
    ) {
      const perfumeId = String(initReview.reviewmodi.perfumeId);
      const reviewId = initReview.reviewmodi.reviewId;
      actionModal({ perfumeId, reviewId, rate, content });
      toast("리뷰 수정이 완료되었습니다.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      closeModal();
    } else {
      console.log(rate, perfumeId, reviewId, rate, content);
      toast("평점은 1-5점 사이, 리뷰는 2-500자로 작성 가능합니다.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <SModalWrap>
      <SModalBackGround onClick={closeModal} />
      <SModalContainer
        initial={{
          y: 20,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeIn",
          duration: 0.1,
        }}
      >
        <SSubTitle>{title}</SSubTitle>
        <StarRating setRate={setRate} init={initReview.reviewmodi.rate} />
        <SInput
          id="contentValue"
          type="text"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setContent(event.target.value);
          }}
          defaultValue={initReview.reviewmodi.content}
          placeholder="리뷰 내용을 입력하세요"
          maxLength={500}
          minLength={2}
          required
        />
        <SFlexWrap>
          <ButtonComponent onClick={closeModal}>취소</ButtonComponent>
          <ButtonComponent onClick={ChangeBtn}>완료</ButtonComponent>
        </SFlexWrap>
      </SModalContainer>
    </SModalWrap>
  );
};

const SFlexWrap = styled.div`
  display: flex;
  gap: 1em;
  width: 10em;
  height: 2em;
`;

const SModalWrap = styled.div`
  width: 100%;
  height: 100%;
`;

const SModalBackGround = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const SInput = styled(motion.input)`
  width: 500px;
  background-color: var(--color-white);
  border: 1px solid var(--color-white);
  outline: none;
  ${theme.font.Title}
  text-align: center;
`;

const SModalContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  gap: 2rem;
  padding: 3.6rem 0;
  border: 1px solid var(--color-white);
  background-color: var(--color-white);
  /* background-color: yellow; */
  position: absolute;
  right: 0;
  top: 10em;
  width: 100%;
`;

export default ModalUpdateForm;