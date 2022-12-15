import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import cors from 'cors';
import {
  getCourseById,
  getAllCoursesByTopic,
  getAllCourses,
  updateCourseTopic,
  createCourse,
  deleteCourse,
  getMessage,
  getArrayOfMessages,
  getNumber,
  getArrayOfNumbers,
} from './controller.js';

const schema = buildSchema(`
 type Query {
        getMessage: String,
        getArrayOfMessages: [String],
        getNumber: Int,
        getArrayOfNumbers: [Int],
        getAllCourses: [Course]
        getCourseById(id: Int!): Course
        getAllCoursesByTopic(topic: String!): [Course]
    },
    type Mutation {
        updateCourseTopic(id: Int!, topic: String!): Course
        createCourse(data: CourseInput!): Course
        deleteCourse(id: Int!): Boolean
    },
    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
    input CourseInput {
      title: String
      author: String
      description: String
      topic: String
      url: String
    }
`);

const app = express();

app.use(cors());
app.use(express.static('public'));

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: {
      getCourseById,
      getAllCoursesByTopic,
      getAllCourses,
      updateCourseTopic,
      createCourse,
      deleteCourse,
      getMessage,
      getArrayOfMessages,
      getNumber,
      getArrayOfNumbers,
    },
    graphiql: true,
  })
);

const PORT = 8080;
app.listen(PORT, () => {
  const msg = `Servidor corriendo en puerto: ${PORT}`;
  console.log(msg);
});
