import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { DefaultInput } from "../../styles/GlobalStyledComponents";
import { HeaderContainer, HeaderLinks } from "./HeaderStyles";
import { updateSearchTerm } from "../../store/search/actions";
import { useDispatch } from "react-redux";

export const Header = ({ hideSearchBar, links }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();

  //Resets the searchbar and results when the user navigates to other page
  useEffect(() => {
    dispatch(updateSearchTerm(""));
    setLocalSearchTerm("");
  }, [location.pathname]);

  // Search responsiveness has a timeout being reset each
  // time the user types, only triggering the searchTerm
  // when 0.7s have passed since the last typed character
  const activeTimeout = useRef(null);

  const onChangeSearchTerm = (e) => {
    setLocalSearchTerm(e.target.value);

    if (activeTimeout.current) {
      clearTimeout(activeTimeout.current);
    }

    activeTimeout.current = setTimeout(() => {
      dispatch(updateSearchTerm(e.target.value));
    }, 700);
  };

  return (
    <HeaderContainer>
      {!hideSearchBar && (
        <DefaultInput
          placeholder='Search'
          value={localSearchTerm}
          onChange={onChangeSearchTerm}
        />
      )}
      <HeaderLinks>
        {links.map((link, index) => {
          return link.to ? (
            <Link key={index} to={link.to}>
              {link.text}
            </Link>
          ) : (
            <a key={index} onClick={link.action}>
              {link.text}
            </a>
          );
        })}
      </HeaderLinks>
    </HeaderContainer>
  );
};
