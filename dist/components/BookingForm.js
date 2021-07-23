var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Flex, Heading, Input } from '@chakra-ui/react';
import { Button } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import moment from 'moment';
import React, { useState } from 'react';
import { courses } from '../config/courseDB';
import { createTicket } from '../requests/ticket';
const BoookingForm = ({ user, tickets, setTickets }) => {
    const defaultDateTime = new Date(Date.now());
    const formatedDate = moment(defaultDateTime).format('YYYY-MM-DD');
    const [options, setOptions] = useState(courses.reduce((acc, key, index) => {
        acc.push({
            value: courses[index].CourseID,
            label: courses[index].CourseName.replace(' Golf Course', ''),
            type: courses[index].CourseName.includes('10') ||
                courses[index].CourseName.includes('Blue') ||
                courses[index].CourseName.includes('Orchard')
                ? 'option'
                : 'select',
        });
        return acc;
    }, []));
    const [date, setDate] = useState(formatedDate);
    const [startTime, setStartTime] = useState('05:00');
    const [endTime, setEndTime] = useState('19:00');
    const [players, setPlayers] = useState(4);
    const handleSubmit = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const ticket = yield createTicket({
                userId: user.id,
                courses: options
                    .filter(c => c.type === 'select')
                    .map(c => {
                    return c.value;
                }),
                date,
                startTime,
                endTime,
                min: 0,
                max: players,
            });
            if (ticket) {
                setTickets([ticket, ...tickets]);
            }
            console.log(ticket);
        }
        catch (err) {
            console.log(err);
        }
    });
    const handleClick = (v, k) => {
        let courseList = [...options];
        let c = [];
        courseList.forEach(course => {
            if (course.value === v) {
                course.type = k;
            }
            c.push(course);
        });
        setOptions(c);
    };
    const SelectCourses = () => {
        const nine = options.filter(o => {
            return (o.label.includes('10') ||
                o.label.includes('Blue') ||
                o.label.includes('Orchard'));
        });
        const eighteen = options.filter(o => {
            return (!o.label.includes('10') &&
                !o.label.includes('Blue') &&
                !o.label.includes('Orchard'));
        });
        return { nine, eighteen };
    };
    return (React.createElement(Flex, { flexDirection: "column", p: '10px' },
        React.createElement(Flex, { flexDirection: "column", pr: ['0px', '200px'], py: "10px" },
            React.createElement(Flex, { flexDirection: "row" },
                React.createElement(Flex, { flexDirection: "column" },
                    React.createElement(Flex, { flexDirection: "column" },
                        React.createElement(Heading, { color: "gray", size: "xs" }, "18 Holes"),
                        React.createElement(Flex, { w: "100%", flexDirection: "row", wrap: "wrap", alignItems: "center" }, SelectCourses()
                            .eighteen.sort((a, b) => ('' + a.label).localeCompare(b.label))
                            .map((o, idx) => {
                            return o.type === 'option' ? (React.createElement(Chip, { key: idx, label: o.label, clickable: true, onClick: () => handleClick(o.value, 'select') })) : (React.createElement(Chip, { key: idx, label: o.label, clickable: true, onClick: () => handleClick(o.value, 'option'), color: "primary" }));
                        }))),
                    React.createElement(Flex, { flexDirection: "column" },
                        React.createElement(Heading, { color: "gray", size: "xs" }, "9 Holes"),
                        React.createElement(Flex, { w: "100%", flexDirection: "row", wrap: "wrap", alignItems: "center" }, SelectCourses()
                            .nine.sort((a, b) => ('' + a.label).localeCompare(b.label))
                            .map((o, idx) => {
                            return o.type === 'option' ? (React.createElement(Chip, { key: idx, label: o.label, clickable: true, onClick: () => handleClick(o.value, 'select') })) : (React.createElement(Chip, { key: idx, label: o.label, clickable: true, onClick: () => handleClick(o.value, 'option'), color: "primary" }));
                        }))))),
            React.createElement(Flex, { flexDirection: "row", alignItems: "center", wrap: "wrap" },
                React.createElement(Flex, { flexDirection: "column", flexGrow: 1 },
                    React.createElement(Heading, { color: "gray", size: "xs" }, "Date"),
                    React.createElement(Input, { type: "date", w: "100%", defaultValue: date, onChange: e => setDate(e.target.value) })),
                React.createElement(Flex, { flexDirection: "column", flexGrow: 1 },
                    React.createElement(Heading, { color: "gray", size: "xs" }, "Start"),
                    React.createElement(Input, { w: "100%", type: "time", min: "05:00", defaultValue: startTime, onChange: e => setStartTime(e.target.value) })),
                React.createElement(Flex, { flexDirection: "column", flexGrow: 1 },
                    React.createElement(Heading, { color: "gray", size: "xs" }, "End"),
                    React.createElement(Input, { w: "100%", type: "time", defaultValue: endTime, onChange: e => setEndTime(e.target.value) })),
                React.createElement(Flex, { flexDirection: "column" },
                    React.createElement(Heading, { color: "gray", size: "xs" }, "Players"),
                    React.createElement(Input, { w: "fit-content", type: "number", defaultValue: players, onChange: e => setPlayers(parseInt(e.target.value)), min: "1", max: "4" })))),
        React.createElement(Button, { onClick: () => {
                handleSubmit();
            }, style: {
                alignSelf: 'flex-end',
                background: '#3f51b5',
                color: 'white',
                boxShadow: '-2px 1px 20px 0px grey',
            } }, "Submit Ticket")));
};
export default BoookingForm;
//# sourceMappingURL=BookingForm.js.map