import { MouseEventHandler, useEffect, useState } from "react";
import {
  getPerfumeBrand,
  getPerfumeGender,
  getPerfumeSeason,
} from "../../../api/Api";
import PerfumeListItem from "../../atoms/item/perfumeListItem";
import styled from "styled-components";
import { brandMap, genderMap, seasonMap } from "./a";
import Perfume from "./Perfume";
import { Link } from "react-router-dom";
import Page_Url from "../../../router/Url";
import LoadingSpinner from "../../../utils/LoadingSpinner";

interface Perfume {
  perfumeId: number;
  perfumeImg: string;
  originName: string;
  brand: string;
  korName: string;
}

function CategorySearch() {
  const [perfumes, setPerfumes] = useState([]);
  const [selected, setSelected] = useState("겨울");
  const [isLoading, setIsLoading] = useState(false);

  const [seasons] = useState(["봄", "여름", "가을", "겨울", "낮", "밤"]);
  const onClickSeasonHandler: MouseEventHandler = (e: any) => {
    setSelected(e.target.innerText);
    setIsLoading(true);
    getPerfumeSeason(seasonMap[e.target.innerText], 1).then((data) => {
      setPerfumes(data.data.content);
      setIsLoading(false);
    });
  };

  const [brands] = useState([
    "바이레도",
    "샤넬",
    "디올",
    "캘빈 클라인",
    "조 말론",
    "딥디크",
    "톰 포드",
    "크리드",
    "펜할리곤스",
  ]);
  const onClickBrandHandler: MouseEventHandler = (e: any) => {
    setSelected(e.target.innerText);
    setIsLoading(true);
    getPerfumeBrand(brandMap[e.target.innerText], 1).then((data) => {
      setPerfumes(data.data.content);
      setIsLoading(false);
    });
  };

  const [genders] = useState(["남자", "여자", "중성"]);
  const onClickGenderHandler: MouseEventHandler = (e: any) => {
    setIsLoading(true);
    setSelected(e.target.innerText);
    getPerfumeGender(genderMap[e.target.innerText], 1).then((data) => {
      setPerfumes(data.data.content);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getPerfumeSeason("winter", 1).then((data) =>
      setPerfumes(data.data.content)
    );
  }, []);

  return (
    <>
      <SCategoryWrap>
        <Sh2>계절</Sh2>
        <SFlexWrap>
          <SFlexUl>
            {seasons.map((season, index) => {
              return (
                <Perfume
                  key={index}
                  select={selected}
                  click={onClickSeasonHandler}
                >
                  {season}
                </Perfume>
              );
            })}
          </SFlexUl>
        </SFlexWrap>
        <Sh2>브랜드</Sh2>
        <SFlexWrap>
          <SFlexUl>
            {brands.map((brand, index) => {
              return (
                <Perfume
                  key={index}
                  select={selected}
                  click={onClickBrandHandler}
                >
                  {brand}
                </Perfume>
              );
            })}
          </SFlexUl>
        </SFlexWrap>
        <Sh2>성별</Sh2>
        <SFlexWrap>
          <SFlexUl>
            {genders.map((gender, index) => {
              return (
                <Perfume
                  key={index}
                  select={selected}
                  click={onClickGenderHandler}
                >
                  {gender}
                </Perfume>
              );
            })}
          </SFlexUl>
        </SFlexWrap>
        <Link to={Page_Url.Map}>가까운 매장 찾아보기</Link>
      </SCategoryWrap>
      <SWrap>
        {isLoading && <LoadingSpinner />}
        {!isLoading &&
          perfumes.map((perfume: Perfume) => {
            return (
              <PerfumeListItem
                key={perfume.perfumeId}
                perfumeId={perfume.perfumeId}
                perfumeImg={perfume.perfumeImg}
                perfumeName={perfume.originName}
                perfumeKorName={perfume.korName}
                perfumeBrand={perfume.brand}
              ></PerfumeListItem>
            );
          })}
      </SWrap>
      {/* <div ref={nextDiv}>loading more perfumes</div> */}
    </>
  );
}

const SCategoryWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  margin: 1em;
`;

const Sh2 = styled.h2`
  font-weight: bold;
  font-size: 16px;
`;

const SFlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const SFlexUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
`;

const SWrap = styled.main`
  display: flex;
  flex-wrap: wrap;
  margin: 1em;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export default CategorySearch;
