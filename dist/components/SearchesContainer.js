import { Flex, Heading, Table, Tbody, Td, Th, Thead, Tr, useMediaQuery, } from '@chakra-ui/react';
import moment from 'moment';
import React from 'react';
const SearchesContainer = ({ t }) => {
    var _a;
    const moreThan600 = useMediaQuery('(min-width: 680px)');
    return (React.createElement(Flex, { flexDirection: "column", px: ['0px', '25px'], pt: "10px" },
        React.createElement(Heading, { size: "xs" }, "Searches"),
        React.createElement(Table, { size: "sm" },
            React.createElement(Thead, null,
                React.createElement(Tr, null,
                    React.createElement(Th, null, "Time"),
                    React.createElement(Th, null, "Status"),
                    React.createElement(Th, null, "Comments"))), (_a = t === null || t === void 0 ? void 0 : t.searches) === null || _a === void 0 ? void 0 :
            _a.map((s, idx) => {
                return (React.createElement(Tbody, { key: idx },
                    React.createElement(Tr, null,
                        React.createElement(Td, { fontSize: ['10px', '12px', '14px'], py: [0, '5px'] }, moreThan600[0]
                            ? moment(s.createdAt).format('MMMM Do YYYY, h:mm a')
                            : moment(s.createdAt).format('MM/DD/YY, h:mm a')),
                        React.createElement(Td, { py: [0, '5px'], fontSize: ['10px', '12px', '14px'] }, s.status),
                        React.createElement(Td, { py: [0, '5px'], fontSize: ['10px', '12px', '14px'] }, s.comments))));
            }))));
};
export default SearchesContainer;
//# sourceMappingURL=SearchesContainer.js.map