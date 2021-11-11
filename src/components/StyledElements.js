import styled from 'styled-components';

export const HeaderTitle = styled.h1`
  display: inline-block;
  margin-bottom: 2%;
  font-size: 3rem;
`;

export const HeaderLink = styled.a`
  text-decoration: none;
  color: #c9d1d9;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2%;
  background: rgb(13, 17, 23);
  border: 1px solid #30363d;
  border-radius: 5px;

  @media (min-width: 1285px) {
    width: 40%;
    margin: 1% auto;
  }
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  position: relative;
`;

export const SearchIconWrap = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  padding-left: 0.75rem;
  display: flex;
  align-items: center;
  pointer-events: none;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 6vh;
  font-size: 1.2rem;
  margin-right: 1.2%;
  padding: 0.5%;
  padding-left: 2.5rem;
  box-sizing: border-box;
  background-color: hsl(218, 24%, 17%);
  outline: none;
  border: unset;
  border-radius: 4px;
  transition: background-color 0.15s ease;
  color: #c9d1d9;

  &::placeholder {
    color: rgba(201, 209, 217, 0.35);
  }

  &:focus {
    border: 1px solid #2ecc71;
  }

  @media (min-width: 1285px) {
    width: 40%;
    height: 4vh;
  }
`;

export const FormButton = styled.button`
  height: 6vh;
  width: auto;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  padding: 0 2.4%;
  outline: none;
  text-decoration: none;
  background-color: #2ecc71;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(75%);
  }

  @media (min-width: 1285px) {
    height: 4vh;
    font-size: 1.2rem;
  }
`;

export const UserCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2%;
  font-size: 1.3rem;
  margin-bottom: 2%;

  @media (min-width: 520px) {
    flex-direction: row;
    font-size: 0.8rem;
  }
`;

export const UserImg = styled.img`
  width: 100%;
  margin-right: 2%;
  border-radius: 4px;

  @media (min-width: 520px) {
    width: 250px;
    height: 250px;
  }
`;

export const UserDetails = styled.div`
  margin-right: 2%;
  line-height: 2em;
  font-size: 1.2rem;

  @media (min-width: 420px) {
    font-size: 1.5rem;
  }
`;

export const UserTitle = styled.h2`
  margin-bottom: 3%;
  margin: 0;
`;

export const UserBio = styled.span`
  font-weight: bold;
`;

export const FollowerText = styled.h2`
  font-size: 2rem;
`;

export const FollowerContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  margin-top: 2%;

  @media (min-width: 420px) {
    font-size: 1rem;
  }
`;

export const FollowerCard = styled.figure`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 5%;
`;

export const FollowerImg = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 2%;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s all ease-in-out;

  &:hover {
    filter: brightness(60%);
    transform: scale(1.1);
  }

  @media (max-width: 315px) {
    width: 100%;
    height: 100%;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #c9d1d9;
  text-decoration: underline;
  text-underline-offset: 2px;
  text-transform: uppercase;
`;

export const FollowerName = styled.figcaption`
  display: block;
  font-weight: bold;
  font-size: 0.8rem;
`;
