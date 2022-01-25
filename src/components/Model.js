import React, { useState } from "react";
import { ContextProvider, useContextData } from "../Global/Context";
const Model = () => {
  const { model } = useContextData();
  const [state, setState] = useState({
    register: true,
    login: false,
  });
  const formsToggle = () => {
    setState({
      ...state,
      register: !state.register,
      login: !state.login,
    });
  };
  return (
    <>
      {model ? (
        <div className="model">
          <div className="model__container">
            <div className="model__form">
              <form>
                <div className="model__group">
                  <img src="/images/instagramLogo.png" alt="" />
                </div>
                <div className="model__group">
                  <input
                    type="text"
                    name="username"
                    class="model__input"
                    placeholder="Username..."
                  />
                </div>
                <div className="model__group">
                  <input
                    type="email"
                    name="email"
                    class="model__input"
                    placeholder="Email..."
                  />
                </div>
                <div className="model__group">
                  <input
                    type="password"
                    name="password"
                    class="model__input"
                    placeholder="Create password..."
                  />
                </div>
                <div className="model__group">
                  <input type="submit" value="Register" class="btn btn-smart" />
                </div>
                <div className="model__group">
                  <span onClick={formsToggle}>Already have an account ?</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Model;
