import { CourseApi } from './api.js';

export const getCourseById = (args) => {
  console.log(args);

  const query = {
    id: args.id,
  };

  return CourseApi.getCourses(query);
};

export const getAllCoursesByTopic = (args) => {
  console.log(args);
  const { topic } = args;

  const query = {};
  if (topic) {
    query.topic = topic;
  }

  return CourseApi.getCourses(args);
};

export const getAllCourses = () => {
  return CourseApi.getCourses();
};

export const updateCourseTopic = ({ id, topic }) => {
  console.log('ENTRE A updateCourseTopic');
  const data = {
    topic,
  };
  const updatedItem = CourseApi.updateCourse(id, data);

  return updatedItem;
};

export const createCourse = ({ data }) => {
  const newCourse = CourseApi.createCourse(data);

  return newCourse;
};

export const deleteCourse = ({ id }) => {
  CourseApi.deleteCourse(id);
  return true;
};

export const getMessage = () => {
  return 'Hola Mundo!';
};

export const getArrayOfMessages = () => {
  return 'Hola Mundo!'.split(' ');
};

export const getNumber = () => {
  return 123;
};

export const getArrayOfNumbers = () => {
  return [1, 2, 3];
};
