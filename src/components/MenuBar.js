import React, { useState } from "react";
import styled from "styled-components";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useRecoilState } from "recoil";
import { menuOpenState } from "../Store";

const MenuBar = () => {
  const [menuOpen, setMenuOpen] = useRecoilState(menuOpenState);
  return (
    <div>
      <Wrapper menuOpen={menuOpen}>
        <div className="menu-bar">
          <div className="container menu-container">
            <div className="content-left">
              <div className="logo">LOGO</div>
              <div>
                <ul className="menu">
                  <li className="link">Home</li>
                  <li className="link">About</li>
                  <li className="link">
                    <div
                      className="dropdown"
                      onMouseOver={() => setMenuOpen(true)}
                    >
                      Products
                      <ChevronDownIcon className="icon" />
                    </div>
                  </li>
                  <li className="link">Projects</li>
                  <li className="link">Sustainability</li>
                  <li className="link">More</li>
                </ul>
              </div>
            </div>
            <div className="content-right">
              <MagnifyingGlassIcon className="icon" />
              <div>Sign In</div>
            </div>
          </div>
        </div>
        <div className="dropDownMenu" onMouseOut={() => setMenuOpen(false)}>
          <div
            className="menu-content container"
            onMouseOver={() => setMenuOpen(true)}
          >
            <div className="left-side">
              <div className="main-menus">
                <ul>
                  <li className="type">By Size</li>
                  <li>Small Bifolds</li>
                  <li>Medium Bifolds</li>
                  <li>Large Bifolds</li>
                  <li>All Stock Bifolds</li>
                </ul>
                <ul>
                  <li className="type">By Type</li>
                  <li>Stock Bifolds</li>
                  <li>Corner Bifolds</li>
                  <li>Bespoke Bifolds</li>
                </ul>
                <ul>
                  <li className="type">By Panel</li>
                  <li>2 Panel Bifolds</li>
                  <li>3 Panel Bifolds</li>
                  <li>4 Panel Bifolds</li>
                  <li>5 Panel Bifolds</li>
                  <li>6 Panel Bifolds</li>
                  <li>7 Panel Bifolds</li>
                </ul>
              </div>
            </div>
            <div className="right-side">
              <img src={process.env.PUBLIC_URL + "/images/menuimage.jpg"} />
              <div className="texts">
                <h3>Bespoke Bifolds</h3>
                <p>Our most popular bifold. Perfect for thermal efficiency.</p>
                <a href="#">Create your own</a>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  .menu-bar {
    background-color: ${(props) => (props.menuOpen ? "#fff" : "none")};
    color: ${(props) => (props.menuOpen ? "#000" : "#fff")};
    .menu-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .content-left {
        display: flex;
        align-items: center;
        .logo {
          padding: 29px 0px;
          margin-right: 119px;
          font-weight: 500;
          font-size: 32px;
          line-height: 25px;
        }
        .menu {
          display: flex;
          column-gap: 40px;
          .link {
            cursor: pointer;
            .dropdown {
              display: flex;
              align-items: center;
              .icon {
                margin-left: 8px;
                height: 16px;
                width: 19px;
              }
            }
          }
          .link:hover {
            color: #ea4715;
          }
        }
      }
      .content-right {
        display: flex;
        align-items: center;
        .icon {
          height: 16px;
          width: 16px;
          margin-right: 30px;
        }
      }
    }
  }
  .dropDownMenu {
    position: absolute;
    width: 100%;
    height: 330px;
    background-color: #fff;
    border-top: 1px solid #e7e7eb;
    visibility: ${(props) => (props.menuOpen ? "visible" : "hidden")};
    .menu-content {
      display: flex;
      .left-side {
        flex: 3;
        padding-right: 100px;
        .main-menus {
          display: flex;
          justify-content: space-between;
          ul {
            li {
              margin-top: 16px;
              color: #022c3b;
              font-weight: 400;
              font-size: 14px;
              line-height: 150%;
              cursor: pointer;
            }
            li:hover {
              color: #ea4715;
            }
            .type {
              font-weight: 500;
              font-size: 18px;
            }
          }
        }
      }
      .right-side {
        position: relative;
        flex: 2;
        background-color: #000;
        height: 330px;
        img {
          opacity: 50%;
        }
        .texts {
          position: absolute;
          margin-top: -150px;
          padding-left: 36px;
          color: #fff;
          h3 {
            color: #fff;
            font-weight: 500;
            font-size: 26px;
            line-height: 34px;
          }
          p {
            max-width: 270px;
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
          }
          a {
            max-width: 270px;
            font-weight: 500;
            font-size: 14px;
            color: #fff;
            line-height: 150%;
          }
        }
      }
    }
  }
`;

export default MenuBar;
