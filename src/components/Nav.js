import React from "react";
import styled from "styled-components";
import { PhoneIcon } from "@heroicons/react/24/outline";

const Nav = () => {
  return (
    <div>
      <Wrapper>
        <div className="nav">
          <div className="container nav-container">
            <div className="call-us">
              <PhoneIcon className="icon" />
              <div className="phnum">Call us: 783 367 2678</div>
            </div>
            <div className="buttons">
              <div className="button">Free brochure</div>
              <div className="button">Help centre</div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  .nav {
    background-color: none;
    color: #fff;
    height: 50px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    .call-us {
      display: flex;
      align-items: center;
      font-weight: 400;
      font-size: 15px;
      .icon {
        height: 16px;
        width: 16px;
        color: rgba(255, 255, 255, 0.5);
      }
      .phnum {
        padding-left: 12px;
      }
    }
    .buttons {
      display: flex;
      font-weight: 400;
      font-size: 13px;
      line-height: 17px;
      .button {
        display: flex;
        align-items: center;
        padding-left: 24px;
        padding-right: 24px;
        height: 50px;
        border-right: 1px solid rgba(255, 255, 255, 0.2);
        border-left: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }
`;

export default Nav;
