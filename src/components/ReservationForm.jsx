import {useEffect, useState, useRef} from "react";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Textarea,
  InputLeftElement,
  InputRightElement,
  InputGroup,
  Icon,
} from "@chakra-ui/react";
import {
  LiaUserCircle,
  LiaUserFriendsSolid,
  LiaPhoneSolid,
  LiaGlassCheersSolid,
  LiaCommentDots,
  LiaCheckCircle,
  LiaCalendarAltSolid,
  LiaClock
 } from "react-icons/lia";
import * as Yup from 'yup';
import {fetchAPI,submitAPI} from '../API/apiSimulator';

const ReservationForm = ({availableTimes, updateTimes}) => {

    const [times, setTimes] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if (availableTimes instanceof Promise) {
          availableTimes
            .then((resolvedTimes) => {
              setTimes(resolvedTimes);
            })
            .catch((error) => {
              console.error("Error fetching available times:", error);
            });
        } else {
          setTimes(availableTimes);
        }
      }, [availableTimes]);

    const phoneRegExp = /^((\+[1-9]{1,4}[\s\-]*)|(\([0-9]{2,3}\)[\s\-]*)|([0-9]{2,4})[\s\-]*)*?[0-9]{3,4}?[\s\-]*[0-9]{3,4}?$/


    const formik = useFormik({
        initialValues: {
          name: '',
          phone: '',
          type: '',
          date: '',
          time: '',
          numPersons: 1,
          comment: '',
        },
        onSubmit: async (values) => {
            const response = await submitAPI(values);
            if (response === true) {
                navigate('/confirmed');
            }
        },
        validationSchema: Yup.object({
          name: Yup.string().required('Name is required'),
          phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone is required'),
          type: Yup.string(),
          date: Yup.date()
            .required('Date is required')
            .test('date', 'Date cannot be in the past', function (value) {
                const currentDate = new Date();
                currentDate.setHours(0, 0, 0, 0);
                return value >= currentDate;
            }),
            time: Yup.string().test('time', 'Please choose another day', (value) => {
                return value !== 'No available times for selected date.';
              }).required('Time is required'),
          numPersons:Yup.number()
            .min(1, 'Number of guests must be greater than 0')
            .max(20, 'Number of guests must be 20 or less')
            .required('Number of guests is required'),
          comment: Yup.string().max(2000, 'Maximum number of characters 2000'),
        }),
    });

    useEffect(() => {
        const todayDate = new Date();
        const dateString = `${todayDate.getFullYear()}-${todayDate.getMonth() + 1 > 10 ? todayDate.getMonth() + 1 : '0' + (todayDate.getMonth() + 1)}-${todayDate.getDate() > 10 ? todayDate.getDate() : '0' + todayDate.getDate()}`;
        const date = formik.values.date ? formik.values.date : dateString;
        formik.setFieldValue('date', date);
        updateTimes({ type: 'update_times', date: date });
    }, [formik.values.date])

    return (
        <form onSubmit={formik.handleSubmit}>
            <FormControl isInvalid={formik.errors.name && formik.touched.name} isRequired>
                <FormLabel htmlFor="name">Name</FormLabel>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <Icon as={LiaUserCircle}/>
                    </InputLeftElement>
                    <Input
                        id="name"
                        name="name"
                        {...formik.getFieldProps('name')}
                    />
                    <InputRightElement display={formik.errors.name && formik.touched.name ? 'none' : formik.touched.name ? 'flex' : 'none'}>
                        <Icon as={LiaCheckCircle} color='green.500'/>
                    </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.phone && formik.touched.phone} isRequired>
                <FormLabel htmlFor="phone">Phone</FormLabel>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <Icon as={LiaPhoneSolid}/>
                    </InputLeftElement>
                    <Input
                        id="phone"
                        name="phone"
                        {...formik.getFieldProps('phone')}
                    />
                    <InputRightElement display={formik.errors.phone && formik.touched.phone ? 'none' : formik.touched.phone ? 'flex' : 'none'}>
                        <Icon as={LiaCheckCircle} color='green.500'/>
                    </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="type">Occasion</FormLabel>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <Icon as={LiaGlassCheersSolid}/>
                    </InputLeftElement>
                    <Select
                        placeholder='Select occasion'
                        id="type"
                        name="type"
                        {...formik.getFieldProps('type')}
                        >
                        <option value="Birthday">Birthday</option>
                        <option value="Engagement">Engagement</option>
                        <option value="Aniversary">Aniversary</option>
                        <option value="Other">Other</option>
                    </Select>
                </InputGroup>
            </FormControl>
            <FormControl isInvalid={formik.errors.numPersons && formik.touched.numPersons} isRequired>
                <FormLabel htmlFor="numPersons">Number of guests (1-20)</FormLabel>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <Icon as={LiaUserFriendsSolid}/>
                    </InputLeftElement>
                    <Input
                        type="number"
                        id="numPersons"
                        name="numPersons"
                        {...formik.getFieldProps('numPersons')}
                        >
                    </Input>
                    <InputRightElement display={formik.errors.numPersons && formik.touched.numPersons ? 'none' : formik.touched.numPersons ? 'flex' : 'none'}>
                        <Icon as={LiaCheckCircle} color='green.500'/>
                    </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{formik.errors.numPersons}</FormErrorMessage>
            </FormControl>
            <div className="date_and_time">
                <FormControl isInvalid={formik.errors.date && formik.touched.date} isRequired>
                    <FormLabel htmlFor="date">Date of visit</FormLabel>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <Icon as={LiaCalendarAltSolid}/>
                        </InputLeftElement>
                        <Input
                            paddingRight={formik.errors.date && formik.touched.date ? '9px' : formik.touched.date ? '32px' : '9px'}
                            placeholder="Select Date"
                            type="date"
                            id="date"
                            name="date"
                            {...formik.getFieldProps('date')}
                        />
                        <InputRightElement display={formik.errors.date && formik.touched.date ? 'none' : formik.touched.date ? 'flex' : 'none'}>
                            <Icon as={LiaCheckCircle} color='green.500'/>
                        </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.errors.time && formik.touched.time} isRequired>
                    <FormLabel htmlFor="time">Time</FormLabel>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <Icon as={LiaClock}/>
                        </InputLeftElement>
                        <Select
                            placeholder='Select time'
                            id="time"
                            name="time"
                            {...formik.getFieldProps('time')}
                            >
                            {times.map((time) => (
                                    <option key={time} value={time}>
                                        {time}
                                    </option>
                                ))
                            }
                        </Select>
                    </InputGroup>
                    <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                </FormControl>
            </div>
            <FormControl isInvalid={formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Comment</FormLabel>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <Icon as={LiaCommentDots}/>
                    </InputLeftElement>
                    <Textarea
                        id="comment"
                        name="comment"
                        {...formik.getFieldProps('comment')}
                        placeholder='Specify additional wishes here'
                        resize={'none'}
                    />
                </InputGroup>
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
            </FormControl>
            <Box as='button' type="submit" width="full" disabled={formik.errors.name || formik.errors.phone || formik.errors.date || formik.errors.time}>
                Submit
            </Box>
        </form>
    );
}

export default ReservationForm;