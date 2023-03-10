import { RootState } from "@/store";
import { ShoppingCart } from "phosphor-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Container, Logo } from "./styles";
import { dialogCartShowOrHide } from "../../store/utilStore";
import NavMenu from "../AppShoppingCart";
interface AppHeaderType {
  buttonBaget?: number;
}

const AppHeader: React.FC<AppHeaderType> = (props: AppHeaderType) => {
  const [isShowCart, setIsShowCart] = useState(true);
  //=============================
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.util.products);

  return (
    <>
      <Container>
        <Logo>
          <h1>MKS</h1>
          <p>Sistemas</p>
        </Logo>
        <Button
          onClick={() => {
            setIsShowCart(true), dispatch(dialogCartShowOrHide(isShowCart));
          }}
        >
          <div>
            <ShoppingCart size={20} color="#2f2f2f" weight="bold" />
            <span>{products.items.length}</span>
          </div>
        </Button>
      </Container>
      <NavMenu />
    </>
  );
};

export default AppHeader;
