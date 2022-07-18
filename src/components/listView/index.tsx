import { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemLi, ViewUl } from "./styles";
import { Context } from '../../context/partsContext';
interface Props {
  items: any;
}

interface Item {
  name: string;
  type: string;
  price: string;
}
const ListView: React.FC<Props> = ({ items }) => {
  const { handlePart } = useContext(Context);
  function handleClick(value: Item): void {
    if (handlePart) {
      handlePart(value)
    }
    return;
  }
  return (
    <ViewUl>
      {
        items.map((value: Item, key: number) => {
          return (
            <Link to={'/parts'} key={key} onClick={() => handleClick(value)}>
              <ItemLi>
                <span>{value.name}</span>
                <span>{value.type}</span>
                <span>{value.price}</span>
              </ItemLi>
            </Link>
          )
        })
      }
    </ViewUl>
  );
}

export default ListView;