import { popup } from "leaflet";
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
  GroupName,
  OpenDay,
  OpenDayTitle,
} from "./Meetings.styled";

export const Meetings = ({addresses}) => {
  return (
    <Section img={meeting}>
      <Title>Mityngi AA</Title>
      {addresses.map((address, index) => (
        <AddressWrapper key={index}>
          <AddressContainer>
            <City>{address.city}</City>
            <GroupName>"{address.groupName}"</GroupName>
            <Street>{address.street}</Street>
            
            <Date>
              {address.date}: <Time>{address.time}</Time>
            </Date>
            <OpenDayTitle>Mityng otwarty:</OpenDayTitle>
            <OpenDay>{address.openDay}</OpenDay>
          </AddressContainer>
          <MapContainer>
            <BasicMap center={address.coordinate} popup={address.popup} />
          </MapContainer>
        </AddressWrapper>
      ))}
    </Section>
  );
};
