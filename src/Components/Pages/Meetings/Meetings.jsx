import { Title, City, AddressWrapper, Street, Data, Time, Mapa, FirstWrapper, SecondWrapper } from "./Meetings.styled"

export const Meetings = () => {
    return (
        <div>
            <Title>Mityngi AA</Title>
            <FirstWrapper>
                <AddressWrapper>
                <City>Sztokholm</City>
                 <Street>Karlbergsvägen 32B</Street>
                <Data>Niedziela: <Time>20:00</Time></Data>   
                </AddressWrapper>
                <Mapa>Mapa</Mapa>
            </FirstWrapper>
            <SecondWrapper>
                <AddressWrapper>
                <City>Vendelsö</City>
                 <Street>Vendelsömalmsvägen 200</Street>
                <Data>Sobota: <Time>19:00</Time></Data>   
                </AddressWrapper>
                <Mapa>Mapa</Mapa>
            </SecondWrapper>
        </div>
    )
}