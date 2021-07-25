import { Flex, Heading, Input } from '@chakra-ui/react';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import moment from 'moment';
import React, { useState } from 'react';

import { courses } from '../config/courseDB';
import { Option } from '../requests/search';
import { createTicket } from '../requests/ticket';
import { User, Ticket } from '../types/user';

const BoookingForm: React.FC<{
  user: User;
  tickets: Ticket[];
  setTickets: (tickets: Ticket[]) => void;
}> = ({ user, tickets, setTickets }) => {
  const defaultDateTime = new Date(Date.now());
  const formatedDate = moment(defaultDateTime).format('YYYY-MM-DD');
  const [options, setOptions] = useState<Option[]>(
    courses.reduce((acc, key, index) => {
      acc.push({
        value: courses[index].CourseID,
        label: courses[index].CourseName.replace(' Golf Course', ''),
        type:
          courses[index].CourseName.includes('10') ||
          courses[index].CourseName.includes('Blue') ||
          courses[index].CourseName.includes('Orchard')
            ? 'option'
            : 'select',
      });
      return acc;
    }, [] as Option[])
  );
  const [date, setDate] = useState<string>(formatedDate);
  const [startTime, setStartTime] = useState<string>('05:00');
  const [endTime, setEndTime] = useState<string>('19:00');
  const [players, setPlayers] = useState<number>(4);

  const handleSubmit = async () => {
    try {
      const ticket = await createTicket({
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
    } catch (err) {
      console.log(err);
    }
  };
  const handleClick = (v: number, k: string) => {
    let courseList = [...options];
    let c: Option[] = [];
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
      return (
        o.label.includes('10') ||
        o.label.includes('Blue') ||
        o.label.includes('Orchard')
      );
    });
    const eighteen = options.filter(o => {
      return (
        !o.label.includes('10') &&
        !o.label.includes('Blue') &&
        !o.label.includes('Orchard')
      );
    });
    return { nine, eighteen };
  };

  return (
    <Flex flexDirection="column" p={'10px'}>
      <Flex flexDirection="column" pr={['0px', '200px']} py="10px">
        <Flex flexDirection="row">
          <Flex flexDirection="column">
            <Flex flexDirection="column">
              <Heading color="gray" size="xs">
                18 Holes
              </Heading>
              <Flex
                w="100%"
                flexDirection="row"
                wrap="wrap"
                alignItems="center"
              >
                {SelectCourses()
                  .eighteen.sort((a, b) =>
                    ('' + a.label).localeCompare(b.label)
                  )
                  .map((o, idx) => {
                    return o.type === 'option' ? (
                      <Chip
                        key={idx}
                        label={o.label}
                        clickable
                        onClick={() => handleClick(o.value, 'select')}
                      />
                    ) : (
                      <Chip
                        key={idx}
                        label={o.label}
                        clickable
                        onClick={() => handleClick(o.value, 'option')}
                        color="primary"
                      />
                    );
                  })}
              </Flex>
            </Flex>
            <Flex flexDirection="column">
              <Heading color="gray" size="xs">
                9 Holes
              </Heading>
              <Flex
                w="100%"
                flexDirection="row"
                wrap="wrap"
                alignItems="center"
              >
                {SelectCourses()
                  .nine.sort((a, b) => ('' + a.label).localeCompare(b.label))
                  .map((o, idx) => {
                    return o.type === 'option' ? (
                      <Chip
                        key={idx}
                        label={o.label}
                        clickable
                        onClick={() => handleClick(o.value, 'select')}
                      />
                    ) : (
                      <Chip
                        key={idx}
                        label={o.label}
                        clickable
                        onClick={() => handleClick(o.value, 'option')}
                        color="primary"
                      />
                    );
                  })}
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex flexDirection="row" alignItems="center" wrap="wrap">
          <Flex flexDirection="column" flexGrow={1}>
            <Heading color="gray" size="xs">
              Date
            </Heading>
            <Input
              type="date"
              w="100%"
              defaultValue={date}
              onChange={e => setDate(e.target.value)}
            ></Input>
          </Flex>
          <Flex flexDirection="column" flexGrow={1}>
            <Heading color="gray" size="xs">
              Start
            </Heading>
            <Input
              w="100%"
              type="time"
              min="05:00"
              defaultValue={startTime}
              onChange={e => setStartTime(e.target.value)}
            ></Input>
          </Flex>
          <Flex flexDirection="column" flexGrow={1}>
            <Heading color="gray" size="xs">
              End
            </Heading>
            <Input
              w="100%"
              type="time"
              defaultValue={endTime}
              onChange={e => setEndTime(e.target.value)}
            ></Input>
          </Flex>
          <Flex flexDirection="column">
            <Heading color="gray" size="xs">
              Players
            </Heading>
            <Input
              w="fit-content"
              type="number"
              defaultValue={players}
              onChange={e => setPlayers(parseInt(e.target.value))}
              min="1"
              max="4"
            ></Input>
          </Flex>
        </Flex>
      </Flex>
      <Button
        onClick={() => {
          handleSubmit();
        }}
        style={{
          alignSelf: 'flex-end',
          background: '#3f51b5',
          color: 'white',
          boxShadow: '-2px 1px 20px 0px grey',
        }}
      >
        Submit Ticket
      </Button>
    </Flex>
  );
};

export default BoookingForm;
