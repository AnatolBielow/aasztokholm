import meeting from "../../Images/meeting.jpg";
import { BasicMap } from "../../Map/BasicMap";

import {
  Title,
  City,
  AddressWrapper,
  Street,
  Date,
  Time,
  AddressContainer,
  Section,
  MapContainer,
} from "./Meetings.styled";

export const Meetings = (props,{addresses}) => {
  return (
    <Section img={meeting}>
      <Title>Mityngi AA</Title>
      {addresses.map((address, index) => (
        <AddressWrapper key={index}>
          <AddressContainer>
            <City>{address.city}</City>
            <Street>{address.street}</Street>
            <Date>
              {address.date}: <Time>{address.time}</Time>
            </Date>
          </AddressContainer>
          <MapContainer>
            <BasicMap center={address.coordinate} popup={address.popup} />
          </MapContainer>
        </AddressWrapper>
      ))}
    </Section>
  );
};
