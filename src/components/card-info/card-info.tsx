import { CardContainer } from './card-info.style';

interface ICartInfo {
    robotName: string,
    robotEmail: string,
    robotId: number,
}

const CardInfo = ({robotName, robotEmail, robotId}: ICartInfo) => {
    return(
            <CardContainer>
                <img alt="foto" src={`https://robohash.org/${robotId}?set=set3&size=180x180`} />
                <h2>{robotName}</h2>
                <p>{robotEmail}</p>
            </CardContainer>
    );
}

export default CardInfo;