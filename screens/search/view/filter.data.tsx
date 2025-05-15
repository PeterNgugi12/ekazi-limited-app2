import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../theme/colors';
import {scale} from '../../../theme/scale';

export const data = [
  {
    id: 1,
    label: 'All Services',
    value: 'All Services',
  },
  {
    id: 2,
    label: 'Popular Services',
    value: 'Popular Services',
  },
  /*{
    id: 3,
    label: 'Premium Services',
    value: 'Premium Services',
  },*/
];

export const serviceType = [
  {
    id: 1,
    label: 'Hourly',
    value: 'Hourly',
  },
  {
    id: 2,
    label: 'Daily',
    value: 'Daily',
  },
  {
    id: 3,
    label: 'Monthly',
    value: 'Monthly',
  },
 
];

export const experienceLevel = [
  {
    id: 1,
    label: 'Beginner',
    value: 'Beginner',
  },
  {
    id: 2,
    label: 'Intermediate',
    value: 'Intermediate',
  },
 /* {
    id: 3,
    label: 'Expert',
    value: 'Expert',
  },*/
];

export const serviceCategory = [
  {
    id: 1,
    label: 'Cleaning',
    value: 'Cleaning',
  },
  {
    id: 2,
    label: 'Repairs',
    value: 'Repairs',
  },
  {
    id: 3,
    label: 'Beauty',
    value: 'Beauty',
  },
  /*{
    id: 4,
    label: 'Consulting',
    value: 'Consulting',
  },*/
];

export const genderData = [
  {
    id: 1,
    label: 'Male',
    value: 'Male',
    component: <MaterialCommunityIcons name="human-male" size={scale(18)} />,
  },
  {
    id: 2,
    label: 'Female',
    value: 'Female',
    component: <MaterialCommunityIcons name="human-female" size={scale(18)} />,
  },
  {
    id: 3,
    label: 'Others',
    value: 'Others',
    component: (
      <MaterialCommunityIcons name="gender-male-female" size={scale(18)} />
    ),
  },
];