import React from "react";
import styled from "styled-components";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const MenuBar = () => {
  return (
    <div>
      <Wrapper>
        <div className="menu-bar">
          <div className="container menu-container">
            <div className="content-left">
              <div className="logo">LOGO</div>
              <div>
                <ul className="menu">
                  <li className="link">Home</li>
                  <li className="link">About</li>
                  <li className="link">
                    <div className="dropdown">
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
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  .menu-bar {
    background-color: none;
    color: #fff;
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
`;

export default MenuBar;
