import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { courses } from '../config/courseDB';
const RegularTicket = ({ t }) => {
    const getNames = (t) => {
        return (React.createElement(Flex, { flexDirection: "column", flexGrow: 1 },
            React.createElement(Heading, { size: "md", color: "gray" }, "Courses"),
            courses.map((c, idx) => {
                return (t.courses.includes(c.CourseID) && (React.createElement(Heading, { size: "md", key: idx }, c.CourseName.replace(' Golf Course', ''))));
            })));
    };
    const convertTime = (time) => {
        let startT = time.split(':');
        let startS = '';
        if (parseInt(startT[0]) > 12) {
            startT[0] = (parseInt(startT[0]) - 12).toString();
            startS = startT.join(':') + ' PM';
        }
        else if (parseInt(startT[0]) === 12) {
            startS = startT.join(':') + ' PM';
        }
        else {
            if (startT[0][0] === '0') {
                startT[0] = startT[0].substring(1);
            }
            startS = startT.join(':') + ' AM';
        }
        return startS;
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Flex, { flexDirection: "row", alignItems: "end", justifyContent: "space-between", w: "100%", flexWrap: "wrap" },
            getNames(t),
            React.createElement(TicketLabel, { title: "Date", value: t.date }),
            React.createElement(TicketLabel, { title: "Time", value: `${convertTime(t.startTime)} - ${convertTime(t.endTime)}` }),
            React.createElement(TicketLabel, { title: "Players", value: `${t.max}` }),
            React.createElement(TicketLabel, { title: "Status", value: t.status }))));
};
export default RegularTicket;
const TicketLabel = ({ title, value, }) => {
    return (React.createElement(Flex, { flexDirection: "column", flexGrow: 1 },
        React.createElement(Heading, { size: "md", color: "gray" }, title),
        React.createElement(Text, { textTransform: "capitalize" }, value)));
};
//# sourceMappingURL=RegularTicket.js.map