import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
const CompletedTicket = ({ t }) => {
    var _a, _b, _c, _d, _e, _f;
    return (React.createElement(React.Fragment, null,
        React.createElement(Flex, { flexDirection: "row", alignItems: "center", justifyContent: "space-between", w: "100%", flexWrap: "wrap" },
            React.createElement(TicketLabel, { title: "Course", value: (_b = (_a = getTeeTimeInfo(t)) === null || _a === void 0 ? void 0 : _a.CourseName.replace(' Golf Course', '')) !== null && _b !== void 0 ? _b : '' }),
            React.createElement(TicketLabel, { title: "Time", value: (_d = (_c = getTeeTimeInfo(t)) === null || _c === void 0 ? void 0 : _c.ScheduledTime) !== null && _d !== void 0 ? _d : '' }),
            React.createElement(TicketLabel, { title: "Players", value: (_f = `${(_e = getTeeTimeInfo(t)) === null || _e === void 0 ? void 0 : _e.NumberOfPlayers}`) !== null && _f !== void 0 ? _f : '' }),
            React.createElement(TicketLabel, { title: "Status", value: t.status })),
        React.createElement(Flex, { flexDirection: "row", alignItems: "center", justifyContent: "space-between", w: "100%", px: '20px' })));
};
export default CompletedTicket;
const getTeeTimeInfo = (t) => {
    let response = t.searches &&
        t.searches.length > 0 &&
        t.searches[t.searches.length - 1].response &&
        t.searches[t.searches.length - 1].response;
    console.log(response, 'resp');
    if (response) {
        const { CourseName, ScheduledTime, NumberOfPlayers } = response;
        return { CourseName, ScheduledTime, NumberOfPlayers };
    }
};
const TicketLabel = ({ title, value, }) => {
    return (React.createElement(Flex, { flexDirection: "column", flexGrow: 1 },
        React.createElement(Heading, { size: "md", color: "gray" }, title),
        React.createElement(Text, { textTransform: "capitalize" }, value)));
};
// const DateTimeFields: React.FC<{date:string, set:React.Dispatch<React.SetStateAction<string>>}> = ({set}) => {
//   return (
//     <Flex flexDirection="column" flexGrow={1}>
//     <Heading color="gray" size="xs">
//       Date
//     </Heading>
//     <Input
//       type="date"
//       w="100%"
//       defaultValue={date}
//       onChange={e => set(e.target.value)}
//     ></Input>
//   </Flex>
//   );
// };
//# sourceMappingURL=CompletedTicket.js.map