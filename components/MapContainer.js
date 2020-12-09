import React from "react";
import {
  BannerWrap,
  BannerLeft,
  BannerRight,
  MainText,
  ReasonTitle,
  TerminText,
  ReasonTitleWhite,
} from "../styles/MapContainer";
import MapComponent from "../components/MapComponent";

function MapContainer() {
  return (
    <BannerWrap>
      <BannerLeft>
        <ReasonTitle id="location">Како до Мелодрома?</ReasonTitle>
        <MainText>
          Мелодром се налази недалеко од зграде општине Лапово, у улици Николе
          Пашића 7.
          <br></br>
          <br></br>
          Уколико немате начина да сами дођете до нас, за Вас и ваше дете имамо
          организован превоз...
        </MainText>
        <MapComponent />
      </BannerLeft>
      <BannerRight>
        <ReasonTitleWhite>Слободни термини</ReasonTitleWhite>
        <TerminText>
          <div>
            <svg
              fill="white"
              id="Capa_1"
              enableBackground="new 0 0 443.294 443.294"
              height="30"
              viewBox="0 0 443.294 443.294"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m221.647 0c-122.214 0-221.647 99.433-221.647 221.647s99.433 221.647 221.647 221.647 221.647-99.433 221.647-221.647-99.433-221.647-221.647-221.647zm0 415.588c-106.941 0-193.941-87-193.941-193.941s87-193.941 193.941-193.941 193.941 87 193.941 193.941-87 193.941-193.941 193.941z" />
              <path d="m235.5 83.118h-27.706v144.265l87.176 87.176 19.589-19.589-79.059-79.059z" />
            </svg>
          </div>

          <span style={{ marginLeft: "20px" }}> Понедељак</span>
        </TerminText>
        <TerminText>
          <div>
            <svg
              fill="white"
              id="Capa_1"
              enableBackground="new 0 0 443.294 443.294"
              height="30"
              viewBox="0 0 443.294 443.294"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m221.647 0c-122.214 0-221.647 99.433-221.647 221.647s99.433 221.647 221.647 221.647 221.647-99.433 221.647-221.647-99.433-221.647-221.647-221.647zm0 415.588c-106.941 0-193.941-87-193.941-193.941s87-193.941 193.941-193.941 193.941 87 193.941 193.941-87 193.941-193.941 193.941z" />
              <path d="m235.5 83.118h-27.706v144.265l87.176 87.176 19.589-19.589-79.059-79.059z" />
            </svg>
          </div>

          <span style={{ marginLeft: "20px" }}> Уторак</span>
        </TerminText>
        <TerminText>
          <div>
            <svg
              fill="white"
              id="Capa_1"
              enableBackground="new 0 0 443.294 443.294"
              height="30"
              viewBox="0 0 443.294 443.294"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m221.647 0c-122.214 0-221.647 99.433-221.647 221.647s99.433 221.647 221.647 221.647 221.647-99.433 221.647-221.647-99.433-221.647-221.647-221.647zm0 415.588c-106.941 0-193.941-87-193.941-193.941s87-193.941 193.941-193.941 193.941 87 193.941 193.941-87 193.941-193.941 193.941z" />
              <path d="m235.5 83.118h-27.706v144.265l87.176 87.176 19.589-19.589-79.059-79.059z" />
            </svg>
          </div>

          <span style={{ marginLeft: "20px" }}> Среда</span>
        </TerminText>
        <TerminText>
          <div>
            <svg
              fill="white"
              id="Capa_1"
              enableBackground="new 0 0 443.294 443.294"
              height="30"
              viewBox="0 0 443.294 443.294"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m221.647 0c-122.214 0-221.647 99.433-221.647 221.647s99.433 221.647 221.647 221.647 221.647-99.433 221.647-221.647-99.433-221.647-221.647-221.647zm0 415.588c-106.941 0-193.941-87-193.941-193.941s87-193.941 193.941-193.941 193.941 87 193.941 193.941-87 193.941-193.941 193.941z" />
              <path d="m235.5 83.118h-27.706v144.265l87.176 87.176 19.589-19.589-79.059-79.059z" />
            </svg>
          </div>

          <span style={{ marginLeft: "20px" }}> Четвртак</span>
        </TerminText>
        <TerminText>
          <div>
            <svg
              fill="white"
              id="Capa_1"
              enableBackground="new 0 0 443.294 443.294"
              height="30"
              viewBox="0 0 443.294 443.294"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m221.647 0c-122.214 0-221.647 99.433-221.647 221.647s99.433 221.647 221.647 221.647 221.647-99.433 221.647-221.647-99.433-221.647-221.647-221.647zm0 415.588c-106.941 0-193.941-87-193.941-193.941s87-193.941 193.941-193.941 193.941 87 193.941 193.941-87 193.941-193.941 193.941z" />
              <path d="m235.5 83.118h-27.706v144.265l87.176 87.176 19.589-19.589-79.059-79.059z" />
            </svg>
          </div>

          <span style={{ marginLeft: "20px" }}> Петак</span>
        </TerminText>
      </BannerRight>
    </BannerWrap>
  );
}

export default MapContainer;
