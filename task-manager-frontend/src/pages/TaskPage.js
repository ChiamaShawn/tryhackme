import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';

import TaskList from '../components/Tasks/TaskList'


const TasksPage = () => {
  return (
    <TaskList />
    
  )
}

export default TasksPage;