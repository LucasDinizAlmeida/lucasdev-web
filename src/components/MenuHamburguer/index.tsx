import { FormEvent, ButtonHTMLAttributes } from "react";
import { List, X } from 'phosphor-react';
import { useMenuContext } from "../../context/MenuContext";

interface MenuHamburguerProps {
  onClick: () => void;
}

export function MenuHamburguer({ onClick }: MenuHamburguerProps) {

  const { isOpenMenu } = useMenuContext()

  return (
    <>
      {
        isOpenMenu ?
          <button className="flex lg:hidden" onClick={onClick}>
            <X size={25} color='#6b7280' weight="bold" />
          </button>
          :
          <button className="flex lg:hidden" onClick={onClick}>
            <List size={25} color='#6b7280' weight="bold" />
            {/* <img src="/hamburguer.svg" alt="menu hamburguer" /> */}
          </button>

      }
    </>
  )
}