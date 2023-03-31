import CardInfo from "../card-info/card-info";
import { CardListContainer } from "./cardlist.style";
import { IRobots } from "../../App";

interface ICardList {
  userRobots: IRobots[];
}

const Cardlist = ({ userRobots }: ICardList) => {
  return (
    <CardListContainer>
      {userRobots.map((item) => {
        const { name, email, id } = item;
        return (
          <CardInfo key={id} robotName={name} robotEmail={email} robotId={id} />
        );
      })}
    </CardListContainer>
  );
};

export default Cardlist;
